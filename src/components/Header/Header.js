import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
	let history = useHistory();
	const [mobileMenuActive, setMobileMenuActive] = useState(false)
	const { currentUser, logOut, setCurrentUser, setError } = useAuth()
	const handleMobileMenuToogle = () => {
		if (mobileMenuActive) {
			setMobileMenuActive(false)
		}
		else {
			setMobileMenuActive(true)
		}
	};


	// auth 
	const handleLogOut = () => {
		logOut()
			.then(() => {
				console.log('logout successfull')

				setCurrentUser({})
				history.replace("/home")

			}).catch((error) => {
				console.log('logout error', error)
				setError(error.message)

			});
	}
	// auth /

	return (
		// <!-- Navbar goes here -->
		<nav className=" shadow-lg z-20 relative	">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							{/* <!-- Website Logo --> */}
							<a href="/" className="flex items-center py-4 px-2">
								{/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2"/> */}
								<span className="font-semibold text-white text-lg">CRAZY TOUR</span>
							</a>
						</div>
						{/* <!-- Primary Navbar items --> */}
						<div className="hidden md:flex items-center space-x-1 font-sans">
							<NavLink to="/home"><button className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</button></NavLink>

							<NavLink to="/contact"><button className="top-menu-link">Contact</button></NavLink>
							<a href="/home" className="top-menu-link">Services</a>
							<a href="/home" className="top-menu-link">About</a>

						</div>
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<div className="hidden md:flex items-center space-x-3 ">

						{
							currentUser?.email ?
								<button onClick={handleLogOut} className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log Out</button> :
								<>
									<NavLink to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</NavLink>
									<a href="/home" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
								</>


						}
					</div>
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={handleMobileMenuToogle}>
							<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
								x-show="!showMenu"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div className={`mobile-menu ${mobileMenuActive ? " " : "hidden"}`}>
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>

		</nav>
	);
};

export default Header;