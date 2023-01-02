const apiUserRouter = require('./apiUser')
const authRouter = require('./auth')
const videoRouter = require('./video')
const commentRouter = require('./comment')





function route(app) {

    

    app.use('/api/auth', authRouter) 
    app.use('/api/users', apiUserRouter)
    app.use('/api/videos', videoRouter)
    app.use('/api/comment', commentRouter)

    

}

module.exports = route;
