import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Button from 'antd/lib/button'
import { Link } from 'gatsby'

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
        const menuItems = data.allMenuItems.edges.map(edge => edge.node).reverse()
        return (
          <div style={{ fontSize: "0.8rem"}}>
            <div 
               style={{ marginLeft: "2em", float: "right" }}
             >
                 <a href='https://dashboard.groundline.io/register'
                   style={{ color: '#34404e', textDecoration: 'none' }}
                 >
                   <Button type="primary" size="large" style={{borderRadius: 0}} >Sign Up</Button>
                 </a>
             </div>
            {menuItems.map(item => {
              return (
                <div 
                  style={{ marginLeft: "2em", marginTop: "0.4em", float: "right" }}
                  key={menuItems.indexOf(item)}
                >
                    <Link
                      to={item.link}
                      style={{ color: '#CCCCCC', textDecoration: 'none' }}
                    >
                      {item.name}
                    </Link>
                </div>
              )
            })}
          </div>
        )
      }}
    />
  )
}

export default Menu