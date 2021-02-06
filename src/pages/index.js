import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import 'antd/lib/badge/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import NightAerial from '../images/night-top-view.jpg'
//import InfoPath from '../images/infographic-2.png'
import PlatformUI from '../images/platform-search-1.jpg'

const IndexPage = () => {
  return (
    <Layout>

      <div 
        className="py-24 px-8 md:px-20 md:py-40" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('+NightAerial+')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'left',
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
                  Create better customer experience using maps and data visualization
                  {/*Enterprise solution for geospatial monitoring and analysis*/}
                </h1>
                <p style={{fontSize:"15px", color: "#EEE", letterSpacing: "1px", marginBottom:"3rem"}}>
                  Groundline is a mapping service for geospatial data visualization and analytics.
                  {/*Groundline is a satellite and aerial imagery management platform for asset monitoring.*/}
                </p>
                <a href='#contact' className="inline m-2">
                  <Button type="primary"  size="large" style={{borderRadius: 0, marginBottom: "10px" }} icon="arrow-right" >Let's Talk</Button>
                </a>   
              </div>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="relative md:-mt-32 md:px-20 md:pt-16 " >
        <div className="pt-10 px-16 bg-white">
          <Row gutter={96}>
            <Col lg={8} xs={24}>
              <h3 className="text-black">Immersive Experience</h3>
              <p style={{fontSize:"18px"}}>
                Create fully interactive mapping experience for better customer engagement and interaction.
              </p>
            </Col>
            {/*
            <Col lg={8} xs={24}>
              <h3 className="text-black">Up-to-date Imagery</h3>
              <p style={{fontSize:"18px"}}>
                Get the latest high-resolution images from the leading satellite and UAV operators - all in one platform.
              </p>
            </Col>
            */}
            <Col lg={8} xs={24} className="md:border-r-2 md:border-l-2 border-gray-300">
              <h3 className="text-black">Better Insights</h3>
              <p style={{fontSize:"18px"}}>
                View your datasets from a different perspective and extract actionable data for better decision-making.
              </p>
            </Col>
            <Col lg={8} xs={24}>
              <h3 className="text-black">Multisource Data</h3>
              <p style={{fontSize:"18px"}}>
                Access your own data or integrate third-party datasets from our trusted sources for better analysis.
              </p>
            </Col>
            {/*
            <Col lg={8} xs={24}>
              <h3 className="text-black">Access from anywhere</h3>
              <p style={{fontSize:"18px"}}>
                Monitor even the hard-to-reach locations in any parts of the globe using our easy-to-use portal.
              </p>
            </Col>
            */}
          </Row>
        </div>
      </div>

      <div id="solutions" className="py-10 px-8 md:px-20 md:py-12 " >
        <h4 style={{color: "#0c77fa", margin: '20px 0 0', fontWeight: "normal"}} align="center">
          SOLUTIONS
        </h4>
        <Row gutter={48} type="flex" justify="center" align="middle">
          <Col lg={16} xs={24} >
            <h1 className="text-balck font-bold m-0" style={{padding: '2rem 0rem 0rem'}} align="center">
              {/*We help ensure proper management and monitoring of different logistics operations.*/}
              We help create positive customer engagement that elevates brand credibility.
            </h1>
          </Col>
        </Row>
      </div>

      <div className="bg-white relative">
        <div className="w-full absolute top-0 -mt-2 md:-mt-8 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,64L60,85.3C120,107,240,149,360,144C480,139,600,85,720,85.3C840,85,960,139,1080,138.7C1200,139,1320,85,1380,58.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
        <Row type="flex" align="middle" justify="center">
          <Col lg={24} xs={24} >
              <div className="py-10 px-8 md:px-32 md:py-16 flex flex-wrap items-center"
                  style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(https://source.unsplash.com/C57vy2bfVrA)',
                  }}
              >
                <Col lg={14} xs={24}  offset={1}>
                  <div className="mt-32">
                    <h1 className="text-white">
                     Data visualization
                  </h1>
                  <h3 style={{color: "#EEE"}}>
                    Create interactive and data-driven maps
                  </h3>
                  <p className="text-gray-400" style={{fontSize:"16px"}}>
                    Integrate data from different sources and visualize using our high-performance algorithms for large datasets.
                    Although traditional basemaps are enough to view your data for quick analysis, some business and industries 
                    will benefit more by providing an interactive and immersive mapping experience. 
                    We partner with leading GIS platforms and use cutting-edge technologies to create the best-in-class mapping solution. 
                    {/*}
                    Raw aerial photos are not enough to help visualize your idea. 
                    Real estate and construction companies use virtual and augmented reality for marketing and technical purposes.
                    We design our platform to help our users process images such as 3D rendering, photogrammetry and orthomosaic by integrating our platform to the leading third-party tools.
                  */}
                  </p>
                    <a href='#contact' className="mt-12">
                      <Button type="primary" ghost style={{borderRadius: 0, marginBottom: "10px", color:"#FFF", borderColor:"#FFF" }} icon="arrow-right" >Get Early Access</Button>
                    </a>  
                  </div>
                </Col>
              </div>
          </Col>
        </Row>
      </div>
      
      <div className="bg-black py-10 px-8 md:px-20 md:py-12"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(https://source.unsplash.com/Rj6vvs8N4Qg)',
        }}
      >
        <Row gutter={48} type="flex"   align="middle">
          <Col lg={10} xs={24} >
              {/*<img src={InfoPath} alt="Groundline.io how it works?" />*/}
          </Col>
          <Col lg={14} xs={24} >
              <div className="text-left">
                {/*
                <div 
                  style={{
                    marginBottom:"1rem",  
                    padding:"2px 5px",
                    display:"inline-block",
                    borderRadius: "4px",
                    border: "1px solid #BBB",
                    color: "#BBB"
                  }}>
                    Coming Soon
                </div>
                */}
                <h1 className="text-white">
                  Indoor Mapping
                </h1>
                <h3 style={{color: "#EEE"}}>
                  {/*Extract actionable information*/}
                  Create digital indoor navigation
                </h3>
                <p className="text-gray-400" style={{fontSize:"16px"}}>
                  Large facilities such as shopping malls, campuses and hospitals requires effective mapping and montoring of routes and assets.
                  Indoor navigation can provide turn-by-turn directions that will get you to the right spot. 
                  It gives a quick overview of your location and create better experience for customers.  
                  {/*
                  Image analysis plays a crucial role for industries using aerial imagery in creating business strategies.
                  For instance, farm owners can apply computer vision in a satellite image to easily identify the state of crops and help them predict yields efficiently.
                  We aim to make it easier for our users to leverage the benefits of artificial intelligence to make better decisions.
                  */}
                  </p>
                <a href='#contact' className="inline m-2 ml-0">
                  <Button type="outline" ghost style={{marginRight: 0, border: 0, padding: 0, borderRadius:0}} icon="arrow-right" >Get Early Access</Button>
                </a>
              </div>
              <div style={{margin:"2rem 0"}} />
          </Col>
        </Row>
      </div>
      

      <div className="bg-black py-10 px-8 md:px-20 md:py-12"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(https://source.unsplash.com/6M9xiVgkoN0)',
        }}
      >
        <Row gutter={48} type="flex"   align="middle">
          <Col lg={13} xs={24} offset={1}>
              <div className="text-left">
                <div 
                  style={{
                    marginBottom:"1rem",  
                    padding:"2px 5px",
                    display:"inline-block",
                    borderRadius: "4px",
                    border: "1px solid #BBB",
                    color: "#BBB"
                  }}>
                    Coming Soon
                </div>
                <h1 className="text-white" >Image Services</h1>
                  <h3 style={{color: "#EEE"}}>
                    Access up-to-date high-resolution satellite and aerial imagery
                  </h3>
                  <p className="text-gray-400" style={{fontSize:"16px"}}>
                    Satellite and aerial images provide invaluable information for many businesses that are not visible at eye level. 
                    It allows greater coverage even in the most difficult areas making it an ideal tool for monitoring assets. 
                    Groundline makes it easier for everyone to access the latest images from different satellite and UAV operators in one platform.
                  </p>
                  
                <a href='#contact' className="inline m-2">
                  <Button type="outline"  style={{marginRight: 0, border: 0, padding: 0, borderRadius:0}} icon="arrow-right" ghost>Get Early Access</Button>
                  </a>
              </div>
              <div style={{margin:"2rem 0"}} />
          </Col>
        </Row>
      </div>

      <div 
        className="relative overflow-hidden" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9)), url(https://source.unsplash.com/HWIOLU7_O6w)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Row type="flex" justify="center" >
          <Col lg={14} xs={24} >
            <Row 
              type="flex" 
              justify="center" 
              align="bottom"
            >
              <div className="py-24 px-8 md:px-20 md:py-28 md:pb-20  text-center">
                <h6 className="uppercase leading-4 tracking-widest text-white font-bold">
                  Coming Soon
                </h6>
                <h1 style={{fontWeight:"bold", color:"#FFF"}}>
                  Explore Images
                </h1>
                <p style={{fontSize:"15px", color: "#EEE", letterSpacing: "1px", marginBottom:"1rem"}}>
                  Search for the latest satellite and aerial imagery. Integrate it to your map for better view and analysis of location.
                </p>
                <a href='#contact'>
                  <Button type="primary" size="large" style={{borderRadius: 0}} >Get Early Access</Button>
                </a>
                {/*
                &nbsp;
                &nbsp;
                <a href='/platform'>
                  <Button type="outline" ghost size="large" style={{border: 0, borderRadius: 0}} >Learn More</Button>
                </a>
                */}
              </div>
              <div className="px-4 sm:p-0">
                <img src={PlatformUI} className="rounded-lg" alt="Groundline fleet management software" />
              </div>
            </Row>
          </Col>
        </Row>
      </div>
{/*
      <div className="bg-black">

        <Row type="flex" >
          <Col 
            lg={12} xs={24}
            justify="center" 
            align="middle"
            style={{
              backgroundImage: 'url(https://source.unsplash.com/CeHGoFLzvNU)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height:"25rem"
            }}
          >
          </Col>
          <Col lg={12} xs={24} >
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Data Collection and Telemetry</h3>
                <p style={{fontSize:"18px"}}>
                  Retrieve data from field workers, remote devices and aerial imagery. Our platform can help you manage your data for processing and visualization.
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Object Detection</h3>
                <p style={{fontSize:"18px"}}>
                  Create and train models to help you identify objects in your image. Automatically identify changes in your location through machine learning.
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Data Visualization</h3>
                <p style={{fontSize:"18px"}}>
                  Process your data and images for proper visualization. Monitor your data in real-time and integrate photogrammetry for better understanding.
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row>
                <a href='/solutions'>
                  <Button type="link"  size="large" style={{borderRadius: 0, padding: 0}} >Learn More <ArrowRightOutlined /></Button>
                </a>
              </Row>

           
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Fleet Management</h3>
                <p style={{fontSize:"18px"}}>
                  Monitor your assets and workforce in real-time. Build and integrate your data into your existing applications
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />
              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Remote Access</h3>
                <p style={{fontSize:"18px"}}>
                  Transmit and monitor data from your tracking devices and build applications to control hardwares remotely.
                </p>
              </Row>
              <div style={{margin:"2rem 0"}} />

              <Row >
                <h3 style={{color: "#333", fontWeight: "bold"}}>Last Mile Automation</h3>
                <p style={{fontSize:"18px"}}>
                  Build delivery and tracking applications for your business. Trips and device tracking is in the core of our API.
                </p>
              </Row>
             
          </Col>
        </Row>
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
            <img src={PrismaLogo} alt="Prisma" />d8d8          </Col>
          <Col lg={2} xs={0}>
          </Col>
        </Row>
      </div>
*/}
    <div id="contact" className="p-4 bg-white"></div>
    <div className="pb-10 px-8 md:px-20 md:pb-16 bg-white" >
      <Row gutter={48} type="flex" justify="center" align="middle" >
        <Col lg={11} offset={1} xs={24} >
        <Row type="flex" justify="start" align="top">
            <h6 className="uppercase leading-4 tracking-widest text-black font-bold">
              Contact Us
            </h6>
          </Row>
          <Row type="flex" justify="start" align="top">
            <h1 style={{color: "#000", fontWeight:"bold"}}>
              Get in touch
            </h1>
          </Row>
          <Row type="flex" justify="start" align="middle">
            <p style={{color: "#666", fontSize:"18px", textAlign:"left"}}>
              We are happy to hear from you.
              To know more about our product and how we can help improve your business workflow, 
              send your message using the form and we will get in touch with you as soon as possible.
            </p>
          </Row>
        </Col>
        <Col  lg={10} xs={24}>
          <Row>
          <form action="/#contact" name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true" id="contact-form">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input 
              type="text" 
              name="name" 
              id="contact-form-name" 
              aria-labelledby="contact-form-name-label" 
              className="p-4 mb-2 border-solid text-base border-gray-400 border rounded w-full block outline-none" 
              placeholder="Name" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              id="contact-form-email" 
              aria-labelledby="contact-form-email-label" 
              className="p-4 mb-2 border-solid text-base border-gray-400 border rounded w-full block outline-none" 
            />
            <textarea
                name="message"
                id="contact-form-message"
                aria-labelledby="contact-form-message-label"
                className="p-4 mb-2 border-solid text-base border-gray-400 border rounded w-full block outline-none"
                rows="4"
                placeholder="Message"
            />
            <button 
              type="submit" 
              style={{backgroundColor: "#1890ff"}}
              className="text-white rounded border py-2 px-8 text-base"
              > Send
            </button>
        </form>
          </Row>
        </Col>
      </Row>
    </div>
{/*
      <div id="docs" className="pb-10 px-8 md:px-20 md:pb-10">
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={20} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h1 style={{color: "#000", marginTop:"2rem", fontWeight:"bold"}}>
                We are hiring!
              </h1>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#666", fontSize:"18px"}}>
                Our <b>Development</b> and <b>Sales</b> Teams are actively looking for amazing talents. If you are interested in tech industry and believe you have something to share in what we are building - why not join our team.
                To know more about the jobs and other stuff, please email us your CV at <b>hello@groundline.io</b>.
              </p>
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
      
*/}
    

    </Layout>
  )
}

export default IndexPage