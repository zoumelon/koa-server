let exec = require('child_process').exec
// 用户生成app.tsx
let appConfig = {}
// 缓存日志
let logs = ''
// 缓存首页应用
let homeApps = []

// 缓存应用配置
module.exports = {
  async sendConfig(ctx) {
    ctx.body = {
      config: [
        {
          pageName: '登录',
          key: '1000',
          formConfig: [
            {
              'field': 'jobid',
              'text': '工号',
              'errorMessage': '请输入工号',
              'placeholder': 'placeholder信息',
              'required': true,
              'type': 'int',
              'value': 100
            }, {
              'field': 'date',
              'text': '日期',
              'errorMessage': '请输入日期',
              'required': false,
              'type': 'date',
              'value': '2017-10-20',
              'isRangePicker': false
            }, {
              'field': 'username',
              'text': '用户名placeholder',
              'placeholder': '请输入用户名填写提示信息',
              'required': false,
              'type': 'char',
              'value': '请输入用户名'
            },{
              'field': 'usernameValidate',
              'text': '用户名校验规则',
              'placeholder': '请输入用户名校验方式的正则表达式',
              'errorMessage': '请输入用户名校验方式的正则表达式',
              'required': true,
              'type': 'char',
              'value': '/^[a-zA-Z0-9_]+$/'
            }, {
              'field': 'otherLogin',
              'text': '第三方登陆方式',
              'required': false,
              'type': 'select',
              'value': '不显示',
              'options': ['不显示','微信', 'QQ', '微博']
            },
            {
              'field': 'titleType',
              'text': 'title显示方式',
              'required': false,
              'type': 'select',
              'value': '不显示',
              'options': ['不显示', 'logo','自定义文字']
            },
            {
              'field': '',
              'text': '选择',
              'required': false,
              'type': 'select',
              'value': 'logo',
              'options': ['logo','自定义文字']
            },
            {
              'field': 'password',
              'text': '密码',
              'errorMessage': '请输入密码',
              'required': true,
              'type': 'password',
              'value': '123456'
            },
            {
              'field': 'bgImg',
              'text': '背景图',
              'errorMessage': '请上传背景图片',
              'required': false,
              'type': 'imgUpload',
              'imgUrl': '123456'
            },
            {
              'field': 'loginSubmit',
              'text': '登陆按钮',
              'required': true,
              'type': 'char',
              'value': '登陆'
            },

          ],
          requestJSON: {},
          commonJSON: {}
        }, {
          pageName: '注册',
          key: '2000',
          formConfig: [
            {
              'field': 'customer',
              'text': '注册注册注册',
              'errorMessage': '请输入客户',
              'required': true,
              'type': 'select',
              'value': '1',
              'options': ['1', '3', '4']
            }
          ],
          requestJSON: {},
          commonJSON: {}
        }, {
          pageName: '个人中心',
          key: '3000',
          formConfig: [
            {
              'field': 'customer',
              'text': '个人中心',
              'errorMessage': '请输入客户',
              'required': true,
              'type': 'select',
              'value': '1',
              'options': ['1', '2', '3']
            }
          ],
          requestJSON: {},
          commonJSON: {}
        }, {
          pageName: '设备列表',
          key: '4000',
          formConfig: [
            {
              'field': 'customer',
              'text': '设备列表',
              'errorMessage': '请输入客户',
              'required': true,
              'type': 'select',
              'value': '1',
              'options': ['1', '2', '3']
            }
          ],
          requestJSON: {},
          commonJSON: {}
        }
      ]
    }
  }
}
