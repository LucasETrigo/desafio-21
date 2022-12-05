import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

export default {
    mongodb: {
        connectionString: process.env.MONGODB_CONNECTION_STRING,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "e-commerce-backend-c2284",
        "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
        "private_key": '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2ZORUe6LwKRCb\n2wCJJkpyFr6A0E6DLrM26vivAxlGxWrXTSC2XwYl40AAUb+q0XsJRXuHo+6JL7Gr\nP62sZx4U0DjHhMU1id3+x3jX+XuGemJI5JSKTSpITqOOxVvkSdt0qsoCa0uFkBBN\nxsW8MMrBkAckG4HSlmyFc4ylhgAY9s+UXid+9j7Q1clehJdKRdcmM6AEVpp6nlvn\nuLZPxBChOYAW8Yf0iDA1PkR9PMpq/pF5cKrOMhKa9Q1Fz3wjDjnoH1PpeQrgbyGC\n47Ie/gCS8X4U+lTzl8j1jQDGMwok51+NItCH101byk1JuWFkaJYn82LZFXNzaBnL\nk+/QrYQpAgMBAAECggEADC4McFbURejcHChMWXGbkZGoFZEzg6pD8KQmyLByiOm9\n2CmlSFXBTZjmvnlht6i8UwgXNx2GRut5gsJ3w3ZHCY6bvWPF8+y5t3M/GYm7tbp+\nTeNTxwY0T2FO+0WofK7GRKdzYiTORYRIuRo6Z0uJJ/1eo2A3M7v0pxcVBT2qS9Wx\n6eFsafHLJPWLOi978JxLYeFWHFk304L7FjLKmNhKBVUYHPUletXavx1EIlzkQEq7\nt1pp7wnk52GJPD0eahyQ/hzyig+JjfkrWZDveuZsWEbZkc5qWZarqQChi5CbMgQB\n27sikujuOYQFsCWXiXdB5PO8onlS9uzresGTfw6XDQKBgQDlLYdae1YvAa0Tv25E\noxGfSAI5G1ma8IwKoejl4e14pxmsYVm4r45NlbxDIlrF+2v+K4kb+e7ibBX9eo9e\nL54hJJMDOgfm3jYnn0j3LkdyCyQbb9/Qr7oOOeEVl1x+2lDwW+lj0IZqjrp0IPYd\nhurSKwgGNpuki9pxlIi/PIwAdQKBgQDLvakahzkG2XoxO6l4ZsbzCHeqSTLhtniX\nQHxvp7ifZhrZK7bL3Pdp9XEObRGMQZOeO6a38wRGY+4c0UT2kLGotxySBi5ix0fA\nbZGItRAyQIsnOVnloCBwReTF+6uPJlkAig4EljyQyLCHJ0sykRMCj5Q7m0nFw78P\n3QQgVWE+ZQKBgQC0OXOh8jA6UyUazIYYr+xhyC0HX7y9ncFjcyRF87/eC/qilwQJ\nuvU7ii881D1ySGAKx43RVGFJ6hn49nLcbLH7+lkqRm6EXedUjWzCBcDlrGE+umHW\nKPs1yMp7QkbY8zKHcqA9gHTUQ13ZiTpCyiDMGk77I+KOKfUlMNvBGAo5KQKBgCp0\nIsB8XM2ok2We4PlNsTcDFKxPBGMz+nzJ2yQI9teAFygZi8V/Da7ujdhLsdRf9bqL\nA3phEQr516v5jz0xeVOGlFV5JEFA9RqLuj+aOv29pUFPGgRXEWtTpQ/8GQuDGhia\nq8EY7RXeO6pt7aVjxWpLMMAa44xp9W4Ax9NU9yZhAoGAAYMmcpSAFwhYorxnAUkl\n1Ed6Z/AbdQp81zM/FQ7gOHLtOaVgF4jVh+GiXhY9rwCWRa+m73iKWaI7ylMztCw8\nmelH2ZJqVJ5gpjjbQHUC6kfKYbWeSvAiA8Ss8zsj90uTNxIAHUyQI8tgqNYI4cDb\n9QDaqfXAo5hWqNCySTy/1Rk=\n-----END PRIVATE KEY-----\n',
        "client_email": process.env.FIREBASE_CLIENT_EMAIL,
        "client_id": process.env.FIREBASE_CLIENT_ID,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3fauy%40e-commerce-backend-c2284.iam.gserviceaccount.com"
    },
    log4js: {
        appenders: {
            info: { type: "console" },
            errFile: { type: "file", filename: "error.log" },
            warnFile: { type: "file", filename: "warn.log" },

            log: { type: 'logLevelFilter', appender: 'info', level: 'all' },
            errLog: { type: 'logLevelFilter', appender: 'errFile', level: 'error' },
            warnLog: { type: 'logLevelFilter', appender: 'warnFile', level: 'warn' },
        },
        categories: {
            default: {
                appenders: ['log', 'errLog', 'warnLog'],
                level: 'all'
            }
        }
    }
}
