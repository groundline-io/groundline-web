import React, { Component } from 'react'
import { Link } from 'gatsby';
import sizeMe  from 'react-sizeme';
import { connect } from "react-redux";
import { updateHeaderHeight } from '../../actions/layout';
import Menu from '../Menu';
import LogoPath from '../../images/logo-white.png';
import {  Layout, Row, Col } from 'antd';
const { Header } = Layout;

class HeaderWrapper extends Component {
  componentDidUpdate = () => {
    this.props.updateHeaderHeight(this.props.size.height)
  }

  render() {
    return(
      <Header className="px-0 md:px-20 fixed top-0 w-full z-50 text-white bg-black " >
        <Row justify="space-between" align="middle">
          <Col span={8} >
            <Link to="/" >
              <h4 className="text-white tracking-wider pt-3 pl-2">
                <img src={LogoPath} alt="groundline.io" className="h-5 md:h-6 inline" /> 
                &nbsp; <span className="hidden md:inline">groundline</span>
              </h4>
              </Link>
          </Col>
          <Col span={16}>
            <Menu />
          </Col>
        </Row>
    </Header>
    )
  }
}
const mapDispatchToProps = {
  updateHeaderHeight
}

export default connect(()=>({}), mapDispatchToProps) (sizeMe({monitorHeight: true})(HeaderWrapper))
