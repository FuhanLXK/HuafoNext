import React, { Component } from 'react';
// import axios from 'axios';
// import {Link} from "react-router-dom";
import '../ui/css/login.css'

class Login extends Component {

  render(){
    return(
      <div className="login_backgrund_box">
        <div className="login_left_box">
          <p className="left_box_font">Hi! Stranger </p>
          <p className="bottom_box_font">
              @2018-2019 华府科技有限公司
          </p>
        </div>
        <div className="login_right_box">
          <div className="margin_center_box">
            <span className="font_box">Tell &nbsp;<span>Your</span>&nbsp; Story</span>
            <div className="body_header_box">
              <p className="title_box">说出你的故事 </p>
              <p className="china_font"> 聆听你的过往</p>
            </div>


            <div className="input_Div">
              <div className="Input_box_cont">
                <input placeholder="you name" />
              </div>
            </div>


            <div className="input_Div">
              <div className="Input_box_cont">
                <input placeholder="you Email" />
              </div>
            </div>


            <div className="input_Div">
              <div className="Input_box_cont">
                <input placeholder="you Password" type="password" />
              </div>
            </div>

            <div className="login_btn">Login</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
