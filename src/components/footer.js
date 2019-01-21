import React, { Component } from 'react';
import '../ui/css/footer.css';

class Footer extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <footer className="footer_box_div">
          <div>
            <div className="video">
              <img src={require("../ui/images/icon/play.png")} />
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
