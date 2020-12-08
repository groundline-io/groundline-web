import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import 'antd/lib/badge/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import {
  HomeOutlined,
  ApiOutlined,
  DollarOutlined,
  GlobalOutlined,
  UserAddOutlined,
  SolutionOutlined
} from '@ant-design/icons';

const IndexPage = () => {
  return (
    <Layout>

      <div 
        className="py-24 px-8 md:px-20 md:py-40" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://source.unsplash.com/PhYq704ffdA)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Row gutter={48} type="flex" justify="center">
          <Col lg={14} xs={24} >
            <Row 
              type="flex" 
              justify="center" 
              align="middle"
              
            >
              <div className="text-center">
                <h1 className="tracking-wider md:tracking-widest text-center text-white leading-10 md:leading-10" >
                  Industries
                </h1>
                <p style={{fontSize:"18px", color: "#EEE", letterSpacing: "1px", marginBottom:"1rem"}}>
                    Remote sensing has a wide range of application in different industries. 
                    It provides invaluable source of information and unique opportunities for businesses. 
                    We work with different sectors to help improve business workflow and decision-making.
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
            
      <div className="bg-white">
        <Row type="flex" align="middle" justify="center">
          <Col lg={24} xs={24} >
              <div className="flex flex-wrap items-center bg-red-600">
                <Col lg={12} xs={24} 
                  style={{
                    backgroundImage: 'url(https://source.unsplash.com/Wv2U24G2F78)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height:"25rem"
                  }}
                >
                </Col>
                <Col lg={12} xs={24} className="text-white">
                  <div className="p-12">
                    <h2 className="text-white" >Construction & Infrastructure</h2>
                    <p style={{fontSize:"16px"}}>
                      Satellite and aerial imagery provide a different perspective for construction and infrastructure projects. 
                      It helps site managers track work progress at regular intervals and make better decisions based on collected images from the field.
                    </p>
                    <p style={{fontSize:"16px"}}>
                      Images taken by satellites and UAV also helps managers monitor infrastructure for damages and maintenance work. It eliminates manual 
                      assessment for areas that are difficult to access such as high-rise buildings, bridges, pipelines etc.
                    </p>
                  </div>
                </Col>
              </div>
              <div  className="flex flex-wrap md:flex-row-reverse items-center bg-yellow-600">
                <Col lg={12} xs={24}
                  style={{
                    backgroundImage: 'url(https://source.unsplash.com/5E3x1--qI9w)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height:"25rem"
                  }}
                >
                </Col>
                <Col lg={12} xs={24} className="text-white">
                  <div className="p-12">
                    <h2 className="text-white">Agriculture</h2>
                    <p style={{fontSize:"16px"}}>
                      Farm owners and agricultural companies are constantly monitoring fields to create a better crop management plan.
                      Through remote sensing, it gives them an overview and effective monitoring of crops at a given timeframe.
                      
                    </p>
                    <p style={{fontSize:"16px"}}>
                      Historical archives of imagery helps farm owners analyze changes in their fields. It helps them make necessary adjustments
                      in resources and grow better crops for higher yield.
                    </p>
                  </div>
                </Col>
              </div>
              <div className="flex flex-wrap items-center bg-green-600">
                <Col lg={12} xs={24}
                  style={{
                    backgroundColor: '#FFF',
                    backgroundImage: 'url(https://source.unsplash.com/CkZF0-etxU8)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height:"25rem"
                  }}
                >
                </Col>
                <Col lg={12} xs={24} className="text-white">
                  <div className="p-12">
                    <h2 className="text-white">Government</h2>
                    <p style={{fontSize:"16px"}}>
                      Satellite and UAV images are essential tools for national and local government operations.
                      Public works and safety can benefit from the data found in satellite imagery that cannot be seen at eye level. 
                    </p>
                    <p style={{fontSize:"16px"}}>
                      Local government can use aerial and satellite imagery to assess damages caused by accidents or natural disaster. 
                    </p>
                    <p style={{fontSize:"16px"}}>
                      Government regulatory agencies uses aerial surveliiance to identify non-compliance and help create better policies 
                      that will benefit its constituents.
                    </p>
                  </div>
                </Col>
              </div>
          </Col>
        </Row>
      </div>

      <div className="relative md:px-20  " >
        <div className="pt-10 px-16 bg-white">
          <Row gutter={48} type="flex" justify="start" align="middle">
            <Col lg={16} xs={24} >
              <h1 className="text-balck font-bold mb-12" align="left">
                Other industries
              </h1>
            </Col>
          </Row>
          <Row gutter={96}>
            <Col lg={8} xs={24} className="mb-8 ">
              <HomeOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Real Estate</h3>
              <p style={{fontSize:"18px"}}>
                View properties from above to improve marketing and development. 
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8 ">
              <ApiOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Energy</h3>
              <p style={{fontSize:"18px"}}>
                Check oil spills, wind mills and other resources that are difficult to access. 
              </p>
            </Col>
            <Col lg={8} xs={24}  className="mb-8">
              <GlobalOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Environment</h3>
              <p style={{fontSize:"18px"}}>
                Monitor forestry, wild animal sanctuary and other high-risk areas.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8 ">
              <SolutionOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Journalism</h3>
              <p style={{fontSize:"18px"}}>
                Use imagery for investigative reports and fact-finding.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8 ">
              <DollarOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Investments and Marketing</h3>
              <p style={{fontSize:"18px"}}>
                See different opportunities within your area of interest.
              </p>
            </Col>
            <Col lg={8} xs={24}  className="mb-8">
              <UserAddOutlined className="text-4xl mb-4" />
              <h3 className="text-black">NGO</h3>
              <p style={{fontSize:"18px"}}>
                Evaluate areas to improve and maximize services. 
              </p>
            </Col>
            {/*}
            <Col lg={8} xs={24} className="mb-8">
              <DollarOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Smart City</h3>
              <p style={{fontSize:"18px"}}>
                Monitor and analyze remotely controlled devices for your home or business.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8 md:border-r-2 md:border-l-2 border-gray-300">
              <CarOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Transportation</h3>
              <p style={{fontSize:"18px"}}>
                Improve transportation management, traffic monitoring and vehicle maintenance. 
              </p>
            </Col>
            <Col lg={8} xs={24}  className="mb-8">
              <InboxOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Logistics</h3>
              <p style={{fontSize:"18px"}}>
                Automate logistics operations through real-time tracking of shipments and delivery. 
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8">
              <ClearOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Service Provider</h3>
              <p style={{fontSize:"18px"}}>
                Monitor on-duty workers and vehicles to improve business workflow and customer service.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-8 md:border-r-2 md:border-l-2 border-gray-300">
              <FormatPainterOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Field projects</h3>
              <p style={{fontSize:"18px"}}>
                Increase workforce productivity for better project management through real-time updates.
              </p>
            </Col>
            <Col lg={8} xs={24}  className="mb-8">
              <ExperimentOutlined className="text-4xl mb-4" />
              <h3 className="text-black">Analytics</h3>
              <p style={{fontSize:"18px"}}>
                Perform traffic analysis and monitor driving behaviors using our API and devices. 
              </p>
            </Col>
          */}
          </Row>
        </div>
      </div>

    <div id="docs" className="p-4 bg-white"></div>
    <div className="pb-10 px-8 md:px-20 md:pb-16 bg-gray-300" >
      <Row gutter={48} type="flex" justify="center" align="middle" >
        <Col lg={20} xs={24} >
          <Row type="flex" justify="start" align="middle">
            <h1 style={{color: "#000", marginTop:"2rem", fontWeight:"bold"}}>
              Ready to get started?
            </h1>
          </Row>
          <Row type="flex" justify="start" align="middle">
            <p style={{color: "#666", fontSize:"18px", textAlign:"left"}}>
              We are happy to hear from you.
              To know more about our products and how we can help improve your business workflow, 
              email us at hello@groundline.io or click the link below to sign up and we will get in touch with you as soon as possible.
            </p>
            <a href='https://dashboard.groundline.io/register'>
              <Button type="primary" shape="round" size="large" style={{marginRight: 10}} icon="arrow-right" ghost>Signup here</Button>
            </a>
        </Row>
        </Col>
      </Row>
    </div>

    </Layout>
  )
}

export default IndexPage