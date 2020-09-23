import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import 'antd/lib/badge/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import InfoPath from '../images/infographic-4.png'
import FarmVectorPath from '../images/farm-vector.png'
import AppMapPath from '../images/app-map.jpg'
import ParkingPath from '../images/parking.jpg'
//import SkylinePath from '../images/night-top-view.jpg'
import { Link } from "gatsby"
import LogoPath from '../images/logo-white.png'

const IndexPage = () => {
  return (
    <Layout>

      <div 
        className="py-24 px-8 md:px-20 md:py-20 bg-white" 
        style={{

         // backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('+InfoPath+')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Row gutter={48} type="flex"   align="middle">
          <Col lg={11} xs={24} >
              <div className="text-left">
                <h1 className="tracking-wider md:tracking-wide text-black leading-10 md:leading-10" >
                  Track your assets with one simplified solution
                </h1>
                <p style={{fontSize:"15px", color: "#000", letterSpacing: "1px", marginBottom:"3rem"}}>
                  We make sure you are not constrained to existing solutions and give you the freedom to build on top of our system
                </p>
                <a href='#solutions-learn-more' className="inline m-2">
                  <Button type="primary"  size="medium" style={{borderRadius: 0}} icon="arrow-right" >Learn More</Button>
                </a>
                <a href='https://dashboard.groundline.io/register' className="inline m-2">
                  <Button type="default"  size="medium" style={{borderRadius: 0}} icon="arrow-right" >Get Started</Button>
                </a>
              </div>
              <div style={{margin:"2rem 0"}} />
          </Col>
          <Col lg={13} xs={24}>
              <img src={InfoPath} alt="Groundline.io how it works?" />
          </Col>
        </Row>
      </div>
            

      <div id="solutions-learn-more" className="relative -mt-24 md:px-20 md:pt-16 " >
        <div className="pt-10 px-16 bg-white">
          <Row gutter={96}>
            <Col lg={8} xs={24}>
              <h3 className="text-black">Fleet Management System</h3>
              <p style={{fontSize:"18px"}}>
                Monitor your assets and workforce in real-time. Build and integrate your data into your existing applications.
              </p>
            </Col>
            <Col lg={8} xs={24} >
              <h3 className="text-black">Last Mile Automation</h3>
              <p style={{fontSize:"18px"}}>
              Build delivery and tracking applications for your business. Trips and device tracking is in the core of our API.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <h3 className="text-black">Internet of Things</h3>
              <p style={{fontSize:"18px"}}>
              Transmit and monitor data from your tracking devices and build applications to control hardwares remotely. 
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="py-4 px-8 md:px-20 md:py-4 bg-white" >
        <Row gutter={48} type="flex" justify="center" align="middle">
          <Col lg={16} xs={24} >
            <h1 className="text-balck font-bold" style={{padding: '2rem 0rem'}} align="center">
              Built for integration and faster development
            </h1>
          </Col>
        </Row>

        <Row type="flex" align="middle" justify="center">
          <Col lg={16} xs={24} >
              <Row type="flex" align="middle" justify="space-around">
                <Col lg={12} xs={24}>
                  <img 
                    src={AppMapPath} 
                    style={{
                      height:"20rem",
                      width: "auto",
                      marginBottom: "12px"
                    }}
                    alt="Groundline Tracking Apps" 
                  />
                </Col>
                <Col lg={12} xs={24} >
                  <h3 style={{color: "#333", fontWeight: "bold"}}>API Ready</h3>
                  <p style={{fontSize:"18px"}}>
                    Build your own tracking apps or connect to existing softwares to scale up your application. You can integrate third-party softwares for better business workflow. 
                  </p>
                </Col>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row type="flex" align="middle" justify="space-around">
                <Col lg={12} xs={24}>
                  <img 
                    src={ParkingPath} 
                    style={{
                      height:"20rem",
                      width: "auto",
                      marginBottom: "12px"
                    }}
                    alt="Groundline Tracking Apps" 
                  />
                </Col>
                <Col lg={12} xs={24} >
                  <h3 style={{color: "#333", fontWeight: "bold"}}>Real-time</h3>
                  <p style={{fontSize:"18px"}}>
                    Our system uses latest technology to monitor devices in real-time. Transmit geolocations and message alerts and we will handle everything in the background. 
                  </p>
                </Col>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row type="flex" align="middle" justify="space-around">
                <Col lg={10} xs={24}>
                  <img 
                    src={FarmVectorPath} 
                    style={{
                      height:"20rem",
                      width: "auto",
                      marginBottom: "12px"
                    }}
                    alt="Groundline Tracking Apps" 
                  />
                </Col>
                <Col lg={12} xs={24} >
                  <h3 style={{color: "#333", fontWeight: "bold"}}>Device compatibility</h3>
                  <p style={{fontSize:"18px"}}>
                    Connect compatible devices to retrieve more information such as location, temperature and fuel to gain more insight and better decsion making.
                  </p>
                </Col>
              </Row>
          </Col>
        </Row>
      </div>

{/*
      <div>
        <h4 style={{color: "#666", margin: '20px 0', fontWeight: "normal"}} align="center">
          Supported database and platform
        </h4>

        <Row gutter={200} justify="space-around" align="center">
          <Col lg={2} xs={0}>
          </Col>
          <Col lg={6} xs={18}>
            <img src={FirebaseLogo} alt="Firebase" />
          </Col>
          <Col lg={6} xs={18}>
            <img src={MongoDBLogo} alt="MongoDB" />
          </Col>
          <Col lg={6} xs={18}>
            <img src={PrismaLogo} alt="Prisma" />d8d8          </Col>
          <Col lg={2} xs={0}>
          </Col>
        </Row>
      </div>
*/}
    <div id="docs" className="p-4 bg-white"></div>
    <div className="pb-10 px-8 md:px-20 md:pb-16 bg-gray-300" >
        <Row gutter={48} type="flex" justify="center" align="middle" >
          <Col lg={20} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h1 style={{color: "#000", marginTop:"2rem", fontWeight:"bold"}}>
                Learn More
              </h1>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#666", fontSize:"18px", textAlign:"left"}}>
                To know more about our products and how location tracking system can help improve your workflow and business, please email us at <b>hello@groundline.ph</b>. 
                We are currently working on our documentation and other pages of the site. You can email us or sign up now so we can inform you as we make progress.
              </p>
              <a href='https://dashboard.groundline.io/register'>
                <Button type="primary" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" ghost>Get Early Access</Button>
              </a>
          </Row>
          </Col>
        </Row>
      </div>

    <div id="pricing" className="py-8 px-8 md:px-20 md:py-10" style={{background: "#0c77fa"}}>
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={12} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h2 style={{color: "#FFF"}}>
                Pricing? Get started for free!
              </h2>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#FFF"}}>
                Our platform is free while we are still in Beta stage. Sign up now to get lifetime freebies.
              </p>
          </Row>
          </Col>
          <Col lg={4} xs={24}>
            <Row type="flex" justify="end" align="middle"  className="text-left lg:text-right">
              <a href='https://dashboard.groundline.io/register'  className="block w-full text-left lg:text-right">
                <Button type="outline" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" ghost>Signup for Beta Access</Button>
              </a>
            </Row>
          </Col>
        </Row>
      </div>
      

    <div className="py-10 px-8 md:px-20 md:py-16 text-white bg-gray-900">
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
            <Col lg={12} sm={24} className="text-center lg:text-left">
              <Row type="flex" justify="start" align="middle">
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
              </Row>           
            </Col>
            <Col lg={5} sm={24} className="text-center lg:text-right">
              <Row type="flex" justify="end" align="middle">
                <p className="text-white" >
                  © 2020. All Rights Reserved
                </p>
              </Row>
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