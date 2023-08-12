import React from "react";
import k from "../asset/k.jpeg";
import a1 from "../asset/a1.jpg";
import a2 from "../asset/a2.jpg";
import a3 from "../asset/a3.jpg";


function Coin() {

   
  return (
  <>
  <section id="blogs" class="text-center ptb_100">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="heading-part ">
              <h2 class="main_title mb_20">Coin Info</h2>
              <p class="mb_50">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
          </div>
        </div>
        
        <div id="blog-post" class="blog owl-carousel ">
          <div class="blog-item item text-left">
            <div class="box-holder">
              <div class="post-format">
                <div class="thumb post-img"> <a href="images/blog/blog01.jpg" title="Beautiful Lady" data-source="images/blog/blog01.jpg"> <img src={a1} width = "50%" alt="Bitcoin"/></a> </div>
                <div class="post-type"><i class="fa fa-music" aria-hidden="true"></i></div>
              </div>
              <div class="post-info mt_20 ">
                <h2 class="mb_10"> <a href="#">There are many variations of passages lable</a> </h2>
                <p>Bitcoin is the world’s first successful decentralized cryptocurrency and payment system, launched in 2009 by a mysterious creator known only as Satoshi Nakamoto. The word “cryptocurrency” refers to a group of digital assets where transactions are secured and verified using cryptography – a scientific practice of encoding and decoding data. Those transactions are often stored on computers distributed all over the world via a distributed ledger technology called blockchain</p>
                <div class="details mt_20">
                  <div class="date pull-left"> <i class="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                  <div class="more pull-right"> <a href="single-blog.html">Read more <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-item item text-left">
            <div class="box-holder">
              <div class="post-format">
                <div class="thumb post-img"><a href="images/blog/blog03.jpg" title="Beautiful Lady" data-source="images/blog/blog03.jpg"> <img src={a2} width = "50%" alt="Bitcoin"/></a></div>
                <div class="post-type"><i class="fa fa-music" aria-hidden="true"></i></div>
              </div>
              <div class="post-info mt_20 ">
                <h2 class="mb_10"> <a href="#">There are many variations of passages lable</a> </h2>
                <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                <div class="details mt_20">
                  <div class="date pull-left"> <i class="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                  <div class="more pull-right"> <a href="single-blog.html">Read more <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-item item text-left">
            <div class="box-holder">
              <div class="post-format">
                <div class="thumb post-img"><a href="images/blog/blog04.jpg" title="Beautiful Lady" data-source="images/blog/blog04.jpg"> <img src={a3} width = "50%" alt="Bitcoin"/></a></div>
                <div class="post-type"><i class="fa fa-video-camera" aria-hidden="true"></i></div>
              </div>
              <div class="post-info mt_20 ">
                <h2 class="mb_10"> <a href="#">There are many variations of passages lable</a> </h2>
                <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                <div class="details mt_20">
                  <div class="date pull-left"> <i class="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                  <div class="more pull-right"> <a href="single-blog.html">Read more <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </section>
      </>
   
  );
}

export default Coin;
