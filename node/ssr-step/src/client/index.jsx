import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import { Provider } from 'react-redux'
import Header from '../components/Header.jsx'
import routes from '../routers'
import { getClientStore } from '../store/index'

const App = function(){
    return (
        <Provider store={getClientStore()}>
        <BrowserRouter>
            {/* <Route path/> */}
            {/* <Header /> */}
            <div>
                { renderRoutes(routes) }
            </div>
        </BrowserRouter>
        </Provider>
    )
}
//复用已有的html，负责时间绑定
ReactDom.hydrate(<App />, document.getElementById('app'))