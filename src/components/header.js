import React, { Component } from 'react';
import '../ui/css/headerCss.css'
import axios from 'axios';
import {Link} from "react-router-dom";
import Login from '../login/login'

class Header extends Component {

  componentWillMount(){
    axios.get('http://localhost:3030/headerIndex',{

    })
    .then((res) => {

      this.setState(()=>({ headerBanner : res.data }))
      console.log(this.state.headerBanner)
    })
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
      headerBanner:null
    }
  }

  render(){
    var relist = []
    if(this.state.headerBanner != null){
      for(var i=0;i<this.state.headerBanner.length;i++){
        relist.push(<li key={i}><Link to={this.state.headerBanner[i].link}>{this.state.headerBanner[i].name}</Link></li>)
      }
    }
    // console.log(relist)
    return(
        <header className="Header_Box">
          <div className="header_odiv_box">
            <div className="HeaderLeft_box">
              <ul>
                {relist}
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
