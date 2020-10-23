import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import 'antd/lib/badge/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import InfoPath from '../images/infographic-2.png'
//import FarmVectorPath from '../images/farm-vector.png'
//import AppMapPath from '../images/app-map.jpg'
//import ParkingPath from '../images/parking.jpg'
import SkylinePath from '../images/skyline.jpg'
import { Link } from "gatsby"
import LogoPath from '../images/logo-white.png'

const IndexPage = () => {
  return (
    <Layout>

      <div 
        className="py-24 px-8 md:px-20 md:py-20 bg-blue-500" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 255, 0.1)), url('+SkylinePath+')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Row gutter={48} type="flex"   align="middle">
          <Col lg={11} xs={24} >
              <div className="text-left">
                <h1 className="tracking-wider md:tracking-wide text-white leading-10 md:leading-10" >
                  Monitoring assets with simplified solutions
                </h1>
                <p style={{fontSize:"15px", color: "#FFF", letterSpacing: "1px", marginBottom:"3rem"}}>
                  We make sure you are not constrained to existing solutions and give you the freedom to build on top of our system
                </p>
                <a href='https://dashboard.groundline.io/register' className="inline m-2">
                  <Button type="danger"  size="medium" style={{borderRadius: 0, borderColor: "#dc7b17", backgroundColor:"#dc7b17"}} icon="arrow-right" >Get Started</Button>
                </a>
                <a href='#solutions-learn-more' className="inline m-2">
                  <Button type="link"  size="medium" style={{borderRadius: 0, color: "#FFF"}} >Learn More</Button>
                </a>
              </div>
              <div style={{margin:"2rem 0"}} />
          </Col>
          <Col lg={13} xs={24}>
              <img src={InfoPath} alt="Groundline.io how it works?" />
          </Col>
        </Row>
      </div>
            
{/*
      <div id="solutions-learn-more" className="relative -mt-24 md:px-20 md:pt-16 " >
        <div className="pt-10 px-16 bg-white">
          <Row gutter={96}>
            <Col lg={8} xs={24}>
              <h3 style={{color: "#333", fontWeight: "bold"}}>Collect</h3>
              <p style={{fontSize:"18px"}}>
                We help build applications for data gathering from remote devices and field workers. We help retrieve and manage aerial images from UAV and satellites. 
              </p>
            </Col>
            <Col lg={8} xs={24} >
              <h3 style={{color: "#333", fontWeight: "bold"}}>Analyze</h3>
              <p style={{fontSize:"18px"}}>
                We provide platform to view and process all retrieved data. Use object detection to help monitor changes in your field.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <h3 style={{color: "#333", fontWeight: "bold"}}>Visualize</h3>
              <p style={{fontSize:"18px"}}>
                View your data in real-time using our customizable dashboard. Use triggers and get notified for updates or anomalies.
              </p>
            </Col>
          </Row>
        </div>
      </div>
*/}
      <div className="bg-white" id="solutions-learn-more">
        {/*
        <Row gutter={48} type="flex" justify="center" align="middle">
          <Col lg={16} xs={24} >
            <h1 className="text-balck font-bold" style={{padding: '2rem 0rem'}} align="center">
              Built for integration and faster development
            </h1>
          </Col>
        </Row>
        */}
        <Row type="flex" align="middle" justify="center">
          <Col lg={24} xs={24} >
              <div className="flex flex-wrap items-center bg-red-600">
                <Col lg={12} xs={24} 
                  style={{
                    backgroundImage: 'url(https://source.unsplash.com/CeHGoFLzvNU)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height:"25rem"
                  }}
                >
                </Col>
                <Col lg={12} xs={24} className="text-white">
                  <div className="p-12">
                    <h2 className="text-white" >Collect</h2>
                    <p style={{fontSize:"16px"}}>
                      We help build applications for data gathering and real-time tracking. Gather data from remote devices and field workers or retrieve aerial images from UAV and satellites. 
                    </p>
                    <p style={{fontSize:"16px"}}>
                      Build your own tracking apps or connect to existing softwares to scale up your application. You can integrate third-party softwares for better business workflow. 
                    </p>
                  </div>
                </Col>
              </div>
              <div  className="flex flex-wrap md:flex-row-reverse items-center bg-yellow-600">
                <Col lg={12} xs={24}
                  style={{
                    backgroundImage: 'url(https://source.unsplash.com/G1N9kDHqBrQ)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height:"25rem"
                  }}
                >
                </Col>
                <Col lg={12} xs={24} className="text-white">
                  <div className="p-12">
                    <h2 className="text-white">Analyze</h2>
                    <p style={{fontSize:"16px"}}>
                      We provide a platform for viewing and analyzing aerial imagery. We use machine learning to help monitor changes in specific location and identify objects when needed.
                    </p>
                    <p style={{fontSize:"16px"}}>
                      Monitor crucial changes in your field or easily count assets based on a given timeframe. View results in your
                      dashboard and generate reports to share your data within organization or stakeholders.
                    </p>
                  </div>
                </Col>
              </div>
              <div className="flex flex-wrap items-center bg-green-600">
                <Col lg={12} xs={24}
                  style={{
                    backgroundColor: '#FFF',
                    backgroundImage: 'url(https://source.unsplash.com/87oz2SoV9Ug)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height:"25rem"
                  }}
                >
                </Col>
                <Col lg={12} xs={24} className="text-white">
                  <div className="p-12">
                    <h2 className="text-white">Visualize</h2>
                    <p style={{fontSize:"16px"}}>
                      Generate 3D images from photogrammtery and LIDAR data and integrate it to your location-based AR apps to
                      help your customers and stakeholders visualize your project.
                    </p>
                    <p style={{fontSize:"16px"}}>
                      We also help monitor IoT devices using customizable dashboards. Our system uses latest technologies to 
                      receive data in real-time. 
                    </p>
                  </div>
                </Col>
              </div>
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
                We are more than happy to hear from you.
                To know more about our products and how we can help improve your workflow and business, please click the link below to sign up and we will get in touch with you as soon as possible.
              </p>
              <a href='https://dashboard.groundline.io/register'>
                <Button type="primary" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" ghost>Signup here</Button>
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
                Pricing? Talk to us.
              </h2>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#FFF"}}>
                We are streamlining our services and platform to make it easier for you to achieve your goals.
              </p>
          </Row>
          </Col>
          <Col lg={4} xs={24}>
            <Row type="flex" justify="end" align="middle"  className="text-left lg:text-right">
              <a href='https://dashboard.groundline.io/register'  className="block w-full text-left lg:text-right">
                <Button type="outline" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" ghost>Sign Up</Button>
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