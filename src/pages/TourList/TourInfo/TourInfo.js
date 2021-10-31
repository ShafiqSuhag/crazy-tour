import React from 'react';

const TourInfo = (props) => {
    const { _id, title, duration, description, img, destination, price, rating, userPhotoUrl, userName } = props.tour;
    // const {testFunc} = props.testFunc
    console.log(props)

    
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <div className="mr-2">
                        <img alt="" className="rounded-lg  w-6 h-6" src={img} />
                    </div>
                    <span className="font-medium">{title}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <div className="mr-2">
                        <img alt="" className="w-6 h-6 rounded-full" src={userPhotoUrl || "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"} />
                    </div>
                    <span>{userName || "anonymous"} </span>
                </div>
            </td>
            {/* <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-center">
                    <img alt="" className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg" />
                    <img alt="" className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg" />
                    <img alt="" className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg" />
                </div>
            </td> */}
            <td className="py-3 px-6 text-center">
                <span className=" py-1 px-3 rounded-full text-xl">${price}</span>
            </td>
            <td className="py-3 px-6 text-center">
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Active</span>
                {/* <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span> */}
            </td>
            <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                    {/* <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div> */}
                    {/* <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div> */}
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        {/* <button onClick={props.testFunc}> */}
                        <button onClick={() => props.handleDelete(_id, title)}>
                        {/* <button onClick={() => handleDelete(_id, title)}> */}
                            <i class="far fa-trash-alt"></i>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg> */}
                        </button>

                    </div>
                </div>
            </td>
        </tr>
    );
};

export default TourInfo;