import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Button from 'antd/lib/button'

const Menu = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMenuItems {
            edges {
              node {
                name
                link
              }
            }
          }
        }
      `}
      render={data => {
        //const menuItems = data.allMenuItems.edges.map(edge => edge.node).reverse()
        return (
          <div style={{ fontSize: "0.8rem"}}>
            {/*
            {menuItems.map(item => {
              return (
                <div 
                  style={{ marginLeft: "2em", float: "right" }}
                  key={menuItems.indexOf(item)}
                >
                    <Link
                      to={item.link}
                      style={{ color: '#34404e', textDecoration: 'none' }}
                    >
                      {item.name}
                    </Link>
                </div>
              )
            })}
             */}
             <div 
                  style={{ marginLeft: "2em", float: "right" }}
                >
                    <a href='https://app.groundline.io'
                      style={{ color: '#34404e', textDecoration: 'none' }}
                    >
                      <Button type="danger" shape="round" style={{marginRight: 10}} icon="arrow-right" >Beta Access</Button>
                    </a>
                </div>
          </div>
        )
      }}
    />
  )
}

export default Menu