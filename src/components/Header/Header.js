import React, { Component } from 'react'
import { Link } from 'gatsby';
import sizeMe  from 'react-sizeme';
import { connect } from "react-redux";
import { updateHeaderHeight } from '../../actions/layout';
import Menu from '../Menu';
import LogoPath from '../../images/logo-white.png';

class Header extends Component {
  componentDidUpdate = () => {
    this.props.updateHeaderHeight(this.props.size.height)
  }

  render() {
    return(
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
         // marginBottom: '1.45rem',
          color:"#FFFFFF",
          background: "#000000"
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1360,
            padding: '0.8rem 3.2rem',
          }}
        >
          <div style={{
            float: 'left',
            marginBottom: '0.8em',
          }}>
              <Link
                to="/"
                style={{
                  color: '#FFF',
                  fontWeight: "bold",
                  textDecoration: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                <h4
                  style={{
                    color:"#FFF",
                    letterSpacing: "1px"
                  }}  
                >
                  <img src={LogoPath} alt="groundline.io" height="30" style={{ margin: 0 }} /> 
                  &nbsp; groundline
                </h4>
              </Link>
          </div>
          <Menu />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateHeaderHeight
}

export default connect(()=>({}), mapDispatchToProps) (sizeMe({monitorHeight: true})(Header))
