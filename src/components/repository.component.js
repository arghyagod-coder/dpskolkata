import React, { Component } from "react";


export default class Repo extends Component {
    render() {
        return (
            <form className="text-center">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Admission Number</label>
                    <input type="text" className="form-control" placeholder="Enter Admission Number" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br /><br />

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="https://dpskolkata.net/students/ForgotPassword.aspx">password?</a>
                </p>
            </form>
        );
    }
}