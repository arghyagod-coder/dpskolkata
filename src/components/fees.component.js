import React, { Component } from "react";


export default class Fees extends Component {
    render() {
        return (
            <form className="text-center">
                <h3>Fees</h3>

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Period</th>
                            <th scope="col">Paid On</th>
                            <th scope="col">Transaction ID</th>
                            <th scope="col">Reprint</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">April-June</th>
                            <td>30/03/2021</td>
                            <td>Alpha Delta Gamma BETA</td>
                            <th scope="col"><button className="btn btn-sm btn-outline-dark">Reprint</button></th>
                        </tr>
                        <tr>
                            <th scope="row">July-Sep</th>
                            <td>28/06/2021</td>
                            <td>Hammering my own Toe</td>
                            <th scope="col"><button className="btn btn-sm btn-outline-dark">Reprint</button></th>
                        </tr>
                        <tr>
                            <th scope="row">Oct-Dec</th>
                            <td>02/10/2021</td>
                            <td>Cuteness Overload</td>
                            <th scope="col"><button className="btn btn-sm btn-outline-dark">Reprint</button></th>
                        </tr>
                        <tr>
                            <th scope="row">Jan-Mar</th>
                            <td>12/12/2021</td>
                            <td>Random Ooga Booga</td>
                            <th scope="col"><button className="btn btn-sm btn-outline-dark">Reprint</button></th>
                        </tr>
                    </tbody>
                </table>

            </form>
        );
    }
}