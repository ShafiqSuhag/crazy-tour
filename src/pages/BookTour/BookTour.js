import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useServerConfig from '../../hooks/useServerConfig';



const BookTour = () => {
    const serverUrl = useServerConfig()
    const [tourDetails, setTourDetails] = useState({})
    // const { _id, title, duration, description, img, destination, price, rating } = props.tour;
    let { id } = useParams();

    const { currentUser } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        //  my-orders
       
        data["userPhotoUrl"] = currentUser.photoURL
        data["userName"] = currentUser.displayName
        data["userId"] = currentUser.uid
        data["tourTitle"] = tourDetails.title
        data["tourPrice"] = tourDetails.price
        data["tourId"] = tourDetails._id
        data["tourImg"] = tourDetails.img
        data["tourDuration"] = tourDetails.duration
        data["tourDestination"] = tourDetails.destination
        data["orderStatus"] = "pending"
        
        // custom data ./
        fetch(serverUrl + '/my-orders', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(err => console.log("add tour error - ", err));
    }
    console.log(errors);

    console.log('book tour id ', id, typeof id)


    useEffect(() => {
        fetch(serverUrl + '/tour-details', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.data[0])
                setTourDetails(result.data[0])
            })
            .catch(err => console.log("add tour error - ", err));
    }, [])


    return (
        <div className="flex px-52 py-10">
            <div className="w-7/12 px-10">
                <img className="w-full rounded-lg" src={tourDetails.img} alt="" />
                <h2 className="text-4xl my-5 "> {tourDetails.title} </h2>
                <div className="text-xl">
                    Price : $ <span> {tourDetails.price}</span>
                </div>
                <div className="text-sm my-3">
                    <div>
                        Destination :
                        <span> {tourDetails.destination} </span>
                    </div>
                    <div>
                        {/* <i className="far fa-hourglass"></i> */}
                        Duration :
                        <span className="text-gray-400"> <span className="text-gray-500"> {tourDetails.duration} Days </span> 	</span>
                    </div>
                </div>
                <div>
                    {tourDetails.description}
                </div>
            </div>
            <div className="w-5/12">
                <form onSubmit={handleSubmit(onSubmit)}>







                </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name*</span>
                        </label>
                        <input type="text" placeholder="Full Name" value={currentUser.displayName} className="input input-info input-bordered"  {...register("fullName", { required: true, maxLength: 80 })} />
                        {/* <label className="label">
                            <span className="label-text-alt">Please enter data</span>
                        </label> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input type="text" placeholder="Email" value={currentUser.email} className="input input-info input-bordered" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {/* <label className="label">
                            <span className="label-text-alt">Please enter data</span>
                        </label> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile Number*</span>
                        </label>
                        <input type="tel" placeholder="Mobile number" className="input input-info input-bordered" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                        {/* <label className="label">
                            <span className="label-text-alt">Please enter data</span>
                        </label> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Departure Date*</span>
                        </label>
                        <input type="date" placeholder="Departure Date" {...register("departureDate", { required: true })} className="input input-info input-bordered" />
                        {/* <label className="label">
                            <span className="label-text-alt">Please enter data</span>
                        </label> */}
                    </div>

                    <div className="form-control">
                        <label className="input-group input-group-vertical input-group-lg mt-5">
                            <span>Note</span>
                            <textarea  {...register("notes", { required: false })} placeholder="" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <input type="submit" className="btn btn-outline btn-accent my-5 block" />

                </form>
            </div>
        </div>
    );
};

export default BookTour;