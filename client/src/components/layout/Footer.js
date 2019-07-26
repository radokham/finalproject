import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="#f3671f" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            {/* <h5 className="title">Footer Content</h5> */}
            {/* <p style={{fontFamily: "Roboto Slab, serif"}}>
           " Nous sommes un centre de formation de cuisine <br/> 
            qui propose des ateliers à nos élèves à <br/>
partir de 12 ans, mais aussi à des particuliers".
            </p> */}
          </MDBCol>
          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{fontFamily: "Roboto Slab, serif"}}>
          &copy; {2019} Copyright By Rado
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;