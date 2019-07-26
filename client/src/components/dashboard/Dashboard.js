import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutCooker } from "../../actions/authActions";
import Atelier from "./Atelier";
import Getatelier from"./Getatelier";
// import Adminpage from"./Adminpage";
import './Dashboard.css';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutCooker();
  };

  render() {
    const { cooker } = this.props.auth;

    return (
      
      <div className="dashboard">

      <div  id="wrapper">
         <div className="row">
         <div className="col-md-2">
         <div class="bg-light border-right" id="sidebar-wrapper">
          <div class="sidebar-heading center">{cooker.name.split(" ")[0]} </div>
          <div className="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light">
              <button
              className="btn btn-success" id="couleur"
                onClick={()=>{
                  document.getElementById('ajoutatelier').style.display= "block"
                  document.getElementById('listeatelier').style.display= "none"
                  document.getElementById('bonjour').style.display= "none"
                }}
              >Ajout de l'atelier</button>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
            <button className="btn btn-success" id="couleur"
                onClick={()=>{
                  document.getElementById('ajoutatelier').style.display= "none"
                  document.getElementById('listeatelier').style.display= "block"
                  document.getElementById('bonjour').style.display= "none"
                }}
              > Listes des ateliers</button>
            </a>
             
           
          </div>

        </div>
         </div>
         <div className="col-md-10">
         <div className="landing-copy col s6">
           <div id="bonjour" className="flex">
            <h4>
              <b>Bienvenue,</b> {cooker.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                vous etes connecte sur ton compte Admin{" "}
                <span style={{ fontFamily: "monospace" }}>Cuisinier</span> app 👏
              </p>
              <p>Bonjour!nous sommes un centre de formation de cuisine qui propose des ateliers à nos élèves à
              artir de 12 ans, mais aussi à des particuliers. <br/>
              Les cours proposés aux particuliers permettent de financer l’achat de matériels et de
              matières premières.</p>
            </h4>
            <button 
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "5rem"
              
              }}
              onClick={this.onLogoutClick}
              id="couleur"className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >Se deconnecter</button>
            </div>
            
         

         < Atelier />
          </div>
          <div className="landing-copy col s12">
          < Getatelier />
          </div>
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
