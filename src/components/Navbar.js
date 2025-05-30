import React from 'react'

function Navbar(props) {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">{props.namet}</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder={props.placeholder} aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

Navbar.defaultProps={
  namet:"krish",
  placeholder:"dhuskya",
};


export default Navbar
