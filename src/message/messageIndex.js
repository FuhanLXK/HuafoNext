import React, { Component } from 'react';
import '../ui/css/messageindex.css'
import axios from 'axios';
import Header from '../components/header.js'
import Footer from "../components/footer"

class MessageIndex extends Component {

  constructor(props){
    super(props)
    this.state = {
      dataMessage:null,
      texterInput:null
    }
  }

  componentWillMount(){
    axios.post('http://localhost:3030/messagesList',{

    })
    .then((res) => {
      this.setState(() => ({ dataMessage : res.data}))
      // console.log(this.state.dataMessage)
    })
  }

  /* 点击发送 */
  clickButtonAxios(){
    axios.get("http://localhost:3030/getDataMessage",{
      params:{
        message:this.state.texterInput,
        name:"陌生人",
        telplate:"iphone 5s",
        data:"2019年1月17日",
        url:"http://www.huafuo.net/HTTPIMG/user_aadmin.JPG"
      }
    })
    .then((res) => {
      console.log(res)
    })
  }

  blurTexter(ev){
    let value = ev.target.value
    this.setState(() => ({ texterInput : value}))
    console.log(this.state)
  }

  render(){
    let Item = []

    if(this.state.dataMessage != null){
      let item = this.state.dataMessage
      for(var i=0;i<this.state.dataMessage.length;i++){
        Item.push(
          <li key={i}>
            <div className="user_name">
              <div>
                <img src={item[i].url} />
              </div>
              <p>{item[i].name}</p>
            </div>
            <div className="font_user_box">
              {item[i].message}
            </div>
            <div className="icon_img">
              <ul>
                <p>来自{item[i].telplate}</p>
                <p>{item[i].data}</p>
              </ul>
            </div>
          </li>
        )
      }
    }

    return(
      <div>
      <Header />
      <div className="backgrund_box_color">
        <div className="user_box_div">
            <div className="user_box_boxdiv">
               <div>
                  <img src="http://www.huafuo.net/HTTPIMG/user_aadmin.JPG" />
               </div>
               <p>陌生人</p>
            </div>
            <div>
               <textarea onChange={this.blurTexter.bind(this)} className="input_class_style"></textarea>
            </div>
            <button onClick={this.clickButtonAxios.bind(this)}>发送</button>
        </div>
        <div className="message_box_div">
            <ul>
              {Item}
            </ul>
        </div>
      </div>
    <Footer />
    </div>
    )
  }
}

export default MessageIndex
