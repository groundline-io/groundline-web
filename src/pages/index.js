import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Icon from 'antd/lib/icon'
import Badge from 'antd/lib/badge'
import 'antd/lib/badge/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import InfoPath from '../images/infographic-2.png'
import FarmVectorPath from '../images/farm-vector.png'
import EnvVectorPath from '../images/environment-vector.png'
//import FirebaseLogo from '../images/firebase-logo-standard.png'
//import MongoDBLogo from '../images/mongodb-logo-standard.jpg'
//import PrismaLogo from '../images/prisma-logo-standard.png'
import { Link } from "gatsby"
import LogoPath from '../images/logo-white.png'

const IndexPage = () => {
  return (
    <Layout>

      <div style={{
        background: "#0c77fa",
        margin: '0 auto',
        padding: '3rem 5.2rem',
      }}>
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={11} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <Badge count={'Beta'} style={{marginBottom:"1rem" }} />
              <h2 style={{color: "#FFF"}}>
                Turn satellite and aerial imagery into actionable data
              </h2>
              <p style={{color: "#FFF", marginBottom:"3rem"}}>
                Create and train models using your own images. Want to know more? Request for an early access.
              </p>
              <a href='https://app.groundline.io'>
                <Button type="outline" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" ghost>Sign Up for Beta Access</Button>
              </a>
          </Row>
          </Col>
          <Col lg={13} xs={24}>
            <Row type="flex" justify="space-around" align="middle">
              <img src={InfoPath} alt="Groundline.io how it works?" />
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
              <h4>API-first approach</h4>
              <p>
                Create your own application on top of our API or connect existing infrastructure to improve business workflow.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <Icon type="build" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>Generate training data</h4>
              <p>
                Create and train models using your own data. Simply upload images and annotate relevant objects. Analyze your data using your trained models.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <Icon type="pie-chart" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>Reports and analytics</h4>
              <p>
                Extract actionable information. From object detection to data prediction, we can help you make right decision through machine learning.
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

        <h2 style={{color: "#666", margin: '20px 0', padding:"0 7rem", fontWeight: "normal"}} align="center">
         We provide machine-learning tools to extract actionable data and insights from raw images used in different industries. 
        </h2>

        <Row type="flex" justify="space-around" align="middle">
          <Col lg={12} xs={24}>
            <Row type="flex" justify="space-around" align="middle">
              <img src={EnvVectorPath} height="300" alt="Groundline Agriculture Industry" />
            </Row>
          </Col>
          <Col lg={12} xs={24}>
            <Row >
              <h3 style={{color: "#0c77fa", fontWeight: "bold"}}>Humanitarian Efforts</h3>
                <p>
                  In the midst of crisis, it is important to make accurate assessment of the area before taking actions.
                </p>
                <p>
                  Groundline helps organizations collect and analyze geospatial data through satellite and aerial images to improve decision making. 
                  Through aerial imagery and machine learning, we can help in aid distribution, site monitoring and emergency response. 
                </p>
            </Row>
          </Col>
        </Row>

        <Row type="flex" justify="space-around" align="middle">
          <Col lg={12} xs={24}>
            <Row type="flex" justify="space-around" align="middle">
              <img src={FarmVectorPath} height="300" alt="Groundline Agriculture Industry" />
            </Row>
          </Col>
          <Col lg={12} xs={24}>
            <Row >
              <h3 style={{color: "#0c77fa", fontWeight: "bold"}}>Precision Agriculture</h3>
                <p>
                Improve farm management through image monitoring and analysis.
                </p>
                <p>
                Farm health assessment can help improve yield and detect early signs of diseases. 
                Groundline can help identify crucial changes in your area so you can make necessary adjustments. 
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

    <div style={{
        background: "#0c77fa",
        margin: '0 auto',
        padding: '2rem 5.2rem',
      }}>
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={18} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h2 style={{color: "#FFF"}}>
                Sign up to get early access
              </h2>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#FFF"}}>
                Or email us to let us know how we can help you
              </p>
          </Row>
          </Col>
          <Col lg={6} xs={24}>
            <Row type="flex" justify="space-around" align="middle">
              
            <a href='https://app.groundline.io'>
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
              <Link
                to="/"
                style={{
                  color: '#FFF',
                  textDecoration: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                <img src={LogoPath} alt="groundline.io" height="30" style={{ margin: 0 }} /> 
                &nbsp; Groundline
              </Link>
              <h6>Groundline</h6>
              
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