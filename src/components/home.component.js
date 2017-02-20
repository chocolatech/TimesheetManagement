import React from 'react';
import '../styles/sideNav.css';
import '../styles/home.css';

const Home = () => (
    <div className="row home-padding">
        <div className="col-md-2">
            <p className="rounded yellow-button">0</p>
            <label htmlFor="yellow-button" className="button-label yellow-label">Your teams</label>
        </div>
        <div className="col-md-2">
            <p className="rounded blue-button">0</p>
            <label htmlFor="blue-button" className="button-label blue-label">Your clouds</label>
        </div>
        <div className="col-md-2">
            <p className="rounded red-button">0</p>
            <label htmlFor="red-button" className="button-label red-label">Your timesheets</label>
        </div>
    </div >
)
export default Home;