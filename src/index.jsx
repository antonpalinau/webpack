import Post from './Post'
import './styles/styles.css'
import usa from './assets/usa.png'
import * as $ from 'jquery'
import './styles/less.less'
import './styles/scss.scss'
import './babel'
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash/random'

const post = new Post('Webpack post title', usa)
$('pre').html(post.toString())

console.log('Post to string', post.toString())

//import('lodash').then(_ => console.log(_.random(0, 42, true)))

const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>

        <div className="box">
            <h1>I am Less</h1>
        </div>

        <div className="card">
            <h1>I am SCSS</h1>
        </div>

        <hr />
        <div className="logo"></div>
        <pre></pre>
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'))