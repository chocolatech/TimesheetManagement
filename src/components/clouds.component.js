import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/sideNav.css';

export default class Clouds extends Component {
    constructor(props) {
        super(props);
        this.state = { clouds: [] };
    }


    componentDidMount() {
        fetch("api/clouds_mockups.json")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    clouds: json
                });
                console.log(this.state);
            });

    };

    render() {
        var lol = [];
        for (let i = 0; i < this.state.clouds.length; i++) {
            //lol.push(<span key={i}>{this.state.clouds[i].manager}</span>);
            lol.push(<tr key={i}>
                <td>{this.state.clouds[i].cloud}</td>
                <td>{this.state.clouds[i].id}</td>
                <td>{this.state.clouds[i].manager}</td>
                <td>{this.state.clouds[i].support}</td>
            </tr>
            );
        }
        return (
            <div>
                <h3 className="blue-font">Your clouds</h3>
                <Link to='/'>
                    <h3 className="pull-right import-button">
                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                        <label htmlFor="import-button">IMPORT FROM XLS</label>
                    </h3>
                </Link>
                <div>
                    <table className="table table-striped table-hover">
                        <thead className="table-header">
                            <tr>
                                <th>Cloud</th>
                                <th>Order</th>
                                <th>Manager</th>
                                <th>Resource Support</th>
                            </tr>
                        </thead>
                        <tbody>
                           {lol}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}