import React from 'react';
import { useHistory, useLocation } from 'react-router';

const ServiceCard = () => {

    const location = useLocation()
    const history = useHistory()

    const handleBookTour = () => {
        history.push("/book-tour")
    }

    return (
        <div className="wrapper  antialiased text-gray-900 mb-10">
            <div>
                {/* theme image  */}
                <img src="https://themeforest.img.customer.envatousercontent.com/files/338759351/01_sway.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=0343a0b78fe0332bb3a575451ebcf81e" alt=" theme preview " className="w-full object-cover object-center rounded-lg shadow-md h-60" />
                <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">

                        <h4 title="SWAY - MULTI" className="mt-1 text-lg font-semibold uppercase leading-tight truncate"> SWAY - MULTI </h4>
                        <div className="flex  justify-between items-center text-sm mt-1">
                            <span>By : Sohag </span>
                            <span className="text-gray-400">Last Update : <span className="text-gray-500"> 1010201 </span> 	</span>
                        </div>

                        <div className=" flex justify-between items-center text-lg font-semibold my-5">
                            <div className="text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span className="ml-1">  4.5</span>
                            </div>
                            <div> 200 SALES </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="text-2xl font-bold">$200</div>
                            <div>
                                <button
                                    onClick={handleBookTour}
                                    data-modal-toggle="example"
                                    data-modal-action="open"
                                    className=" text-sm bg-indigo-600 font-semibold text-white px-2 py-1 m-w-32 rounded hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 mr-2"
                                >

                                       BOOK TOUR
                                </button>
                                <a href="/" target="_blank"
                                    data-modal-toggle="example"
                                    data-modal-action="open"
                                    className=" text-sm text-purple-600 border hover:text-white border-purple-600 px-2 py-1 m-w-32 rounded hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 " rel="noreferrer"
                                >

                                    <i className="far fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;