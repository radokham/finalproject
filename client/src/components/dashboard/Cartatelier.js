import React, { Component } from 'react';
import axios from 'axios';
import { NavLink} from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact';
import"./Cartatelier.css";



export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = { atelier: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/ateliers')
            .then(response => {
                console.log('Atelier tableau :', response.data)
                this.setState({ atelier: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return  <div className="container-fluid">
             <div className="row">
           
           
                    
                    
                    {/* <MDBCardTitle>
                        <MDBCol>
                           
                            <MDBCardTitle>Titre</MDBCardTitle>
                            <MDBCardText>Description</MDBCardText>
                            <MDBCardTitle>Date</MDBCardTitle>
                            <MDBCardTitle>horaire de debut</MDBCardTitle>
                            <MDBCardTitle>Durée</MDBCardTitle>
                            <MDBCardTitle>place disponible</MDBCardTitle>
                            <MDBCardTitle>place reservé</MDBCardTitle>
                            <MDBCardTitle>Prix</MDBCardTitle>
                            <MDBCardTitle>Image</MDBCardTitle>
                            <MDBCardTitle>Inscription</MDBCardTitle>
                        </MDBCol>
                    </MDBCardTitle> */}
                    
                        {
                            (this.state.atelier.length > 0) ? (this.state.atelier.map((obj) => {
                                var a = "http://localhost:8080/atelier/"+obj.image
                                return <MDBCol md-4 key={obj._id}>
                                <MDBCard style={{ width: "32rem", fontWeight:"bold" }}>
                                <MDBCardBody>
                                   
                                    <MDBCardTitle style={{fontWeight:"bolder" ,textAlign:"center", marginTop: "6px",fontFamily: "Roboto Slab, serif"}}>Titre: {obj.title}</MDBCardTitle>
                                    <MDBCardTitle> <span className="bold">Description:</span> {obj.description}</MDBCardTitle>
                                    <MDBCardTitle> <span className="bold">Date:</span> {obj.date}</MDBCardTitle>
                                    <MDBCardTitle><span className="bold">Horaire de début:</span> {obj.hour}</MDBCardTitle>
                                    <MDBCardTitle><span className="bold">Durée:</span> {obj.duration}</MDBCardTitle>
                                    <MDBCardTitle><span className="bold">Place disponible:</span>{ obj.dispo}</MDBCardTitle>
                                    <MDBCardTitle><span className="bold">Place reservé:</span> {obj.reserve}</MDBCardTitle>
                                    <MDBCardTitle><span className="bold">Prix:</span> {obj.price} €</MDBCardTitle>
                                    <MDBCardTitle><MDBCardImage id="img" className="img-fluid"  src={a} alt={obj.image}/></MDBCardTitle>
                                    <MDBCardTitle><MDBBtn id="couleur" type="submit" className="btn btn-success"><NavLink to="/inscrire">inscrire</NavLink></MDBBtn><br/>
                               </MDBCardTitle>
                               </MDBCardBody>
                            </MDBCard>
                                </MDBCol>
                            })) : ('Aucun Atelier')
                        }
                     
                      
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}