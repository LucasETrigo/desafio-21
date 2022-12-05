import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from './middlewares/passport.js';
import { engine } from 'express-handlebars';
import { createServer } from 'http';
import { Server } from 'socket.io';
import sessionRouter from './routes/sessionRouter.js';
import productRouter from './routes/productRouter.js';
import compression from 'compression';
import logger from './utils/logger.js';
import ProductsRepository from './repositories/ProductsRepository.js';
import MessagesRepository from './repositories/MessagesRepository.js';

/*-----------------------------------------------*/
/*                  instances                    */
/*-----------------------------------------------*/
const app = express();
const productsRepo = new ProductsRepository();
const messageRepo = new MessagesRepository();

/*-----------------------------------------------*/
/*                  app setup                    */
/*-----------------------------------------------*/
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000,
        httpOnly: false,
        secure: false
    },
    rolling: true
}));

app.use(passport.initialize())
app.use(passport.session())

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: "./public/views/layouts",
    partialsDir: "./public/views/partials"
}));
app.set('view engine', 'hbs');
app.set('views', "./public/views");

app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use(sessionRouter)
app.use("/api/productos", productRouter)

app.all('*', logger.logReqWarn, (req, res) => {
    res.send('Ruta y metodo no implementados.')
})

/*-----------------------------------------------*/
/*               socket setup                    */
/*-----------------------------------------------*/

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', async socket => {
    logger.logInfo('Un cliente se ha conectado.');

    socket.emit('products', { products: await productsRepo.getAll() })
    socket.emit('messages', { messages: await messageRepo.getAll() });

    socket.on('new-product', async data => {
        await productsRepo.add(data);
        io.sockets.emit('products', { products: await productsRepo.getAll() })
    })

    socket.on('new-chat-message', async data => {
        await messageRepo.add(data);
        io.sockets.emit('messages', { messages: await messageRepo.getAll() })
    });
});

export const serverListen = (PORT) => {
    const server = httpServer.listen(PORT, async () => {
        logger.logInfo(`Servidor fork escuchando en el puerto ${server.address().port}`);
    })
    server.on('error', error => logger.logInfo(`Error en servidor ${error}`));
    return server;
}
