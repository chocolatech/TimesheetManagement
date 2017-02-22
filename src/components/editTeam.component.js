import React, { Component } from 'react';
import '../styles/sideNav.css';
import '../styles/teams.css';
export default class EditTeam extends Component {
    render() {
        return (
            <form className="form-horizontal">
                <fieldset>
                    <legend className="blue-font">Edit team</legend>
                    <div className="form-group">
                        <label htmlFor="teamName" className="col-md-2 control-label">Name of a team</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="teamName" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="select" className="col-md-2 control-label">Members</label>
                        <div className="col-md-8">
                            <select className="form-control" id="select">
                                <option>User1</option>
                                <option>User2</option>
                                <option>User3</option>
                                <option>User4</option>
                                <option>User5</option>
                            </select>
                        </div>
                        <div className="col-md-1">
                            <button type="submit" className="btn btn-primary pull-right button-add">Add</button>
                        </div>
                    </div>

                    <br />
                    <div className="form-group">
                        <label htmlFor="select" className="col-md-2 control-label">Cloud (optional)</label>
                        <div className="col-md-10">
                            <select className="form-control">
                                <option>Cloud's name</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-10 col-md-offset-2">
                            <button type="submit" className="btn btn-success button-space">Accept</button>
                            <button type="reset" className="btn btn-primary button-space">Back</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}