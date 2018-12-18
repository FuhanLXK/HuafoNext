import React, { Component } from 'react';
import '../ui/css/oneseifIndex.css';
import Header from '../components/header'
import Body from '../indexBody/index'


class OneseifIndex extends Component {
    render() {
      return (
          <div>
            <Header />
            <Body />
            <div className="flex">
              <p className="addDading">网站开发中Dading..</p>
              <p className="addDading-app">create-react-app+Redux+react(技术栈持续更新)</p>
              <p className="addDading-app">继续探究前端之路</p>
            </div>
          </div>
      )
    }
}

export default OneseifIndex;
