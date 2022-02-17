<template>
  <footer>
    <div class="container">
      <div class="footer-nav">
        <a href="#">
          <div class="logo vertical">
            <img src="../assets/logo1.svg" alt="Logo" />
          </div>
        </a>

        <div class="footer-nav-right">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy</a>
          <a href="#">Notice at Collection</a>
          <a href="#">CA Privacy Hub</a>
          <a href="#">Contact Us</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
      <div class="copyright">
        Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
        Opportunity Lender.
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  height: 100%;
  background: #333333;
}
footer .logo img {
  width: 60px;
  height: 35px;
}
.footer-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
}
.footer-nav a:hover img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.footer-nav-right a {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 1rem;
}
.footer-nav-right a:hover {
  color: #0076c0;
}
@media screen and (max-width: 840px) {
  .footer-nav {
    flex-direction: column;
  }
  .footer-nav-right {
    display: flex;
    flex-direction: column;
  }
  .copyright {
    text-align: center;
  }
}
footer .copyright {
  color: white;
  padding: 2rem 0;
}
</style>
