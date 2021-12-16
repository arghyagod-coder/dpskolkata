import React, { Component } from "react";
import { GearFill } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <form className="text-center">
                <h3>Arghya Sarkar</h3>
                <Link to={"/dpskolkata/preferences"} class="cdns"><GearFill/>&nbsp;  Account Settings</Link>
                <br />
                <Link href="https://dpskolkata.net/students/ChangePassword.aspx" class="cdns">Change Password</Link>
                <br /><br />

                <div className="row text-center">
                    <div className="col-md-6">
                        
                <div className="row">
                    <div className="col px-md-1">
                        <p><strong>Fliplearn Details:</strong> <br />User ID: IMPIRISLURAS.232 <br /><br />Password: 123456</p>
                    </div>
                </div>
                    </div>
                    <div className="my-2 col-md-6">
                        
                <div className="row">
                    <div className="my-2 col-md-4">
                        <button className="btn-lg btn-primary">Fees</button>
                    </div>
                    <div className="my-2 col-md-4">
                        <button className="btn-lg btn-primary">Assignment</button>
                    </div>
                    <div className="my-2 col-md-4">
                        <button className="btn-lg btn-primary">Notice</button>
                    </div>
                    <div className="my-2 col-md-4">
                        <button className="btn-lg btn-primary">Schedule</button>
                    </div>
                    <div className="my-2 col-md-4">
                        <button className="btn-lg btn-primary">Repository</button>
                    </div>
                    <div className="my-2 col-md-4">
                        <button className="btn-lg btn-primary">Library</button>
                    </div>
                    <div className="my-2 col-md-4">
                        <button className="btn-lg btn-primary">Report Card</button>
                    </div>
                    <div className="my-2 col-md-4">
                        <button className="btn-lg btn-primary">Absent Report</button>
                    </div>
                    <div className="my-2 col-md-4">
                        <button className="btn-lg btn-primary">Misc Fees</button>
                    </div>
                </div>
                    </div>
                </div>
            </form>
        );
    }
}