import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import { Menu } from 'antd';

const { SubMenu } = Menu;

const MenuWrapper = () => {
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
          <>
          <Menu className="hidden md:block float-right bg-black" style={{backgroundColor: "#000"}} theme="dark" mode="horizontal" defaultSelectedKeys={['999']}>
            {menuItems.map(item => {
              if (item.submenu) {
                return (
                    <SubMenu key={menuItems.indexOf(item) + "-submenu"}  title={item.name}>
                      {item.submenu.map(submenuItem => {
                        return (
                          <Menu.Item key={item.submenu.indexOf(submenuItem)}>
                            <Link to={submenuItem.link} >
                              {submenuItem.name}
                            </Link>
                          </Menu.Item>
                        )
                      })}
                    </SubMenu>
                )
              } 
              return (
                <Menu.Item key={menuItems.indexOf(item)}>
                  <Link to={item.link} >
                    {item.name}
                  </Link>
                </Menu.Item>
              )
            })}
            <Menu.Item key={'888'}>
              <a href="https://dashboard.groundline.io/explore"  >
                Dashboard
              </a>
            </Menu.Item>
            <Menu.Item key={'999'}>
              <a href="https://dashboard.groundline.io/register"  >
                Sign Up
              </a>
            </Menu.Item>
          </Menu>
          <Menu className="block md:hidden float-right bg-black" style={{backgroundColor: "#000"}} theme="dark" mode="horizontal" defaultSelectedKeys={['999']}>
            <SubMenu key="SubMenu"  title="Learn More">
              {menuItems.map(item => {
                if (item.submenu) {
                  return (
                      <SubMenu key={menuItems.indexOf(item) + "-submenu"}  title={item.name}>
                        {item.submenu.map(submenuItem => {
                          return (
                            <Menu.Item key={item.submenu.indexOf(submenuItem)}>
                              <Link to={submenuItem.link} >
                                {submenuItem.name}
                              </Link>
                            </Menu.Item>
                          )
                        })}
                      </SubMenu>
                  )
                } 
                return (
                  <Menu.Item key={menuItems.indexOf(item)}>
                    <Link to={item.link} >
                      {item.name}
                    </Link>
                  </Menu.Item>
                )
              })}
            </SubMenu>
            <Menu.Item key={'888'}>
              <a href="https://dashboard.groundline.io/explore"  >
                Dashboard
              </a>
            </Menu.Item>
            <Menu.Item key={'999'}>
              <a href="https://dashboard.groundline.io/register"  >
                Sign Up
              </a>
            </Menu.Item>
          </Menu>
        </>
        )
      }}
    />
  )
}

export default MenuWrapper