import React, { Component } from 'react';
import '../ui/css/footer.css';
import MicusList from '../components/micus'

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
      stateMicus:"false",
      refMicus:null
    }
    this.audioPaly = this.audioPaly.bind(this)
    this.micusItem = this.micusItem.bind(this)
  }

  handleMicus(link){
    if(link != null){
      this.setState(() => ({ refMicus:link }))
    }
  }
  // clickFooter(event){
  //     this.setState(() => ({
  //       stateMicus:"false"
  //     }))
  // }

  //
  /*
    优化重复代码
  */

  obtai(dom,name,classa){
    if(classa == "class"){
      let name = document.getElementsByClassName(dom)[0];
    }else{
      let name = document.getElementById(dom);
    }
    return name
  }

  /*
    显示音乐收藏
  */
  micusItem(){
    if(this.state.stateMicus == "true"){
      this.setState(() => ({
        stateMicus:"false"
      }))
    }else{
      this.setState(() => ({
        stateMicus:"true"
      }))
    }
  }
  /*
    判断到0时自动播放
  */
  audioCrtime(){
    this.obtai("audio_play","Audio","id")
    console.log(Audio.currentTime)
    // Audio.currentTime == 0
  }
  /*
    控制播放
  */
  audioPaly(){
    // this.obtai("audio_play","Audio","id")
    let Audio = document.getElementById("audio_play")
    let playBox = document.getElementById("play")
    let pauseBox = document.getElementById("pause")
    if(Audio !== null){
      //audio 在播放时返回false
      if(Audio.paused){
        Audio.play()
        playBox.style.display = "none"
        pauseBox.style.display = "block"
      }else{
        Audio.pause()
        document.getElementById("pause").style.display = "none"
        playBox.style.display = "block"
        pauseBox.style.display = "none"
      }
    }
  }

  render(){
    return(
      <div>
        <footer className="footer_box_div">
        <MicusList states={this.state.stateMicus} value={this.handleMicus} handleMicus={this.handleMicus.bind(this)} />
        {/*尾部主体部分*/}
          <div>
            <div className="video">
              <img id="upplay" src={require("../ui/images/icon/up.png")} />
            </div>
            <div className="video">
              <img id="play" src={require("../ui/images/icon/play.png")} onClick={this.audioPaly} />
              <img id="pause" src={require("../ui/images/icon/playVideo.png")} onClick={this.audioPaly} />
            </div>
            <div className="video video_overflow">
              <img id="donwplay" src={require("../ui/images/icon/down.png")} />
              <div className="list_video">
                <div>
                  <img src={require("../ui/images/icon/micus.png")} />
                </div>
                <div>
                  <img src={require("../ui/images/icon/micus_list.png")} onClick={this.micusItem} />
                </div>
              </div>
            </div>
            <audio src={this.state.refMicus} controls="controls" id="audio_play"></audio>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
