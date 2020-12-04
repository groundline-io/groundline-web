import React, { Component } from 'react'
import { Link } from 'gatsby';
import sizeMe  from 'react-sizeme';
import { connect } from "react-redux";
import {
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined
} from '@ant-design/icons';
import LogoPath from '../../images/logo-white.png';
import {  Layout, Row, Col } from 'antd';
const { Footer } = Layout;

class FooterWrapper extends Component {
  render() {
    return(
      <Footer className="p-0">
        <div className="py-10 px-8 md:px-20 md:py-12 text-white bg-gray-900">
        <Row gutter={48} type="flex" justify="space-around" align="top" >
            <Col lg={3} sm={24} offset={2}>
              <h4 className="text-white font-bold mb-2">Solutions</h4>
              <div className="mb-2"><Link to="/platform" className="text-gray-400">Platform</Link></div>
              <div className="mb-2"><Link to="/industries" className="text-gray-400">Industries</Link></div>
              <div className="mb-2"><Link to="/contact-us" className="text-gray-400">Contact Us</Link></div>
              <div className="mb-2"><Link to="/dashboard" className="text-gray-400">Dashboard</Link></div>
            </Col>
            <Col lg={3} sm={24}>
              <h4 className="text-white font-bold mb-2">Developers</h4>
              <div className="mb-2"><Link to="#" className="text-gray-400">Documentation</Link></div>
              <div className="mb-2"><Link to="#" className="text-gray-400">API</Link></div>
              <div className="mb-2"><Link to="#" className="text-gray-400">User Guide</Link></div>
            </Col>
            <Col lg={4} sm={24} >
              <h4 className="text-white font-bold mb-2">Company</h4>
              <div className="mb-2"><Link to="#" className="text-gray-400">About Us</Link></div>
              <div className="mb-2"><Link to="#" className="text-gray-400">Terms & Conditions</Link></div>
              <div className="mb-2"><Link to="#" className="text-gray-400">Privacy Policy</Link></div>
            </Col>
            <Col lg={6} sm={24} className="text-center lg:text-left">     
              <Row type="flex" justify="start" align="middle">
                <h3 className="block">
                  <Link
                    to="/"
                    style={{
                      color: '#CCC',
                      textDecoration: 'none',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    <img src={LogoPath} alt="groundline.io" className="h-5 md:h-5 inline" style={{ margin: 0 }} /> 
                    &nbsp; groundline
                  </Link>
                </h3> 
              </Row> 
              <Row>
                <p className="text-gray-400 block" >
                  © 2020. All Rights Reserved
                </p>
              </Row>  
              <Row justify="space-between" className="mb-4">
                <LinkedinOutlined className="text-3xl text-gray-400 mr-4" />
                <TwitterOutlined  className="text-3xl text-gray-400 mr-4" />
                <InstagramOutlined className="text-3xl text-gray-400 mr-4" />
              </Row>   
            </Col>
          </Row>
      </div>
    </Footer>
    )
  }
}
const mapDispatchToProps = {
}
export default connect(()=>({}), mapDispatchToProps) (sizeMe({monitorHeight: true})(FooterWrapper))
