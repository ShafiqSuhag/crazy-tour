import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useHistory, useLocation } from 'react-router';
import SpinnerLoader from '../Animation/SpinnerLoader/SpinnerLoader';

const ServiceCard = (props) => {
    const { _id, title, duration, description, img, destination, price, rating } = props.tour;
    console.log("props- ", props);
    const browserLocation = useLocation()
    const history = useHistory()

    const handleBookTour = (id) => {
        history.push("/book-tour/" + id)
    }
    const ratingConfig = {
        size: 30,
        value: rating,
        edit: false
    };




    return (
        <div className="wrapper  antialiased text-gray-900 mb-10">
            <div>
                {/* theme image  */}
                <div className="flex pb-5 relative h-48">
                {/* <img src={img} alt="course item" className="rounded  top-0 z-20" /> */}
                    <img src={img} alt=" theme preview " className="w-full absulate  top-0 z-20 object-cover object-center rounded-lg shadow-md h-60" />
                    {/* <Preloader className="h-48 bg-white absolute left-0 top-0 z-10"></Preloader> */}
                    <div className="w-full bg-white absolute top-0 left-0 z-10">
                        <SpinnerLoader></SpinnerLoader>
                    </div>

                </div>
                
                <div className=" px-4 -mt-10  relative z-30">
                    <div className="bg-white p-6 rounded-lg shadow-lg">

                        <h4 title="SWAY - MULTI" className="mt-1 text-lg font-semibold uppercase leading-tight truncate"> {title} </h4>
                        <div className="flex  justify-between items-center text-sm mt-3">
                            <div>
                                <i className="fas fa-plane-departure"></i>
                                <span> {destination} </span>
                            </div>
                            <div>
                                <i className="far fa-hourglass"></i>
                                <span className="text-gray-400"> <span className="text-gray-500"> {duration} Days </span> 	</span>
                            </div>
                        </div>
                        <div className="my-5">
                            {description.substring(0, 120)}...
                        </div>

                        <div className=" flex justify-center items-center text-lg font-semibold my-5">
                            <div className="text-yellow-400 flex items-center">

                                <ReactStars {...ratingConfig} />
                                <span className="ml-1">  {rating} </span>
                            </div>
                            {/* <div> 200 SALES </div> */}
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="text-2xl font-bold">${price}</div>
                            <div>
                                <button
                                    onClick={() => handleBookTour(_id)}
                                    data-modal-toggle="example"
                                    data-modal-action="open"
                                    className=" text-sm bg-indigo-600 font-semibold text-white px-2 py-1 m-w-32 rounded hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 mr-2"
                                >

                                    BOOK TOUR
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;