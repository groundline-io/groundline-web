import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Icon from 'antd/lib/icon'
import 'antd/lib/badge/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import InfoPath from '../images/infographic-3.png'
import FarmVectorPath from '../images/farm-vector.png'
import AppMapPath from '../images/app-map.jpg'
import ParkingPath from '../images/parking.jpg'
import SkylinePath from '../images/skyline.jpg'
//import FirebaseLogo from '../images/firebase-logo-standard.png'
//import MongoDBLogo from '../images/mongodb-logo-standard.jpg'
//import PrismaLogo from '../images/prisma-logo-standard.png'
import { Link } from "gatsby"
import LogoPath from '../images/logo-white.png'

const IndexPage = () => {
  return (
    <Layout>

<img src={SkylinePath} style={{
       position: 'absolute',
       top: '80px',
      }} />
      <div style={{
        margin: '0 auto',
        padding: '3rem 5.2rem'
      }}>
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={11} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h1 style={{color: "#2c5b86", fontWeight: "700"}}>
                Scalable real-time tracking and monitoring
              </h1>
              <h4 style={{color: "#666", marginBottom:"1rem"}}>
                Build your own device tracking apps by taking advantage of our tools and APIs.
              </h4>
              <a href='https://dashboard.groundline.io/register'>
                <Button type="danger" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" >Get started</Button>
              </a>
          </Row>
          </Col>
          <Col lg={13} xs={24}>
            <Row type="flex" justify="space-around" align="middle">
              <img src={InfoPath} alt="Groundline.io how it works?" style={{
        position: 'relative',
        top:'100px'
      }} />
            </Row>
          </Col>
        </Row>
      </div>
            

      <div style={{
        margin: '0 auto',
        padding: '4rem 5.2rem',
      }}>
        <div>
          <Row gutter={96}>
            <Col lg={8} xs={24}>
              <Icon type="api" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>Deploy faster</h4>
              <p>
                Build and deploy fleet managemet systems using our APIs and tools. Focus on your user interface and we will handle your data tracking.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <Icon type="pie-chart" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>Real-time tracking</h4>
              <p>
                Extract actionable information. Monitor your assets in real-time using our dashboard and integrate your data to your existing application. 
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <Icon type="build" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>Integration</h4>
              <p>
                Add location based features into your existing apps and platforms. Offer more features to your customers by doing less.
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div style={{
        margin: '0 auto',
        padding: '4rem 5.2rem',
      }}>
        <h5 style={{color: "#0c77fa", margin: '20px 0', fontWeight: "normal"}} align="center">
          INDUSTRIES
        </h5>

        <h3 style={{color: "#666", margin: '20px 0', padding:"0 7rem", fontWeight: "normal"}} align="center">
         We help ensure the control and management of different logistics operations.
        </h3>

        <Row gutter={96}>
          <Col lg={8} xs={24}>
            <img src={AppMapPath} height="300" alt="Groundline Tracking Apps" />
            <h3 style={{color: "#0c77fa", fontWeight: "bold"}}>Tracking apps</h3>
            <p>
              Build your own delivery apps and ridesharing applications. Trips and device tracking is in the core of our API.
            </p>
          </Col>
          <Col lg={8} xs={24}>
            <img src={ParkingPath} height="300" alt="Groundline Agriculture Industry" />
            <h3 style={{color: "#0c77fa", fontWeight: "bold"}}>Fleet management</h3>
            <p>
              Monitor your assets and workforce in real-time. Build and integrate your data into your existing applications
            </p>
          </Col>
          <Col lg={8} xs={24}>
            <img src={FarmVectorPath} height="300" alt="Groundline Agriculture Industry" />
            <h3 style={{color: "#0c77fa", fontWeight: "bold"}}>Internet of Things</h3>
            <p>
              Transmit and monitor data from your tracking devices. Create applications to control hardwares remotely.
            </p>
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

    <div id="docs" style={{
        background: "#FFF",
        margin: '0 auto',
        padding: '2rem 5.2rem',
      }}>
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={18} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h2 style={{color: "#0c77fa"}}>
                Documentation?
              </h2>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#666"}}>
                We are still polishing the documentation and it will be up soon. How about signing up now and we will inform you when it is ready?
              </p>
          </Row>
          </Col>
          <Col lg={6} xs={24}>
            <Row type="flex" justify="space-around" align="middle">
              
            <a href='https://dashboard.groundline.io/register'>
                <Button type="outline" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" ghost>Signup for Beta access</Button>
              </a>
            </Row>
          </Col>
        </Row>
      </div>

    <div id="pricing" style={{
        background: "#0c77fa",
        margin: '0 auto',
        padding: '2rem 5.2rem',
      }}>
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={18} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h2 style={{color: "#FFF"}}>
                Pricing? Get started for free!
              </h2>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#FFF"}}>
                Our platform is free while we are still in Beta stage. Sign up now and let's talk on how we can help you with your use case.
              </p>
          </Row>
          </Col>
          <Col lg={6} xs={24}>
            <Row type="flex" justify="space-around" align="middle">
              
            <a href='https://dashboard.groundline.io/register'>
                <Button type="outline" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" ghost>Signup for Beta access</Button>
              </a>
            </Row>
          </Col>
        </Row>
      </div>

    <div style={{
        background: "#151515",
        margin: '0 auto',
        padding: '3rem 5.2rem',
        color: '#FFFFFF'
      }}>
        <Row gutter={16} justify="space-between">
            <Col span={20}>
                <h5>
              <Link
                to="/"
                style={{
                  color: '#FFF',
                  textDecoration: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                <img src={LogoPath} alt="groundline.io" height="30" style={{ margin: 0 }} /> 
                &nbsp; Groundline Software Solutions
              </Link>
                </h5>
                <br />
              
              
            </Col>
            <Col span={4}>
              <p style={{
                    color: '#FFF',
                    fontSize: '11px',
                    textDecoration: 'none',
                    fontFamily: 'Montserrat, sans-serif',
                  }}>
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