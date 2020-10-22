import React from 'react'
import Layout from '../../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import 'antd/lib/badge/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import FleetUiPath1 from '../../images/fleet-ui-1.png'
import FleetUiPath2 from '../../images/fleet-ui-2.png'
import FleetUiPath3 from '../../images/fleet-ui-3.png'
import ApplestorePath from '../../images/apple_store.svg'
import PlaystorePath from '../../images/play_store.svg'
//import SkylinePath from '../../images/night-top-view.jpg'
//import GPSTrackerPath from '../../images/gps-tracker.jpg'
import InfoPath from '../../images/infographic-3.png'
import { Link } from "gatsby"
import LogoPath from '../../images/logo-white.png'

const IndexPage = () => {
  return (
    <Layout>

      <div 
        className="py-24 px-8 md:px-20 md:py-40" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://source.unsplash.com/x-ghf9LjrVg)',
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
                <h1 style={{marginTop:"0rem", fontWeight:"bold", color:"#FFF"}}>
                  Groundline <span className="font-normal">Explorer</span>
                <sup 
                  style={{
                    background: "#FFFA00", 
                    padding:"2px 5px",
                    borderRadius: "4px",
                    fontWeight:"bold",
                    color: "#000000",
                    fontSize:"10px",
                    marginLeft:"2px",
                    verticalAlign: "super"
                  }}>
                    Pre-beta
                </sup>
                </h1>
                <p style={{fontSize:"15px", color: "#EEE", letterSpacing: "1px", marginBottom:"1rem"}}>
                Monitor field workers and collect data in real-time. Use our API to integrate data into your application and third-party softwares.
                </p>
                <a href='https://dashboard.groundline.io/register'>
                  <Button type="primary"  size="large" style={{borderRadius: 0}} icon="arrow-right" >Get Early Access</Button>
                </a>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
            

      <div className="relative -mt-20 md:-mt-40 md:px-20 md:pt-16 " >
          <Row type="flex" justify="center" align="middle">
            <Col lg={18} xs={20}>
                <img src={FleetUiPath1} className="rounded-lg" alt="Groundline fleet management software" />
            </Col>
          </Row>
      </div>

      <div className="py-10 px-8 md:px-20 md:py-16 bg-white" >
        <Row gutter={48} type="flex" justify="center" align="middle">
          <Col lg={16} xs={24} >
            <h1 className="text-balck font-bold" style={{padding: '2rem 0rem'}} align="center">
              Features
            </h1>
          </Col>
        </Row>

        <Row gutter={48} type="flex" justify="center" align="middle">
          <Col 
            lg={8} xs={24}
          >
              <img 
                src={FleetUiPath2} 
                style={{
                  height:"20rem",
                  width: "auto",
                  marginBottom: "12px"
                }}
                className="rounded-lg border-2 border-solid border-color-gray-100 shadow-lg"
                alt="Groundline Tracking Apps" 
              />
          </Col>
          <Col lg={8} xs={24} >
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Team management</h3>
                <p style={{fontSize:"18px"}}>
                  Manage team members with other Groundline users or use our API to connect with your existing database of users.
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Data Visualization</h3>
                <p style={{fontSize:"18px"}}>
                  Create custom dashboard based on your needs. Share dashboard within your organization or other stake holders. 
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Track members</h3>
                <p style={{fontSize:"18px"}}>
                  Monitor devices and team members location in real-time using interactive map.
                </p>
              </Row>
          </Col>
        </Row>
        <Row type="flex" gutter={48} justify="center" align="middle">
          <Col lg={8} xs={24} >
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Messaging</h3>
                <p style={{fontSize:"18px"}}>
                  Communicate with team members for seamless monitoring. Increase productivity by sending or receiving regular updates to your team members.
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Geofencing</h3>
                <p style={{fontSize:"18px"}}>
                  Take full control by setting geofences to constrain your team and devices location.
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Notifications and Triggers</h3>
                <p style={{fontSize:"18px"}}>
                  Receive alerts and notifications for important updates. You can also send alerts to your team for urgent announcements.
                </p>
              </Row>
          </Col>
          <Col lg={8} xs={24} >
            <img 
                src={FleetUiPath3} 
                style={{
                  height:"20rem",
                  width: "auto",
                  marginBottom: "12px"
                }}
                className="rounded-lg border-2 border-solid border-color-gray-100 shadow-lg"
                alt="Groundline Tracking Apps" 
              />
          </Col>
        </Row>
      </div>

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
                Groundline <span className="font-normal">Explorer</span>
              </h2>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#666", fontSize:"18px", textAlign:"left"}}>
                Receive live updates from your remote team. Use it for your field workers, researchers, drivers or anyone in your team that requires real-time tracking and data gathering.
              </p>            
              <p style={{color: "#666", fontSize:"18px", marginTop:"1rem"}}>
                Coming Soon...
              </p>
          </Row>
              <Row type="flex" justify="start" align="middle">
                <img src={ApplestorePath} alt="Groundline Explorer Apple store" />&nbsp;
                <img src={PlaystorePath} alt="Groundline Explorer Play store" />
          </Row>
          </Col>
        </Row>
      </div>
{/*
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