import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div style={{marginBottom: "7.1875rem"}}>
        <div align="center">
        <br/>
          <p style={{color: "#364962", fontSize: 32}}>
            Connect your React app with your back-end
          </p>
          <br/>
          <Link to="/docs/get-started/introduction">
            <Button type="outline" size="large" style={{marginRight: 10}}>Get Started</Button>
          </Link>
          <Button type="primary" size="large" href="#">Github</Button>
        </div>
      </div>

      <div>
        <div align="center">
        <br/>
          <h3>
            Features
          </h3>
          <p>
            Customizable declarative API.
          </p>
        </div>
          <br/>
        <div>
          <Row gutter={16}>
            <Col span={8}>
              <h6>Feature 1</h6>
              <p>
                Lorem ipsum dolor sit amet. Orem ipsum dolor sit amet dolorsit amet ipsum dolor sit amet ipsum doloramet ipsum dolor sit amet.
              </p>
            </Col>
            <Col span={8}>
              <h6>Feature 2</h6>
              <p>
                Lorem ipsum dolor sit amet. Orem ipsum dolor sit amet dolorsit amet ipsum dolor sit amet ipsum doloramet ipsum dolor sit amet.
              </p>
            </Col>
            <Col span={8}>
              <h6>Feature 3</h6>
              <p>
                Lorem ipsum dolor sit amet. Orem ipsum dolor sit amet dolorsit amet ipsum dolor sit amet ipsum doloramet ipsum dolor sit amet.
              </p>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <h6>Feature 4</h6>
              <p>
                Lorem ipsum dolor sit amet. Orem ipsum dolor sit amet dolorsit amet ipsum dolor sit amet ipsum doloramet ipsum dolor sit amet.
              </p>
            </Col>
            <Col span={8}>
              <h6>Feature 5</h6>
              <p>
                Lorem ipsum dolor sit amet. Orem ipsum dolor sit amet dolorsit amet ipsum dolor sit amet ipsum doloramet ipsum dolor sit amet.
              </p>
            </Col>
            <Col span={8}>
              <h6>Feature 6</h6>
              <p>
                Lorem ipsum dolor sit amet. Orem ipsum dolor sit amet dolorsit amet ipsum dolor sit amet ipsum doloramet ipsum dolor sit amet.
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div style={{marginTop: "7.1875rem", padding: "3rem 0"}}>
        <div>
          <Row gutter={16}>
            <Col span={10}>
              <h6>groundline</h6>
              <p>
                Customizable declarative API for connecting your frontend and backend application
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

    </Layout>
  )
}

export default IndexPage