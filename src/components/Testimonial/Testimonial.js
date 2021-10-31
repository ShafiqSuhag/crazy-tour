import React from 'react';

const Testimonial = (props) => {
    const {name, img, destination, msg} =props
    return (

        <div className="card shadow-lg compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full w-14 h-14 shadow">
                            <img src={img} alt="testimonial" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title"> {name}</h2>
                    <p className="text-base-content text-opacity-40 py-3">{destination}</p>
                    <p>
                       {msg}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;