import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import Atelier from "./Atelier";
import Getatelier from "./Getatelier";
import './Adminpage.css'

export default class Adminpage extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <div>
                        <br/>
                        <br/>
                        <h1>Page d'administration</h1>
                        <ul className="sidebar">
                        <i class="fas fa-user-circle" style={{width:"100%", height:"20px", marginLeft:"68px"}}></i>
                            <li><NavLink to="/getatelier"> <i class="fas fa-cookie-bite">&nbsp;&nbsp;</i>Liste des ateliers</NavLink> </li>
                            <li><NavLink  to="/atelier"> <i class="fas fa-store mdb-gallery-view-icon">&nbsp;&nbsp;</i>Ateliers</NavLink></li>
                        </ul>
                        <div className="dashboard">
                            <Route path="/atelier" component={Atelier} />
                            <Route  exact path="/getatelier" component={Getatelier} />
                        </div>
                    </div>
                </BrowserRouter>



            </div>
        )
    }
}