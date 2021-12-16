import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="https://seeklogo.com/images/D/delhi-public-school-logo-E8BDE7B79B-seeklogo.com.png" alt="" width="30" height="39"/>
    </a>
    <Link class="navbar-brand" to="">DPS Ruby Park Kolkata</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/dpskolkata/sign-in"}>Sign In</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/dpskolkata/home"}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/dpskolkata/fees"}>Fees</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/dpskolkata/assignment"}>Assignment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/dpskolkata/schedule"}>Schedule</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/dpskolkata/repos"}>Repository</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/dpskolkata/notice"}>Notice</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/dpskolkata/library"}>Library</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}
