import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import look from '@/components/look'
import look1 from '@/components/Look1'
import look2 from '@/components/Look2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/look',
      name: 'look',
      component: look,
      children: [
        {
          path: '/look/look1',
          name: 'Look1',
          component: look1
        },
        {
          path: '/look/look2',
          name: 'Look2',
          component: look2
        }
      ]
    },
    {
      path: '/go-back',
      redirect: '/'
    }
  ]
})
