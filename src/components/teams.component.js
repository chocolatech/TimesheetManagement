import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/sideNav.css';
import '../styles/teams.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

export default class Teams extends Component {

    constructor(props) {
        super(props);
        this.state = { teams: [] };
    }

    componentDidMount() {
        fetch("api/teams_mockups.json")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    teams: json
                });
            });
    };


    render() {
        var teams = [];
        for (let i = 0; i < this.state.teams.length; i++) {
            let team = this.state.teams[i];
            teams.push(<tr key={i}>
                <td>{team.id}</td>
                <td>{team.team}
                                    <span className=" delete-button pull-right">
                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                        <label htmlFor="delete-button" className="delete-label">DELETE</label>
                    </span>
                    <Link to="/edit_team">
                        <span className=" edit-button pull-right">
                            <i className="fa fa-pencil-square" aria-hidden="true"></i>
                            <label htmlFor="edit-button" className="edit-label">EDIT</label>
                        </span>
                    </Link>
                </td>
                <td>{teams.cloud}</td>
            </tr>);
        }

        return (
            <div>
                <h3 className="blue-font">Your teams</h3>
                <Link to='/add_team'>
                    <h3 className="pull-right add-team-button">
                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                        <label htmlFor="add-team-button">ADD TEAM</label>
                    </h3>
                </Link>
                <div>
                    <table className="table table-striped table-hover">
                        <thead className="table-header">
                            <tr>
                                <th>#</th>
                                <th>Team</th>
                                <th>Cloud</th>
                            </tr>
                        </thead>
                        <tbody>
                           {teams}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}