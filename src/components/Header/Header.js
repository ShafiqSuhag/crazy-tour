import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
	let history = useHistory();
	const [mobileMenuActive, setMobileMenuActive] = useState(false)
	const { currentUser, logOut, setCurrentUser, setError, setIsLoading } = useAuth()
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
				setIsLoading(false)
				setCurrentUser({})
				history.replace("/home")

			}).catch((error) => {
				setIsLoading(false)
				console.log('logout error', error)
				setError(error.message)

			});
	}
	// auth /


	const handleProfileInfo = () => {
		history.replace("/profile-info")
	}
	// const handleMyBookings = () => {
	// 	history.replace("/my-bookings")
	// }
	const handleNewTourPacakge = () => {
		history.replace("/add-new-tour")
	}
	const handleMyOrders = () => {
		history.replace("/my-orders")
	}
	const handleManageAllOrders = () => {
		history.replace("/all-orders")
	}
	return (
		// <!-- Navbar goes here -->
		<nav className="bg-white shadow-lg z-20 relative	">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							{/* <!-- Website Logo --> */}
							<Link to="/" className="flex items-center py-4 px-2">
								{/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2"/> */}
								<span className="font-semibold text-black text-lg">CRAZY TOUR</span>
							</Link>
						</div>
						{/* <!-- Primary Navbar items --> */}
						<div className="hidden md:flex items-center space-x-1 font-sans">
							<NavLink to="/home"><button className="top-menu-link">Home</button></NavLink>
							{/* <NavLink to="/home"><button className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</button></NavLink> */}

							{/* <NavLink to="/contact"><button className="top-menu-link">Contact</button></NavLink> */}
							<NavLink to="/add-new-tour"><button className="top-menu-link">New Tour</button></NavLink>
							<NavLink to="/tour-list"><button className="top-menu-link">Tour Management</button></NavLink>
							

						</div>
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<div className="hidden md:flex items-center space-x-3 ">

						{
							currentUser?.email ?
								<>
									<span className="text-black">{currentUser.displayName}</span>
									<div className="avatar online">
										<div className="rounded-full w-14 h-14">
											<img src={currentUser.photoURL} alt="" />
										</div>
									</div>
									{/* <button onClick={handleLogOut} className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log Out</button> */}
									<div className="py-2">

										<div className="dropdown inline-block relative">
											<button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
												<span className="mr-1">Account</span>
												<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
											</button>
											<ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-sm text-left">
												
												<li className=""><button onClick={handleMyOrders} className="text-left bg-gray-200 py-2 px-2 w-full block whitespace-no-wrap font-medium text-gray-500  hover:bg-green-500 hover:text-white transition duration-300">My Orders</button></li>
												<li className=""><button onClick={handleManageAllOrders} className="text-left bg-gray-200 py-2 px-2 w-full block whitespace-no-wrap font-medium text-gray-500  hover:bg-green-500 hover:text-white transition duration-300">Manage All Orders</button></li>
												<li className=""><button onClick={handleNewTourPacakge} className="text-left bg-gray-200 py-2 px-2 w-full block whitespace-no-wrap font-medium text-gray-500  hover:bg-green-500 hover:text-white transition duration-300">Add A New Tour Package</button></li>


												
												<li className=""><button onClick={handleProfileInfo} className="text-left bg-gray-200 py-2 px-2 w-full block whitespace-no-wrap font-medium text-gray-500  hover:bg-green-500 hover:text-white transition duration-300">Profile</button></li>
												<li className=""><button onClick={handleLogOut} className="text-left bg-gray-200 py-2 px-2 w-full block whitespace-no-wrap font-medium text-gray-500  hover:bg-green-500 hover:text-white transition duration-300">Log Out</button></li>
												
												
											</ul>
										</div>

									</div>
								</>
								:
								<>
									<NavLink to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</NavLink>
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
					<li className="active"><button onClick={handleLogOut} className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Add New Tour</button></li>
					
					<li><a href="/" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="/" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="/" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>

		</nav>
	);
};

export default Header;