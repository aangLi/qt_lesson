import React from 'react'
import { Redirect } from 'react-router-dom'
import HomeLayout from '../layout/HomeLayout'
import BlankLayout from '../layout/BlankLayout'
import RecommandComponent from '../application/recommand/index.jsx'
import SingersComponent from '../application/singers/index.jsx'
import RankComponent from '../application/rank/index.jsx'


export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/',
        component: HomeLayout,
        routes: [
          {
            path: '/',
            exact: true,
            render: () => <Redirect to="/recommend" />
          },
          {
            path: '/recommend',
            component: RecommandComponent
          },
          {
            path: '/singers',
            component: SingersComponent
          },
          {
            path: '/rank',
            component: RankComponent
          }
        ]
      }
    ]
  }
]