import React, { Component } from "react";
import TableDatePicker from "./datepicker.component";

export default class Schedule extends Component {
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
                <br /><br />
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Teacher</th>
                            <th scope="col">Date &amp; Time</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Meeting Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Erik Dubois</th>
                            <td>30/03/2021</td>
                            <td>Become an Arch Linux Chad</td>
                            <th><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Meeting Link</a></th>
                        </tr>
                        <tr>
                            <th scope="row">Derek Taylor</th>
                            <td>28/06/2021</td>
                            <td>Add Bling to Terminal</td>
                            <th><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Meeting Link</a></th>
                        </tr>
                        <tr>
                            <th scope="row">Linus Torvalds</th>
                            <td>02/10/2021</td>
                            <td>Managing Servers</td>
                            <th><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Meeting Link</a></th>
                        </tr>
                        <tr>
                            <th scope="row">Greg Kroah Hartman</th>
                            <td>12/12/2021</td>
                            <td>Writing Kernel Modules</td>
                            <th><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Meeting Link</a></th>
                        </tr>
                    </tbody>
                </table>

            </form>

        );
    }
}