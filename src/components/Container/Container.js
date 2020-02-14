import React, { Component } from 'react';
import { connect } from "react-redux";
import { getHeaderHeightState } from '../../store/selectors';

class Container extends Component {
  render() {
    const {
      sidebarDocked, 
      headerHeight, 
      onPostPage, 
    } = this.props;

    return (
      <div
        style={{
          //position: "absolute",
          top: (!sidebarDocked && onPostPage) ? headerHeight + 70: headerHeight + 0,
          //left: ((!sidebarDocked && onPostPage) || !onPostPage) ? 0 : "20%",
          //right: ((!sidebarDocked && onPostPage) || !onPostPage) ? 0 : "15%",
        //  bottom: "175px",
          //overflow: !sidebarDocked ? "auto" : "visible",
        //  background: "#0c77fa"
        }}
      >
        <div
          style={{
            //  maxWidth: '68.75rem',
            //  width: '90%',
            //  marginLeft: 'auto',
            //  marginRight: 'auto'
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    headerHeight: getHeaderHeightState(state),
  }
}

export default connect(mapStateToProps) (Container);