import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import 'antd/lib/badge/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import PlatformUI from '../images/platform-search-results-1.jpg'
import {
  FilterTwoTone,
  EditTwoTone,
  DatabaseTwoTone,
  InteractionTwoTone,
  ClockCircleTwoTone,
  SwitcherTwoTone
} from '@ant-design/icons';

const IndexPage = () => {
  return (
    <Layout>

      <div 
        className="py-24 px-8 md:px-20 md:py-40" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://source.unsplash.com/nF1FvXdJL7o)',
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
                  PRE-BETA
                </h6>
                <h1 style={{fontWeight:"bold", color:"#FFF"}}>
                  Groundline <span className="font-normal">Explorer</span>
                </h1>
                <p style={{fontSize:"15px", color: "#EEE", letterSpacing: "1px", marginBottom:"1rem"}}> 
                  Search for the latest satellite and aerial imagery. Download and print selected images for free.
                  Please take note that this tool is in its early stage of development - it may or may not work as expected.
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
                <img src={PlatformUI} className="rounded-lg" alt="Groundline fleet management software" />
            </Col>
          </Row>
      </div>

      <div className="relative md:px-20 md:pt-16 " >
        <Row gutter={48} type="flex" justify="center" align="middle">
          <Col lg={16} xs={24} >
            <h1 className="text-balck font-bold" style={{padding: '2rem 0rem'}} align="center">
              Features
            </h1>
          </Col>
        </Row>
        <div className="pt-10 px-16 bg-white mb-16">
          <Row gutter={96}>
            <Col lg={8} xs={24} className="mb-8">
              <ClockCircleTwoTone className="text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold mb-4">Up-to-date listing</h3>
              <p style={{fontSize:"18px"}}  className="mb-8">
                We make sure that the latest images are availbale as soon as it is ready. Images may take a couple of days to show up depending on the provider.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8">
              <FilterTwoTone className="text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold mb-4">Search and Filtering</h3>
              <p style={{fontSize:"18px"}}  className="mb-8">
                Search images from different satellite and drone providers available. Filter results based on location, date or cloud coverage.
              </p>
            </Col>
            <Col lg={8} xs={24}  className="mb-8">
              <SwitcherTwoTone className="text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold mb-4">Request Image</h3>
              <p style={{fontSize:"18px"}}  className="mb-8">
                Coming soon. Request image from our providers by simply giving as the details such as date, location and technical specifications.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8">
              <EditTwoTone className="text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold mb-4">Annotation</h3>
              <p style={{fontSize:"18px"}} className="mb-8">
                Add distance and area annotations using the measure tool. All annotations are superimposed when you download or print your image.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8">
              <DatabaseTwoTone className="text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold mb-4">Data Management</h3>
              <p style={{fontSize:"18px"}}  className="mb-8">
                Save your images in your assets folder for future use. All images are stored in your account and can be easily accessed using our portal.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8">
              <InteractionTwoTone className="text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold mb-4">Team Management</h3>
              <p style={{fontSize:"18px"}}  className="mb-8">
                Share images with other members by adding them to your team. All assets are accessible by members and can be downloaded as needed.
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div  className="py-8 px-8 md:px-20 md:py-10" style={{background: "#0c77fa"}}>
        <Row gutter={48} type="flex" justify="space-around" align="middle" >
          <Col lg={12} xs={24} >
            <Row type="flex" justify="start" align="middle">
              <h2 style={{color: "#FFF"}}>
                More features coming soon
              </h2>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <p style={{color: "#FFF"}}>
                We are streamlining our services and platform to make it easier for you to achieve your goals. 
                Sign up now and let us know how we can improve our product.
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

    </Layout>
  )
}

export default IndexPage