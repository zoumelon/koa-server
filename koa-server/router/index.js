const Router = require('koa-router');
const koaBody = require('koa-body');

const router = new Router();
const base = require('../controller/base');
// 基础api
router.get('/api/getConfig', base.sendConfig);

module.exports = router;
