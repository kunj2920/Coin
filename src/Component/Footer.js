import React from "react";
import "../css/Footer.css";


function Footer() {
  return (
      <div class="container my-5">

        <footer>
          <div class="container p-4" >
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-4">
                <h5 class="mb-3" >Coin</h5>
                <p>
                    <a href="#!" class="text-reset">Bitcoin</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Ethereum</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">XRP</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Tether</a>
                  </p>

              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="mb-3" >links</h5>
                <ul class="list-unstyled mb-0">
                  <li class="mb-1">
                    <a href="#!">www.facebook.com</a>
                  </li>
                  <li class="mb-1">
                    <a href="#!" >www.instagram.com</a>
                  </li>
                  <li class="mb-1">
                    <a href="#!" >www.Twitter.com</a>
                  </li>
                  <li>
                    <a href="#!" >www.cryptocurrency.com</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="mb-1" >Contact</h5>
                <p>
                Email : <a href="#!">kunjpatel@gmail.com</a><br/>
                MO : +91 9173549944
                </p>
                
              </div>
            </div>
          </div>
          <div class="text-center p-3" >
            © 2023 All right reserved, by K.P
            
          </div>

        </footer>

      </div>

      );
}

      export default Footer;
