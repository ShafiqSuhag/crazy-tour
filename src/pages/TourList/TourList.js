import React, { useEffect, useState } from 'react';
import useServerConfig from '../../hooks/useServerConfig';
import TourInfo from './TourInfo/TourInfo';

const TourList = () => {

    const serverUrl = useServerConfig()
    console.log('serverUrl', serverUrl);
    // tour list dynamic 
    const [tours, setTours] = useState([])
    useEffect(() => {
        console.log('test--------')
        fetch(serverUrl + '/tours')
            .then(response => response.json())
            .then(async (result) => {
                setTours(result.tours)
                await console.log('tour list - ', result.tours);
                await console.log('tour list - ', tours);
            })
    }, [])

    // tour list dynamic ./ 
    // build delete function 

    const handleDelete = (id, title) => {
        console.log('delet clik')
        let txt;
        let r = window.confirm("Are you sure want to delete " + title);
        if (r == true) {
            // txt = "You pressed OK!";
            fetch(serverUrl + '/tour', {
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
                    const newTourLIst = tours.filter(tour => tour._id !== result.id)
                    setTours(newTourLIst)

                })
                .catch(err => console.log("add tour error - ", err));
        } else {
            // txt = "You pressed Cancel!";
            console.log('skip delete')
        }
    }

    return (
        <div className="overflow-x-auto overflow-y-auto">

            <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded-lg my-6">
                        <h1 className="text-4xl my-10 pt-10 pl-5">TOUR INFO MANAGEMENT</h1>
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Tour Title</th>
                                    <th className="py-3 px-6 text-left">Created By</th>
                                    <th className="py-3 px-6 text-center">User Purchased</th>
                                    <th className="py-3 px-6 text-center">Status</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {/* core  */}
                                {

                                    tours.map(tour => <TourInfo key={tour._id} tour={tour} handleDelete={handleDelete}></TourInfo>)
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

export default TourList;