import React, { useEffect, useState } from 'react';
// import TourInfo from './TourInfo/TourInfo';
import { useParams } from 'react-router';
import useServerConfig from '../../hooks/useServerConfig';
import OrderInfo from './OrderInfo/OrderInfo';

const AllOrders = () => {
    const { slug } = useParams();


    console.log('slug', slug)

    const [orderList, setOrderList] = useState([])
    const serverUrl = useServerConfig()
    console.log('serverUrl', serverUrl);
    // tour list dynamic 
    useEffect(() => {

        fetch(serverUrl + '/all-orders')
            .then(response => response.json())
            .then((result) => {
                console.log(result.orderList)
                setOrderList(result.orderList)
                //  console.log('order list - ', result.orderList);
            })
    }, [serverUrl])

    // tour list dynamic ./ 
    // build delete function 

    const handleDelete = (id, title) => {
        console.log('delet clik')

        let r = window.confirm("Are you sure want to delete " + title);
        if (r == true) {

            fetch(serverUrl + '/my-orders', {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    const newOrderList = orderList.filter(order => order._id !== result.id)
                    setOrderList(newOrderList)

                })
                .catch(err => console.log("add tour error - ", err));
        } else {
            // txt = "You pressed Cancel!";
            console.log('skip delete')
        }
    }

    const handleActiveOrder = (id) => {
        fetch(serverUrl + '/update-order-status/' + id, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    fetch(serverUrl + '/all-orders')
                        .then(response => response.json())
                        .then((result) => {
                            console.log(result.orderList)
                            setOrderList(result.orderList)
                            //  console.log('order list - ', result.orderList);
                        })
                } else {
                    alert("Update unsuccessfull. ")
                }

            })
            .catch(err => console.log("add tour error - ", err));

    }
    return (
        <div className="overflow-x-auto overflow-y-auto">

            <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded-lg my-6">
                        <h1 className="text-4xl my-10 pt-10 pl-5">Manage Orders</h1>
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Tour Info</th>
                                    <th className="py-3 px-6 text-center">Package Price</th>
                                    <th className="py-3 px-6 text-left">Order Status </th>
                                    <th className="py-3 px-6 text-left">Purchased By</th>

                                    <th className="py-3 px-6 text-center">Mobile</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {/* core  */}
                                {

                                    orderList.map(orderInfo => <OrderInfo key={orderInfo._id} orderInfo={orderInfo} handleActiveOrder={handleActiveOrder} handleDelete={handleDelete}></OrderInfo>)
                                }

                                {/* <TourInfo></TourInfo>
                            <TourInfo></TourInfo> */}
                                {/* core  */}




                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;