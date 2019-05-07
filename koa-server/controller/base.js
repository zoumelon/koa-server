let exec = require('child_process').exec;
// 缓存应用配置
module.exports = {
  async sendConfig(ctx) {
    ctx.body = {
      config: JSON.stringify([
        {
          account: '111',
          password: 'aaa',
          job: 1,
          isFinish: false
        },
        {
          account: '122211',
          password: 'aaa',
          job: 2,
          isFinish: false
        },
        {
          account: '333',
          password: 'aaa',
          job: 3,
          isFinish: false
        }
      ])
    };
  }
};
