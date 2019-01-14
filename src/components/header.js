import React, { Component } from 'react';
import '../ui/css/headerCss.css'
import axios from 'axios';
import {Link} from "react-router-dom";
import Login from '../login/login'

class Header extends Component {

  /**
    编辑框变化
  **/
  addBabel(){
    if(this.state.display === "block"){
      this.setState(() => ({ display : "none" }))
    }else{
      this.setState(() => ({ display : "block" }))
    }
  }

  /**
    失去焦点添加选项
  **/
  BlurSub(ev){
    console.log(this.state.headerName)
    axios.get('http://localhost:3030/data',{

    })
    .then((res) => {
      console.log(res)
    })

    let titleName = this.state.headerName
    titleName.push({
      id:0,
      name:ev.target.value
    })
    this.setState({
      headerName:titleName
    })
    ev.target.value = ''
    this.setState(() => ({ display : "none" }))
  }

  constructor(props){
    super(props)

    this.state = {
      headerName : [{
        id:"0",
        name:"首页"
      },{
        id:"0",
        name:"资讯"
      },{
        id:"0",
        name:"赛事"
      }],
      display:"none",
      dataTitle:[{
          id:0,
          titleNameGame:"守望先锋"
        },{
          id:1,
          titleNameGame:"穿越火线"
      }]
    }
  }

  render(){
    var relist = []

    for(var i=0;i<this.state.headerName.length;i++){

      relist.push(<li key={i}>{this.state.headerName[i].name}</li>)
    }
    // console.log(relist)
    return(
        <header className="Header_Box">
          <div className="header_odiv_box">
            <div className="HeaderLeft_box">
              <ul>
                {relist}
                <li onClick={this.addBabel.bind(this)}>+</li>
                <li style={{display:this.state.display}}>
                  <input className="InputTop" onBlur={this.BlurSub.bind(this)} />
                </li>
              </ul>
            </div>
              <div className="felx_box">
                <ul>
                  <li>
                   <Link to="/login">登陆</Link>
                  </li>
                  <li>注册</li>
                </ul>
              </div>
          </div>
        </header>
    )
  }
}

export default Header
