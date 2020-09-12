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

const IndexPage = () => {
  return (
    <Layout>

      <div 
        className="py-20 px-8 md:px-20 md:py-40" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('+SkylinePath+')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Row gutter={48} type="flex">
          <Col lg={14} xs={24} >
            <Row 
              type="flex" 
              justify="start" 
              align="middle"
              
            >
              <div>
                <div 
                  style={{
                    marginBottom:"1rem", 
                    background: "#FFFA00", 
                    padding:"2px 5px",
                    display:"inline-block",
                    borderRadius: "4px",
                    fontWeight:"bold",
                    color: "#000000"
                  }}>
                    Beta
                </div>
                <h1 className="tracking-wider md:tracking-widest text-white leading-10 md:leading-10" >
                  Enterprise solution for real-time tracking and monitoring
                </h1>
                <p style={{fontSize:"15px", color: "#EEE", letterSpacing: "1px", marginBottom:"3rem"}}>
                  Groundline is a location-based solution for logistics operations and asset monitoring.
                </p>
                <a href='https://dashboard.groundline.io/register'>
                  <Button type="primary"  size="large" style={{borderRadius: 0}} icon="arrow-right" >Get Early Access</Button>
                </a>
              </div>
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
            

      <div className="py-10 px-8 md:px-20 md:py-16" >
        <div>
          <Row gutter={96}>
            <Col lg={8} xs={24}>
              <h3 style={{color: "#000000"}}>Integration</h3>
              <p style={{fontSize:"18px"}}>
                Add location-based features to your existing applications and platforms using our APIs and tools.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              {/*<Icon type="api"  style={{ fontSize: '38px', marginBottom: '20px', color: '#000' }} />*/}
              <h3 style={{color: "#000000"}}>Scalable</h3>
              <p style={{fontSize:"18px"}}>
                Our system was built to handle big data and information for realtime monitoring of geolocations and device status.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <h3 style={{color: "#000000"}}>Analytics</h3>
              <p style={{fontSize:"18px"}}>
                Extract actionable information. Monitor your assets in real-time using our dashboard. 
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="pb-10 px-8 md:px-20 md:pb-16" >
        <h5 style={{color: "#0c77fa", margin: '20px 0 0', fontWeight: "normal"}} align="center">
          INDUSTRIES
        </h5>

        <Row gutter={48} type="flex" justify="center" align="middle">
          <Col lg={16} xs={24} >
            <h1 style={{color: "#000", padding: '2rem 0rem', fontWeight: "bold"}} align="center">
              We help ensure proper management and control of different logistics operations.
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
                  width: "auto"
                }}
                alt="Groundline Tracking Apps" 
              />
          </Col>
          <Col lg={12} xs={24} >
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Fleet management</h3>
                <p style={{fontSize:"18px"}}>
                  Monitor your assets and workforce in real-time. Build and integrate your data into your existing applications
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Internet of Things</h3>
                <p style={{fontSize:"18px"}}>
                  Transmit and monitor data from your tracking devices and build applications to control hardwares remotely.
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Tracking applications</h3>
                <p style={{fontSize:"18px"}}>
                  Build delivery and ridesharing applications for your business. Trips and device tracking is in the core of our API.
                </p>
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
            <img src={PrismaLogo} alt="Prisma" />
          </Col>
          <Col lg={2} xs={0}>
          </Col>
        </Row>
      </div>
*/}
    <div id="docs" className="p-4"></div>
    <div className="pb-10 px-8 md:px-20 md:pb-16 bg-gray-300" >
        <Row gutter={48} type="flex" justify="center" align="middle" >
          <Col lg={18} xs={24} >
            <Row type="flex" justify="center" align="middle">
              <h1 style={{color: "#000", marginTop:"2rem", fontWeight:"bold"}}>
                Learn More
              </h1>
            </Row>
            <Row type="flex" justify="center" align="middle">
              <p style={{color: "#666", fontSize:"18px", textAlign:"center"}}>
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
          <Col lg={18} xs={24} >
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
          <Col lg={6} xs={24}>
            <Row type="flex" justify="space-around" align="middle">
              
            <a href='https://dashboard.groundline.io/register'>
                <Button type="outline" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" ghost>Signup for Beta Access</Button>
              </a>
            </Row>
          </Col>
        </Row>
      </div>

      <div id="docs" className="pb-10 px-8 md:px-20 md:pb-10">
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={24} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h1 style={{color: "#000", marginTop:"2rem", fontWeight:"bold"}}>
                We are hiring!
              </h1>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#666", fontSize:"18px"}}>
                Our <b>Development</b> and <b>Sales</b> Teams are actively looking for amazing talents. If you are interested in tech industry and believe you have something to share in what we are building - why not join our team.
                To know more about the jobs and other stuff, please email us your CV at <b>hello@groundline.ph</b>.
              </p>
          </Row>
          </Col>
        </Row>
      </div>

    <div className="py-10 px-8 md:px-20 md:py-16 text-white bg-gray-900">
        <Row gutter={16} justify="space-between">
            <Col lg={16} sm={24} className="text-center md:text-left">
                <h5 >
                  <Link
                    to="/"
                    style={{
                      color: '#FFF',
                      textDecoration: 'none',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    <img src={LogoPath} alt="groundline.io" className="h-8 inline" style={{ margin: 0 }} /> 
                    &nbsp; Groundline Software Solutions
                  </Link>
                </h5>
                <br />
              
              
            </Col>
            <Col lg={8} sm={24} className="text-center md:text-right">
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