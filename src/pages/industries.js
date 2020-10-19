import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import 'antd/lib/badge/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
//import InfoPath from '../images/infographic-3.png'
//import FarmVectorPath from '../images/farm-vector.png'
import AppMapPath from '../images/app-map.jpg'
//import ParkingPath from '../images/parking.jpg'
import SkylinePath from '../images/night-top-view.jpg'
//import FirebaseLogo from '../images/firebase-logo-standard.png'
//import MongoDBLogo from '../images/mongodb-logo-standard.jpg'
//import PrismaLogo from '../images/prisma-logo-standard.png'
import { Link } from "gatsby"
import LogoPath from '../images/logo-white.png'
import {
  PictureOutlined,
  HomeOutlined,
  BankOutlined,
//  ClearOutlined,
//  FormatPainterOutlined,
//  ExperimentOutlined
} from '@ant-design/icons';

const IndexPage = () => {
  return (
    <Layout>

      <div 
        className="py-24 px-8 md:px-20 md:py-40" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('+SkylinePath+')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Row gutter={48} type="flex">
          <Col lg={24} xs={24} >
            <Row 
              type="flex" 
              justify="center" 
              align="middle"
              
            >
              <h1 className="tracking-wider md:tracking-widest text-center text-white leading-10 md:leading-10" >
                Industries
              </h1>
            </Row>
          </Col>
          {/*
          <Col lg={13} xs={24}>
            <Row type="flex" justify="space-around" align="middle">
              <img src={InfoPath} alt="Groundline.io how it works?" style={{
                position: 'relative',
                top:'100px'
              }} />
            </Row>
          </Col>
            */}
        </Row>
      </div>
            

      <div className="relative md:-mt-32 md:px-20 md:pt-16 " >
        <div className="pt-10 px-16 bg-white">
          <Row gutter={96}>
            <Col lg={8} xs={24} className="mb-8">
              <PictureOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Agriculture</h3>
              <p style={{fontSize:"18px"}}>
                Monitor fields to increase crop yields and identify changes in your area.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8 md:border-r-2 md:border-l-2 border-gray-300">
              <HomeOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Real Estate</h3>
              <p style={{fontSize:"18px"}}>
                View properties differently to improve maintenance and develoment. 
              </p>
            </Col>
            <Col lg={8} xs={24}  className="mb-8">
              <BankOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Government</h3>
              <p style={{fontSize:"18px"}}>
                Improve security and maintenance of local government operations. 
              </p>
            </Col>
            {/*}
            <Col lg={8} xs={24} className="mb-8">
              <DollarOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Smart City</h3>
              <p style={{fontSize:"18px"}}>
                Monitor and analyze remotely controlled devices for your home or business.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8 md:border-r-2 md:border-l-2 border-gray-300">
              <CarOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Transportation</h3>
              <p style={{fontSize:"18px"}}>
                Improve transportation management, traffic monitoring and vehicle maintenance. 
              </p>
            </Col>
            <Col lg={8} xs={24}  className="mb-8">
              <InboxOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Logistics</h3>
              <p style={{fontSize:"18px"}}>
                Automate logistics operations through real-time tracking of shipments and delivery. 
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8">
              <ClearOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Service Provider</h3>
              <p style={{fontSize:"18px"}}>
                Monitor on-duty workers and vehicles to improve business workflow and customer service.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8 md:border-r-2 md:border-l-2 border-gray-300">
              <FormatPainterOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Field projects</h3>
              <p style={{fontSize:"18px"}}>
                Increase workforce productivity for better project management through real-time updates.
              </p>
            </Col>
            <Col lg={8} xs={24}  className="mb-8">
              <ExperimentOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Analytics</h3>
              <p style={{fontSize:"18px"}}>
                Perform traffic analysis and monitor driving behaviors using our API and devices. 
              </p>
            </Col>
          */}
          </Row>
        </div>
      </div>

      <div className="py-10 px-8 md:px-20 md:py-16 bg-white" >
        <h4 style={{color: "#0c77fa", margin: '20px 0 0', fontWeight: "normal"}} align="center">
          SOLUTIONS
        </h4>

        <Row gutter={48} type="flex" justify="center" align="middle">
          <Col lg={16} xs={24} >
            <h1 className="text-balck font-bold" style={{padding: '2rem 0rem'}} align="center">
              We help ensure proper management and monitoring of different logistics operations.
            </h1>
          </Col>
        </Row>

        <Row type="flex" >
          <Col 
            lg={12} xs={24}
            justify="center" 
            align="middle"
          >
              <img 
                src={AppMapPath} 
                style={{
                  height:"20rem",
                  width: "auto",
                }}
                alt="Groundline Tracking Apps" 
              />
          </Col>
          <Col lg={12} xs={24} >
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Data Collection and Telemetry</h3>
                <p style={{fontSize:"18px"}}>
                  Retrieve data from field workers, remote devices and aerial imagery. Our platform can help you manage your data for processing and visualization.
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Object Detection</h3>
                <p style={{fontSize:"18px"}}>
                  Create and train models to help you identify objects in your image. Automatically identify changes in your location through machine learning.
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Data Visualization</h3>
                <p style={{fontSize:"18px"}}>
                  Process your data and images for proper visualization. Monitor your data in real-time and integrate photogrammetry for better understanding.
                </p>
              </Row>
          </Col>
        </Row>
      </div>

    <div id="docs" className="p-4 bg-white"></div>
    <div className="pb-10 px-8 md:px-20 md:pb-16 bg-gray-300" >
        <Row gutter={48} type="flex" justify="start" align="middle" >
          <Col lg={20} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h1 style={{color: "#000", marginTop:"2rem", fontWeight:"bold"}}>
                Ready to get started?
              </h1>
            </Row>
            <Row type="flex" justify="start" align="middle">
            <p style={{color: "#666", fontSize:"18px", textAlign:"left"}}>
                To know more about our products and how we can help improve your workflow and business, please click the link below to sign up and we will get in touch with you as soon as possible.
              </p>
              <a href='https://dashboard.groundline.io/register'>
                <Button type="primary" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" ghost>Get Early Access</Button>
              </a>
          </Row>
          </Col>
        </Row>
      </div>

    <div className="py-10 px-8 md:px-20 md:py-16 text-white bg-gray-900">
        <Row gutter={16} justify="space-between">
            <Col lg={16} sm={24} className="text-center lg:text-left">
                <h5 >
                  <Link
                    to="/"
                    style={{
                      color: '#FFF',
                      textDecoration: 'none',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    <img src={LogoPath} alt="groundline.io" className="h-5 md:h-8 inline" style={{ margin: 0 }} /> 
                    &nbsp; Groundline Software Solutions
                  </Link>
                </h5>            
            </Col>
            <Col lg={8} sm={24} className="text-center lg:text-right">
              <p className="text-white" >
                  © 2020. All Rights Reserved
                </p>
            </Col>
          {/*
            <Col span={4}>
              <h6>Developers</h6>
              <div><Link to="#">Link 1</Link></div>
              <div><Link to="#">Link 2</Link></div>
              <div><Link to="#">Link 3</Link></div>
              <div><Link to="#">Link 4</Link></div>
            </Col>
            <Col span={4}>
              <h6>Developers</h6>
              <div><Link to="#">Link 1</Link></div>
              <div><Link to="#">Link 2</Link></div>
              <div><Link to="#">Link 3</Link></div>
              <div><Link to="#">Link 4</Link></div>
            </Col>
            <Col span={4}>
              <h6>Follow Us</h6>
              <div><Link to="#">Link 1</Link></div>
              <div><Link to="#">Link 2</Link></div>
              <div><Link to="#">Link 3</Link></div>
              <div><Link to="#">Link 4</Link></div>
            </Col>
          */}
          </Row>
      </div>
{/*
      <div style={{marginTop: "7.1875rem", padding: "3rem 0"}}>
        <div>
           <div align="center">
              <h4>Groundline</h4>
              <p>
                Open source framework for visualizing data by connecting your back-end platform and charting libraries.
              </p>
            </div>
        
          <Row gutter={16}>
            <Col span={10}>
              <h6>groundline.io</h6>
              <p>
                Customizable declarative API for back-end connection
              </p>
            </Col>
          
            <Col span={4}>
              <h6>Developers</h6>
              <div><Link to="#">Link 1</Link></div>
              <div><Link to="#">Link 2</Link></div>
              <div><Link to="#">Link 3</Link></div>
              <div><Link to="#">Link 4</Link></div>
            </Col>
            <Col span={4}>
              <h6>Developers</h6>
              <div><Link to="#">Link 1</Link></div>
              <div><Link to="#">Link 2</Link></div>
              <div><Link to="#">Link 3</Link></div>
              <div><Link to="#">Link 4</Link></div>
            </Col>
            <Col span={4}>
              <h6>Follow Us</h6>
              <div><Link to="#">Link 1</Link></div>
              <div><Link to="#">Link 2</Link></div>
              <div><Link to="#">Link 3</Link></div>
              <div><Link to="#">Link 4</Link></div>
            </Col>
          </Row>
         
        </div>
      </div>
*/}
    </Layout>
  )
}

export default IndexPage