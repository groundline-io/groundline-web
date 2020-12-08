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
            <Col sm={1} xs={24} >
             
            </Col>
            <Col sm={3} xs={24}  className="mb-4">
              <h4 className="text-white font-bold mb-2">Solutions</h4>
              <div className="mb-2"><Link to="/platform" className="text-gray-400">Platform</Link></div>
              <div className="mb-2"><Link to="/industries" className="text-gray-400">Industries</Link></div>
              <div className="mb-2"><Link to="#docs" className="text-gray-400">Contact Us</Link></div>
            </Col>
            <Col sm={3} xs={24} className="mb-4">
              <h4 className="text-white font-bold mb-2">Developers</h4>
              <div className="mb-2"><Link to="#" className="text-gray-400">Documentation</Link></div>
              <div className="mb-2"><Link to="#" className="text-gray-400">User Guide</Link></div>
              <div className="mb-2"><Link to="#" className="text-gray-400">API</Link></div>
            </Col>
            <Col sm={4} xs={24}  className="mb-4">
              <h4 className="text-white font-bold mb-2">Company</h4>
              <div className="mb-2"><Link to="#" className="text-gray-400">About Us</Link></div>
              <div className="mb-2"><Link to="#" className="text-gray-400">Terms & Conditions</Link></div>
              <div className="mb-2"><Link to="#" className="text-gray-400">Privacy Policy</Link></div>
            </Col>
            <Col sm={6} xs={24} className="text-center lg:text-left">    
              <Row type="flex" justify="start" align="middle" className="mb-4">
                <a href="https://www.linkedin.com/company/groundline-tech/" target="blank" className="text-white">
                  <LinkedinOutlined className="text-2xl lg:text-3xl text-gray-400 mr-2 lg:mr-4" />
                </a>
                <TwitterOutlined  className="text-2xl lg:text-3xl text-gray-400 mr-2 lg:mr-4" />
                <InstagramOutlined className="text-2xl lg:text-3xl text-gray-400 mr-2 lg:mr-4" />
              </Row>     
              <Row type="flex" justify="start" align="middle">
                <h3 className="block">
                  <Link
                    to="/"
                    style={{
                      color: '#CCC',
                      textDecoration: 'none',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                    className="text-sm lg:text-lg"
                  >
                    <img src={LogoPath} alt="groundline.io" className="h-5 md:h-5 inline" style={{ margin: 0 }} /> 
                    &nbsp; groundline
                  </Link>
                </h3> 
              </Row> 
              <Row type="flex" justify="start" align="middle" >
                <p className="text-gray-400 text-xs lg:text-sm" >
                  © 2020. All Rights Reserved
                </p>
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
