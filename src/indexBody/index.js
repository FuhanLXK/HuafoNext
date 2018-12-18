import React, { Component } from 'react';
import '../ui/css/indexBody.css';

class indexBody extends Component {

  render(){
    return(
      <section className="section_Index_Box">
        <div className="info_box">
          <div>
            <img className="info_box_img" src={require('../ui/images/banner.jpg')} alt="ss" />
          </div>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default indexBody
