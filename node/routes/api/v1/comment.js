'use strict';

let express = require('express')
let router = express.Router()
let comment = require('../../../controllers/api/v1/comment')
let jwtMiddleWare = require('../../../middlewares/jwt')
let action = require('../../../middlewares/action')

//
router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Request-With,content-type,Authorization')
    next();
});

router.route('/:id')
    .get(comment.show)
    .put(jwtMiddleWare.verify, action.checkAction('COMMENT_UPDATE'), comment.update)
    .delete(jwtMiddleWare.verify, action.checkAction('COMMENT_DELETE'), comment.destroy)

router.route('/:id/update')
    .post(jwtMiddleWare.verify, action.checkAction('COMMENT_UPDATE'), comment.update)

router.route('/:id/destroy')
    .post(jwtMiddleWare.verify, action.checkAction('COMMENT_DELETE'), comment.destroy)
    
router.route('/')
    .get(comment.all)
    .post(jwtMiddleWare.verify, action.checkAction('COMMENT_CREATE'), comment.create)

router.use(function(req, res) {
    res.json({
        success: false,
        error: '无效请求'
    })
})

module.exports = function(app) {
    app.use('/api/v1/comment', router);
};