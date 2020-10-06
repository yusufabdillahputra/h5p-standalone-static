require('dotenv').config()
module.exports = {
    name: process.env.APP_NAME,
    script: "serve",
    env: {
        PM2_SERVE_PATH: './dist',
        PM2_SERVE_PORT: process.env.APP_PORT
    }
}