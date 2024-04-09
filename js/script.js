document.getElementById('navid').innerHTML=`
<header>
      <img
        src="images/101704507-beauty-nature-logo-icon-design.jpg"
        alt="Header Image"
        height="35px"
      />
      <h1>Mind Fulness</h1>
      <i class="fa-brands fa-instagram headerim head1"></i>
      <i class="fa-brands fa-facebook headerim head2"></i>
      <i class="fa-brands fa-square-x-twitter headerim head3"></i>
      <button class="btn btn-success text-light button1" id="bt t1">
        <a class="text-decoration-none text-light" href="signup.html" stiye="color:white"> Signup</a>
      </button>
      <button class="btn btn-danger text-light button2" id="bt" >
      <a class="text-decoration-none text-light" href="login.html" stiye="color:white"> Login</a> 
      </button>
      
    </header>

<nav class="navbar navbar-expand-lg navbar-light">
<div class="container-fluid">
  <img src="images/logo.png" class="ms-lg-2" height="80px" alt="" />
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link  fw-bold" text-danger  aria-current="page" href="index.html"
          >Home</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link   fw-bold" href="aboutus.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  fw-bold" href="services.html">Services</a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle fw-bold"
          href="poses.html"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          poses
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="poses.html">poses by type</a></li>
          <li><a class="dropdown-item" href="yogaclasses.html">Yoga Classes</a></li>
          <li>
            <a class="dropdown-item" href="yoga.html">poses by anatomy</a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a
          class="nav-link fw-bold"
          href="meditation.html"
          tabindex="-1"
          aria-disabled="true"
          >Meditation</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link fw-bold"
          href="contact.html"
          tabindex="-1"
          aria-disabled="true"
          >Contact</a
        >
      </li>
    </ul>
    <form class="d-flex">
    </form>
  </div>
</div>
</nav>
`

document.getElementById('foot').innerHTML=`
<section class="footer">
  <div class="footer-row">
    <div class="footer-col">
    <a href="yogaclasses.html"><h4>Yoga Classes</h4>
      <ul class="links">
        <li><a href="Boat.html">Boat Poses</a></li>
        <li><a href="Bridge.html">Bridge Poses</a></li>
        <li><a href="Bridge.html">Bridge Poses</a></li>
        <li><a href="Bird Of Paradise.html">Bird Of Paradise POses</a></li>
        <li><a href="Crescent lunge.html">Crescent Lunge Poses</a></li>
      </ul>
    </div>
    <div class="footer-col">
     <a href="meditation.html"><h4>Meditations</h4>
      <ul class="links">
        <li><a href="anchored.html">Anchored</a></li>
        <li><a href="Access Peace.html">Access Peace</a></li>
        <li><a href="Attitude of Sleep.html">Attitude of Sleep</a></li>
        <li><a href="Autumnal Equinox Meditation.html">Themes</a></li>
        <li><a href="Connect With the Goodness Within.html">Connect With the<br> Goodness Within</a></li>
        <li><a href="Calling Your True Self Home.html">Calling Your True<br> Self Home</a></li>
      </ul>
    </div>
    <div class="footer-col">
    <a href="aboutus.html"><h4>Aboutus</h4>

      <ul class="links">
        <li><a href="poses.html">Poses</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="services.html">services</a></li>
        <li><a href="food.html">Eat Healthy Food</a></li>
     
      </ul>
    </div>
    <div class="footer-col">
    <a href="signup.html"><h4>Signup</h4></a>
      <p>
        Subscribe to our newsletter for a weekly dose
        of news, updates, helpful tips, and
        exclusive offers.
      </p>
      <form action="#">
        <input type="text" placeholder="Your email" required>
        <button type="submit">SUBSCRIBE</button>
      </form>
      <div class="icons">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
      </div>
    </div>
  </div>
</section>
`

















{/* <nav class="navbar navbar-expand-lg navbar-light">
<div class="container-fluid">
  <img src="logo.png" class="ms-lg-2" height="80px" alt="" />
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active fw-bold" aria-current="page" href="#"
          >Home</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link fw-bold" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fw-bold" href="#">Poses</a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle fw-bold"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Yoga
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Health Yoga</a></li>
          <li><a class="dropdown-item" href="#">Vinyasa</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#">Ashtanga</a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a
          class="nav-link fw-bold"
          href="#"
          tabindex="-1"
          aria-disabled="true"
          >Meditation</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link fw-bold"
          href="#"
          tabindex="-1"
          aria-disabled="true"
          >Contact</a
        >
      </li>
    </ul>
    <form class="d-flex">
    </form>
  </div>
</div>
</nav> */}


// https://source.unsplash.com/550x400/?football