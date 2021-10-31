import React from 'react';

const Footer = () => {
    return (
        <footer className="p-10 footer bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Tour Packages</a>
                <a href="/" className="link link-hover">Tour Plans</a>
                <a href="/" className="link link-hover">Hotel Reservation</a>
                <a href="/" className="link link-hover">Air Ticketing</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;