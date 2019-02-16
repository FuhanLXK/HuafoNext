import React, { Component } from 'react';
import '../ui/css/footer.css';
import axios from 'axios'

class MicusList extends Component {

  constructor(props){
    super(props)
    this.state = {
      micusItem:null
    }
  }

  /*
    传入音频
  */
  propsMicusFrequency(i){
    let valueMsg = this.state.micusItem[i].link
    this.props.handleMicus(valueMsg)
    // console.log(valueMsg)
    // this.props.handleMicus(this.state.micusItem[i]
  }

  /*
    请求音乐
  */
  componentWillMount(){
    axios.get('http://localhost:3030/micusItem',{})
    .then((res)=> {
      this.setState(()=>({
        micusItem: res.data
      }))
      console.log(this.state.micusItem)
    })
  }
  /*
    组件被创造
  */

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    console.log("我发生了变化")
    let box = document.getElementsByClassName("micus_box_div")[0];


    if(this.props.states == "false"){
      box.style.cssText = "width:0;transition:2s;"
    }else{
      box.style.cssText = "width:400px;transition:2s;"

      // this.props.clickFooter
    }
  }

  render(){

    let item = [];
    /*
      防止JS 异步执行
    */
    if(this.state.micusItem != null){
      for(var i=0;i<this.state.micusItem.length;i++){
        item.push(
          <li key={i}
            onClick={this.propsMicusFrequency.bind(this,i)}>
            {this.state.micusItem[i].micusName}
          </li>
        )
      }
    }

    return(
      <div className="micus_box_div">
        <ul className="micus_list_item">
          {item}
        </ul>
      </div>
    )
  }
}

export default MicusList;
