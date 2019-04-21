// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'  
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Header,Switch,Icon,Tabs,Tag} from 'element-ui'
import { Navbar, TabItem, Cell} from 'mint-ui'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(ElementUI)
Vue.component(Tag.name,Tag)
Vue.component(Tabs.name,Tabs)
Vue.component(Button.name,Button)
Vue.component(Header.name,Header)
Vue.component(Switch.name,Switch)
Vue.component(Icon.name,Icon)
Vue.component(Navbar.name,Navbar)
Vue.component(TabItem.name,TabItem)
Vue.component(Cell.name,Cell)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
