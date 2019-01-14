import React, { Component } from 'react';
import '../ui/css/oneseifIndex.css';
import axios from 'axios';
// import {Link} from "react-router-dom";

class OneseifIndex extends Component {

    constructor(props){
        super(props)
        this.state = {
           indexData : ""
        }
    }

    componentWillMount(){
        axios.get('http://localhost:3030/data',{

        })
        .then((res) => {
            this.setState(()=>({indexData:res.data}))
        })
    }

    render() {
      var Item = []
      for(var i=0;i<this.state.indexData.length;i++){
          Item.push(
              <li key={i}>
                <div>
                  <img src={this.state.indexData[i].url} alt="userImg" />
                </div>
                <p className="user_name_box">{this.state.indexData[i].username}</p>
                <p className="user_content_font">{this.state.indexData[i].content}</p>
              </li>
           )
      }

      return (
          <div>
            <div className="index_box_div">
              <ul className="ul_box_list">
                <li>留言板</li>
                <li>悻悻之光</li>
                <li>长夜漫漫</li>
                <li>论坛</li>
                <li>关于此站</li>
              </ul>
              <div className="body_box_div">
                <p>欢迎来到微言板</p>
                <p>述说你的故事，我在这细细聆听</p>
                <p>没关系，长夜漫漫总会天亮的</p>
                <div>
                    <input placeholder="#微光#" /><button>搜索</button>
                </div>
                <p className="font_box">欢迎你</p>
              </div>
              <div className="user_content_box">
                <ul>
                  {Item}
                </ul>
              </div>
            </div>

          </div>
      )
    }
}

export default OneseifIndex;
