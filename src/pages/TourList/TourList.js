import React from 'react';
import TourInfo from './TourInfo/TourInfo';

const TourList = () => {
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
                                <TourInfo></TourInfo>
                                <TourInfo></TourInfo>
                                <TourInfo></TourInfo>
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