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
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>

      <div style={{
        marginBottom: "7.1875rem"
      }}>
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={10} xs={24} >
            <Badge count={'Beta'} />
            <h3 style={{color: "#364962", fontSize: 32, marginTop: '5px'}}>
            Customizable declarative API for back-end connections
          </h3>
          <p style={{color: "#364962", fontSize: 16 }}>
            Speed up CMS development by utilizing exsiting UI frameworks and BAAS using high-order components.
          </p>
          <br/>
          <Link to="/docs/get-started/introduction">
            <Button type="outline" size="large" style={{marginRight: 10}} icon="folder-open">Get Started</Button>
          </Link>
          <Button type="primary" size="large" href="#" icon="github" >Github</Button>
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

      <div>
        <div>
          <Row gutter={96}>
            <Col lg={8} xs={24}>
              <Icon type="api" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>Declarative API</h4>
              <p>
                Focus on what your app can do instead of how it works under the hood. Build your schema using components and it will automatically connect to your chosen database and render your interface.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <Icon type="layout" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>UI framework flexible</h4>
              <p>
                Components are not attached to a specific UI framework. Whether you are using Bootstrap, Ant Design or Material Design, our system will render your schema to your preferred interface designs.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <Icon type="database" theme="twoTone" style={{ fontSize: '38px', marginBottom: '20px' }} />
              <h4>Back-end agnostic</h4>
              <p>
                Create one schema and connect your data to one of our available back-end connectors. You can switch to another back-end without re-coding your schema, just configure your connectors and your done.
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div style={{marginTop: "7.1875rem", padding: "3rem 0"}}>
        <div>
           <div align="left">
              <h5>Groundline.io</h5>
              <p>
                Customizable declarative API for back-end connections
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