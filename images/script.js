document.getElementById('navid').innerHTML=`
<header>
      <img
        src="101704507-beauty-nature-logo-icon-design.jpg"
        alt="Header Image"
        height="35px"
      />
      <h1>Mind Fulness</h1>
      <i class="fa-brands fa-instagram headerim head1"></i>
      <i class="fa-brands fa-facebook headerim head2"></i>
      <i class="fa-brands fa-square-x-twitter headerim head3"></i>
      <button class="btn btn-success text-light button1" id="bt t1">
        signup
      </button>
      <button class="btn btn-danger text-light button2" id="bt ">login</button>
    </header>

<nav class="navbar navbar-expand-lg navbar-light">
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
        <a class="nav-link  fw-bold" text-danger  aria-current="page" href="index.html"
          >Home</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link   fw-bold" href="aboutus.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  fw-bold" href="#">services</a>
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
          <li><a class="dropdown-item" href="#">poses by benefit</a></li>
          <li><a class="dropdown-item" href="#">poses  general</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#">poses by anatomy</a>
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
</nav>
`

document.getElementById('foot').innerHTML=`
<section class="footer">
  <div class="footer-row">
    <div class="footer-col">
      <h4>Info</h4>
      <ul class="links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Compressions</a></li>
        <li><a href="#">Customers</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Collection</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Explore</h4>
      <ul class="links">
        <li><a href="#">Free Designs</a></li>
        <li><a href="#">Latest Designs</a></li>
        <li><a href="#">Themes</a></li>
        <li><a href="#">Popular Designs</a></li>
        <li><a href="#">Art Skills</a></li>
        <li><a href="#">New Uploads</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Legal</h4>
      <ul class="links">
        <li><a href="#">Customer Agreement</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">GDPR</a></li>
        <li><a href="#">Security</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Media Kit</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Newsletter</h4>
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