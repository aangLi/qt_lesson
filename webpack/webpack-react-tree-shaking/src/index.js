import {includes} from 'lodash'
import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import { add } from './utils'
const HtmlWebPackPlugin = require('html-webpack-plugin')


reactDom.render(<App />, document.getElementById('app'))

console.log(add(1, 2))
console.log(includes(1,2,3))