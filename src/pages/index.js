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
import InfoPath from '../images/infographic.png'
import FirebaseLogo from '../images/firebase-logo-standard.png'
import MongoDBLogo from '../images/mongodb-logo-standard.jpg'
import PrismaLogo from '../images/prisma-logo-standard.png'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>

      <div style={{
        marginBottom: "7.1875rem"
      }}>
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={10} xs={24} >
            <Badge count={'Alpha 0.0.19 - Unstable'} />
            <h3 style={{color: "#364962", fontSize: 32, marginTop: '5px'}}>
              Build analytics and dashboards using declarative API
            </h3>
            <p style={{color: "#364962", fontSize: 16 }}>
              Open source framework for visualizing data by connecting your back-end platform and charting libraries.
            </p>
          <br/>
          <Link to="/docs/get-started/introduction">
            <Button type="outline" size="large" style={{marginRight: 10}} icon="folder-open">Get Started</Button>
          </Link>
          <Link to="https://github.com/groundline/groundline">
            <Button type="primary" size="large" href="#" icon="github" >Github</Button>
          </Link>
          </Col>
          <Col lg={14} xs={24}>
            <div style={{
              paddingLeft: "4rem"
            }}>
              <img src={InfoPath} alt="Groundline.io how it works?" />
            </div>
          </Col>
        </Row>
      </div>
            

      <div style={{
        marginBottom: "7.1875rem"
      }}>
        <div>
          <Row gutter={96}>
            <Col lg={8} xs={24}>
              <Icon type="code" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>Declarative API</h4>
              <p>
                Build your schema using components and it will automatically connect to your platform and display data.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <Icon type="pie-chart" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>Framework agnostic</h4>
              <p>
                Create dashboards using exisitng charting libraries. Create your custom charts or use exisitng frameworks to speed up development.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <Icon type="api" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>Built-in platform connections</h4>
              <p>
                Create one schema and connect your data to one of our available back-end connectors. You can switch to another back-end without re-writing your schema.
              </p>
            </Col>
          </Row>
        </div>
      </div>


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

      <div style={{marginTop: "7.1875rem", padding: "3rem 0"}}>
        <div>
           <div align="center">
              <h4>Groundline</h4>
              <p>
                Open source framework for visualizing data by connecting your back-end platform and charting libraries.
              </p>
            </div>
        {/*
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
         */}
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage