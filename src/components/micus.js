import React, { Component } from 'react';
import '../ui/css/footer.css';

class MicusList extends Component {

  constructor(props){
    super(props)
  }

  /*
    组件被创造
  */

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    console.log("我发生了变化")
    let box = document.getElementsByClassName("micus_box_div")[0];
    if(this.props.states == "false"){
      box.style.cssText = "height:500px;transition:2s;"
    }else{
      box.style.cssText = "height:500px;transition:2s;"
      // this.props.clickFooter
    }
  }

  render(){
    return(
      <div className="micus_box_div">
        <ul className="micus_list_item">
          <li>假装</li>
          <li>九万字</li>
          <li>起风了</li>
          <li>浪子回头</li>
          <li>出山</li>
          <li>可不可以</li>
          <li>水星记</li>
        </ul>
      </div>
    )
  }
}

export default MicusList;
