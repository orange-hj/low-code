

import Vue from 'vue'

// 注册所有自定义组件配置
register(require.context('@/custom-components-option', true, /.vue/))

// 注册所有自定义组件
register(require.context('@/custom-components', true, /.vue/))

// 获取所有自定义组件schema数据
registerComponentsSchema()

// /**
//  * 注册对应包下所有组件
//  * @param {*} path 包路径
//  */
function register (context) {
  context.keys().forEach(cnt => {
    const component = context(cnt)
    let ctrl = component.default || component
    let a = ctrl.name
    let b = ctrl

    // 注册组件
    Vue.component(a, b)
  })
}

// 获取所有自定义组件schema
function registerComponentsSchema () {
  const files = require.context('@/custom-components', true, /component.json$/)
  let fields = {}
  let initializing = []

  files.keys().forEach(key => {
    const [, name] = key.split('/')
    let config = { component: name, ...files(key) }
    console.log(config)

    fields[name] = config.fields
    initializing.push(initDefaulValue(config))
  })
  Vue.prototype.$fields = fields
  Vue.prototype.$initializing = initializing
}

// 初始化组件初始数据
function initDefaulValue (config) {
  let { component, name, icon, fields } = config
  let temp = { component, name, icon }
  setDefaultValue(fields, temp)
  return temp
}

// 递归设置各层级初始数据
function setDefaultValue (fields, initializing) {
  for (let key in fields) {
    let { type, value, child } = fields[key]
    if (type == 'object') {
      initializing[key] = {}
      child && setDefaultValue(fields[key].child, initializing[key])
    } else {
      initializing[key] = value
    }
  }
  return initializing
}
