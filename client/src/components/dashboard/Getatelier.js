import React, { Component } from 'react';
import axios from 'axios';
import './Getatelier.css';
import { NavLink} from "react-router-dom";


export default class Tableau extends Component {

    constructor(props) {
        super(props);
        this.state = { atelier: [] };

    }
    componentDidMount() {
        var tab = []
        axios.get('http://localhost:8080/api/ateliers')
            .then(response => {
                console.log('response.data: ',response.data)
                for( let i=0;i<response.data.length;i++){
                    console.log('test res', response.data[i]._id)
                    console.log('test local', localStorage.getItem('id'))
                    if(response.data[i].idUser==localStorage.getItem('id')){
                        tab.push(response.data[i])
                    }
                    
                }
                console.log('Atelier tableau :',tab)
                this.setState({ atelier: tab });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return <div>
            <div>
                    <h4>Votre(s)  atelier(s)  recent(s)</h4>
                <table className="table table-striped table-bordered" id="table">
                    <thead>
                        <tr>
                           
                            <th className="thtab">Titre</th>
                            <th className="thtab">Description</th>
                            <th className="thtab">Date</th>
                            <th className="thtab">horaire de debut</th>
                            <th className="thtab">Durée</th>
                            <th className="thtab">place disponible</th>
                            <th className="thtab">place reservé</th>
                            <th className="thtab">Prix</th>
                            <th className="thtab">Image</th>
                            <th className="thtab">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.atelier.length > 0) ? (this.state.atelier.map((obj) => {
                                var a = "http://localhost:8080/atelier/"+obj.image
                                return <tr key={obj._id}>
                                   
                                    <td>{obj.title}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.date}</td>
                                    <td>{obj.hour}</td>
                                    <td>{obj.duration}</td>
                                    <td>{obj.dispo}</td>
                                    <td>{obj.reserve}</td>
                                    <td>{obj.price}€</td>
                                    <td><img id="imagetab" width="100px" height="90px" src={a} alt={obj.image}/></td>
                                    <td><button type="submit" className="btn btn-success" id="couleur">Desactivier</button><br/>
                                    <button type="submit" className="btn btn-success" id="couleur"><NavLink to={'/modifier/'+obj._id}>Modifier</NavLink></button></td>
                                    
                                </tr>
                            })) : ('Aucun Atelier')
                        }
                    </tbody>
                </table>
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