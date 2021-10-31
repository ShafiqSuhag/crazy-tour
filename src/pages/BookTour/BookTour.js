import React from 'react';
import { useForm } from 'react-hook-form';



const BookTour = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="flex px-52 py-10">
            <div className="w-7/12 px-10">
                <img className="w-full rounded-lg" src="https://themeforest.img.customer.envatousercontent.com/files/338759351/01_sway.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=0343a0b78fe0332bb3a575451ebcf81e" alt=""/>
                <h2 className="text-4xl my-5 ">Indinasian Islam</h2>
                <div className="text-xl">
                    Price : $ <span>500</span>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quibusdam, ipsam impedit enim fugiat obcaecati voluptas dolor perferendis quo distinctio at, nesciunt nobis ex. Neque, doloremque incidunt magni magnam nemo est repellat molestias doloribus sit eum quibusdam facere iste voluptates fuga consequatur praesentium temporibus illo maxime corrupti eius non rem!
                </div>
            </div>
            <div className="w-5/12">
                <form onSubmit={handleSubmit(onSubmit)}>







                </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" className="input input-info input-bordered"  {...register("Full Name", { required: true, maxLength: 80 })} />
                        {/* <label className="label">
                            <span className="label-text-alt">Please enter data</span>
                        </label> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email" className="input input-info input-bordered" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {/* <label className="label">
                            <span className="label-text-alt">Please enter data</span>
                        </label> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input type="tel" placeholder="Mobile number" className="input input-info input-bordered" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                        {/* <label className="label">
                            <span className="label-text-alt">Please enter data</span>
                        </label> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Departure Date</span>
                        </label>
                        <input type="date" placeholder="Departure Date" {...register("Departure Date", { required: true })} className="input input-info input-bordered" />
                        {/* <label className="label">
                            <span className="label-text-alt">Please enter data</span>
                        </label> */}
                    </div>
                  
                    <div className="form-control">
                        <label className="input-group input-group-vertical input-group-lg mt-5">
                            <span>Note</span>
                            <textarea  {...register("Notes", { required: false })}  placeholder="" className="input input-bordered input-lg"/>
                        </label>
                    </div>
                    <input type="submit" className="btn btn-outline btn-accent my-5 block" />

                </form>
            </div>
        </div>
    );
};

export default BookTour;