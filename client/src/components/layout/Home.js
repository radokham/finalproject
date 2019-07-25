import React from "react";
import { MDBContainer, MDBCol, MDBCard, MDBIcon,  } from "mdbreact";

import './Home.css';

const Home = () => {
  return (
  <section className="text-center my-5">
    <h2 className="h1-responsive font-weight-bold my-5">
    Application web Atelier Cuisine.
    </h2>
    <p className="grey-text w-responsive mx-auto mb-5">
   
    </p>

    <MDBContainer className="d-flex flex-wrap">
      <MDBCol md="12" className="mb-8">
        <MDBCard className="card-image">
          <div className="text-white text-center d-flex align-items-center py-5 px-4 rounded">
            <div>
              {/* <h6 className="purple-text">
                <MDBIcon icon="plane" />
                <strong> Travel</strong>
              </h6> */}
              <h3 className="py-3 font-weight-bold">
                <strong>Introduction</strong>
              </h3>
              <p className="pb-3">
              Nous sommes un centre de formation de cuisine qui propose des ateliers à nos élèves à
              partir de 12 ans, mais aussi à des particuliers.
              Les cours proposés aux particuliers permettent de financer l’achat de matériels et de
              matières premières.
              </p>
              {/* <MDBBtn color="secondary" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn> */}
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol md="6" className="md-0 mb-4">
        <MDBCard className="card-image1" 
              >
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="pink-text">
                <MDBIcon icon="chart-pie" />
                <strong> Objectif</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong> Objectif</strong>
              </h3>
              <p className="pb-3">
              une application web qui permette à des particuliers de s’inscrire aux ateliers
que nous proposons!
              </p>
              {/* <MDBBtn color="pink" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn> */}
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol md="6" className="md-0 mb-4">
        <MDBCard className="card-image3" 
              >
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="green-text">
                <MDBIcon icon="eye" />
                <strong> Cibles</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>Cibles</strong>
              </h3>
              <p className="pb-3">
              Nos cibles sont les jeunes actifs entre 25 - 35 ans. Des personnes qui veulent apprendre à
cuisiner afin de manger correctement.!
              </p>
              {/* <MDBBtn color="success" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn> */}
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  </section>
  );
}

export default Home;