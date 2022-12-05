const getLogin = (req, res) => {
    res.render('login')
}

const postLogin = (req, res) => res.redirect('/');

const getLogout = (req, res) => {
    req.logout({ keepSessionInfo: false }, (err) => res.redirect('/'))
}

const getLoginError = (req, res) => {
    res.render('autherror', { loginError: true })
}

const getRegister = (req, res) => {
    res.render('register');
}

const postRegister = (req, res) => res.redirect('/login');

const getRegisterError = (req, res) => {
    res.render('autherror', { registerError: true })
}

const get = (req, res) => {
    res.render('main', { name: req.user.name, username: req.user.username, avatar: req.user.avatar });
}

export { getLogin, postLogin, getLogout, getLoginError, getRegister, postRegister, getRegisterError, get }