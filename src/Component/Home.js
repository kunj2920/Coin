import React from "react";
import m from "../asset/m.png";
import e from "../asset/e.jpeg";
import i from "../asset/i.jpeg";
import h from "../asset/h.jpg";
import about2 from "../asset/about2.png";
import top_img from "../asset/top_img.jpg";
import wa1 from "../asset/wa1.jpg";
import wa2 from "../asset/wa2.jpg";
import wa3 from "../asset/wa3.jpg";
import wa4 from "../asset/wa4.jpg";
import Carousel from 'react-bootstrap/Carousel';


import "../css/Home1.css";


function Home() {
  return (
    <>
   
   <div>
        <section className="slider container mb-3">
          <Carousel>
            <Carousel.Item className='slide'>
              <img
                className="d-block w-100"
                src={i}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item className='slide'>
              <img
                className="d-block w-100"
                src={top_img}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className='slide'>
              <img
                className="d-block w-100"
                src={h}
                alt="Third slide"
              />
              
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    
    <div class="wallet">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div id="wa_hover" class="wallet_box text_align_center">
                        <i><img src={wa1} alt="#"/></i>
                        <h3>ONLINE WALLET</h3>
                        <p>It is a long established fact that a reader will be distracted by </p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div id="wa_hover" class="wallet_box text_align_center">
                        <i><img src={wa2} alt="#"/></i>
                        <h3>SEND COINS</h3>
                        <p>It is a long established fact that a reader will be distracted by </p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div id="wa_hover" class="wallet_box text_align_center">
                        <i><img src={wa3} alt="#"/></i>
                        <h3>MOBILE APP </h3>
                        <p>It is a long established fact that a reader will be distracted by </p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div id="wa_hover" class="wallet_box text_align_center">
                        <i><img src={wa4} alt="#"/></i>
                        <h3>COIN MINING</h3>
                        <p>It is a long established fact that a reader will be distracted by </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


<div id="about" class="about">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="about_border">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="titlepage text_align_left">
                                    <h2>About Us</h2>
                                </div>
                                <div class="about_text">
                                    <p>It is a long established fact that a reader will be distracted bIt is a long established fact that a reader will be distracted by y It is a long established fact that a reader will be distracted by It is a long established fact that a reader will be distracted by </p>
                                    <a class="read_more" href=" ">Read More</a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="about_img">
                                    <figure><img class="img_responsive" src={about2} alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
          

     

    </>
  );
}

export default Home;
