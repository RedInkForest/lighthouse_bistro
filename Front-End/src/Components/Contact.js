import React from "react";
import './Contact.css';

function Contact() {
    return (
        <> 
        <p className="social">Check out our social media</p>
        <div class='contact'>
            <a href="https://www.instagram.com/" target="blank"><i class="fa-brands fa-instagram fa-2xl icon"></i></a>
            <a href="https://www.tiktok.com/explore" target="blank"><i class="fa-brands fa-tiktok fa-2xl icon"></i></a>
            <a href="https://twitter.com/" target="blank"><i class="fa-brands fa-twitter fa-2xl icon"></i></a>
            <a href="https://www.facebook.com/" target="blank"><i class="fa-brands fa-facebook fa-2xl icon"></i></a>
        </div>
        </>
    );
}

export default Contact