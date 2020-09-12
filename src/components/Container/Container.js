import React, { Component } from 'react';
import { connect } from "react-redux";
import { getHeaderHeightState } from '../../store/selectors';
import { Layout } from 'antd';
const { Content } = Layout;

class Container extends Component {
  render() {
    /*
    const {
      sidebarDocked, 
      headerHeight, 
      onPostPage, 
    } = this.props;
    */

    return (
      <Content >
          {this.props.children}
      </Content>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    headerHeight: getHeaderHeightState(state),
  }
}

export default connect(mapStateToProps) (Container);