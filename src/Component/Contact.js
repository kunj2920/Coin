import React from "react";

function Contact() {
  return (
    <div class="Contact">
    
    <div class="content">
<div class="container">
<div class="row align-items-stretch no-gutters contact-wrap">
<div class="col-md-12">
<div class="form h-100">

<h3>Contact Us</h3>
<form class="mb-5" method="post" id="contactForm" name="contactForm">
<div class="row">
<div class="col-md-6 form-group mb-3">
<label for="" class="col-form-label">Name *</label>
<input type="text" class="form-control" name="name" id="name" placeholder="Your name"/>
</div>
<div class="col-md-6 form-group mb-3">
<label for="" class="col-form-label">Email *</label>
<input type="text" class="form-control" name="email" id="email" placeholder="Your email"/>
</div>
</div>
<div class="row">
<div class="col-md-12 form-group mb-3">
<label for="message" class="col-form-label">Message *</label>
<textarea class="form-control" name="message" id="message" cols="30" rows="4" placeholder="Write your message"></textarea>
</div>
</div>
<div class="row">
<div class="col-md-12 form-group">
<input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4"/>
<span class="submitting"></span>
</div>
</div>
</form>
<div id="form-message-warning mt-4"></div>
<div id="form-message-success">
Your message was sent, thank you!
</div>
</div>
</div>
</div>
</div>
</div>

<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script>
    var $j = jQuery.noConflict();
    $j(document).ready(function () {
        $j('#frmSubmit').submit(function (e) {
            e.preventDefault();
            
            $j('#msg').html('Please wait...');
            $j('#btnSubmit').attr('disabled', true);
            
            $j.ajax({
                url: "https://script.google.com/macros/s/AKfycbyyOAv4yms1Yfo8y_hPYIbUtkwVbn-h8SgUgRHj_4gYsKzsksR2RXdTryYpQrUenVgp/exec",
                type: 'post',
                data: $j('#frmSubmit').serialize(),
                success: function(result) {
                    $j('#frmSubmit')[0].reset();
                    $j('#msg').html('Thank You');
                    $j('#btnSubmit').attr('disabled', false);
                }
            });
        })
    })
</script>


    </div>
    
  );
}

export default Contact;
