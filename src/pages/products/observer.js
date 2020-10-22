import React from 'react'
import Layout from '../../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import 'antd/lib/badge/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
/*
import FleetUiPath1 from '../../images/fleet-ui-1.png'
import FleetUiPath2 from '../../images/fleet-ui-2.png'
import FleetUiPath3 from '../../images/fleet-ui-3.png'
import ApplestorePath from '../../images/apple_store.svg'
import PlaystorePath from '../../images/play_store.svg'
import SkylinePath from '../../images/night-top-view.jpg'
//import GPSTrackerPath from '../../images/gps-tracker.jpg'
import InfoPath from '../../images/infographic-3.png'
*/
import { Link } from "gatsby"
import LogoPath from '../../images/logo-white.png'

const IndexPage = () => {
  return (
    <Layout>

      <div 
        className="py-24 px-8 md:px-20 md:py-40" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://source.unsplash.com/Gup8MCvSsf0)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Row gutter={48} type="flex" justify="center" >
          <Col lg={14} xs={24} >
            <Row 
              type="flex" 
              justify="center" 
              align="middle"
            >
              <div className="text-center">                
                <h6 className="tracking-widest text-white font-normal">
                  COMING SOON
                </h6>
                <h1 style={{fontWeight:"bold", color:"#FFF"}}>
                  Groundline <span className="font-normal">Observer</span>
                </h1>
                <p style={{fontSize:"15px", color: "#EEE", letterSpacing: "1px", marginBottom:"1rem"}}>
                  We are excited to anounce the development of Groundline Observer. Using deep learning, you will be able to 
                  identify objects in your aerial images based on the trained models you created - all done within our platform.
                </p>
                <p style={{fontSize:"15px", color: "#EEE", letterSpacing: "1px", marginBottom:"1rem"}}>
                  Monitor crucial changes in your field or easily count assets based on a given timeframe. View results in your
                  dashboard and generate reports to share your data within organization or stakeholders.
                </p>
                <a href='https://dashboard.groundline.io/register'>
                  <Button type="primary"  size="large" style={{borderRadius: 0}} icon="arrow-right" >Get Early Access</Button>
                </a>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
            
{/*}
      <div className="relative -mt-20 md:-mt-40 md:px-20 md:pt-16 " >
          <Row type="flex" justify="center" align="middle">
            <Col lg={18} xs={20}>
                <img src={"https://source.unsplash.com/Gup8MCvSsf0"} className="rounded-lg" alt="Groundline fleet management software" />
            </Col>
          </Row>
      </div>
*/}

      <div className="py-10 px-8 md:px-20 md:py-8 bg-white" >
        <Row gutter={48} type="flex" justify="center" align="middle">
          <Col lg={16} xs={24} >
            <h1 className="text-balck font-bold" style={{padding: '2rem 0rem'}} align="center">
              Features
            </h1>
          </Col>
        </Row>
        <div className="pt-10 px-16 bg-white">
          <Row gutter={96}>
            <Col lg={8} xs={24} className="mb-8">
              <h3 className="text-black">Cloud-based</h3>
              <p style={{fontSize:"18px"}}>
                Work using our web-based platform. No installation and configurations needed
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8 md:border-r-2 md:border-l-2 border-gray-300">
              <h3 className="text-black">API ready</h3>
              <p style={{fontSize:"18px"}}>
                Integrate to your existing applications or create a new one using our API.
              </p>
            </Col>
            <Col lg={8} xs={24}  className="mb-8">
              <h3 className="text-black">Automate</h3>
              <p style={{fontSize:"18px"}}>
                Create schedules and triggers for crucial changes and updates.
              </p>
            </Col>
          </Row>
        </div>
        <Row gutter={48} type="flex" justify="center" align="middle">
          <Col lg={16} xs={24} className="text-center">
            <h4 className="text-balck" style={{padding: '2rem 0rem'}} align="center">
              More features are coming. Sign up now to get early access.
            </h4>
            <a href='https://dashboard.groundline.io/register'>
              <Button type="outline"   style={{borderRadius: 0}} icon="arrow-right" >Sign up now</Button>
            </a>
          </Col>
        </Row>
      </div>

{/*
    <div id="docs" className="p-4 bg-white"></div>
    <div className="pb-10 px-8 md:px-20 md:pb-16 bg-gray-300" >
        <Row gutter={48} type="flex" justify="center" align="middle" >
        <Col 
            lg={8} xs={24}
          >
              <img 
                src={InfoPath} 
                style={{
                  width: "auto",
                  marginBottom: "12px",
                  marginTop:"2rem"
                }}
                alt="Groundline Tracking Apps" 
              />
          </Col>
          <Col lg={8} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h2 style={{color: "#000", marginTop:"2rem", fontWeight:"bold"}}>
                Groundline <span className="font-normal">Workforce</span>
              </h2>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#666", fontSize:"18px", textAlign:"left"}}>
                Receive live updates from your team remotely. Use it for your drivers, field workers or anyone in your team that requires real-time location tracking.
              </p>            
              <p style={{color: "#666", fontSize:"18px", marginTop:"1rem"}}>
                Coming Soon...
              </p>
          </Row>
              <Row type="flex" justify="start" align="middle">
                <img src={ApplestorePath} alt="Groundline Workforce Apple store" />&nbsp;
                <img src={PlaystorePath} alt="Groundline Workforce Play store" />
          </Row>
          </Col>
        </Row>
      </div>

    <div id="pricing" className="py-4 px-8 md:px-20 md:py-4" style={{background: "#0c77fa"}}>
        <Row gutter={48} type="flex" justify="center" align="middle" >
          <Col lg={12} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <img 
                src={GPSTrackerPath} 
                style={{
                  width: "auto"
                }}
                alt="Groundline Tracking Apps" 
              />
            </Row>
            <Row>
              <h2 className="text-center" style={{color: "#FFF", fontWeight:"bold"}}>
                Groundline <span className="font-normal">Tracker</span>
              </h2>
            </Row>            
            <Row type="flex" justify="center" align="middle">
              <p style={{color: "#FFF", fontSize: "14px"}} className="text-center">
                Advance tracking device for better monitoring
              </p>
            </Row>
            <Row type="flex" justify="center" align="middle">
              <p style={{color: "#FFF", fontSize: "14px"}} className="text-center">
                Coming 2021
              </p>
          </Row>
          </Col>
        </Row>
      </div>
              */}

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