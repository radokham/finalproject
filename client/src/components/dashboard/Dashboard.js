import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutCooker } from "../../actions/authActions";
import Atelier from"./Atelier";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutCooker();
  };

  render() {
    const { cooker } = this.props.auth;

    return (
      
      <div className="">
        <div className="row">
          <div className="col-md-6">

          < Atelier />
          </div>
          <div className="col-md-6">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {cooker.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                vous etes connecte sur ton compte Admin{" "}
                <span style={{ fontFamily: "monospace" }}>E-commerce</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
          </div>
        </div>
     
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutCooker: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutCooker }
)(Dashboard);
