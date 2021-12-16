import React, { Component } from "react";
import TableDatePicker from "./datepicker.component"

export default class Assignment extends Component {
    render() {
        return (
            <form className="text-center">
                <h4>Filter</h4><br />
                <div class="row">
                    <div class="col-md-6"><h6>Start Date</h6><TableDatePicker className="col-md-6"></TableDatePicker></div>
                    <div class="col-md-6"><h6>End Date</h6><TableDatePicker className="col-md-6"></TableDatePicker></div>
                </div>
                <br />
                <div>
                    <button className="btn-outline-primary pd-2 btn">Filter</button>
                </div>
            </form>

        );
    }
}