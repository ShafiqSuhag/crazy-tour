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
            
            <td className="py-3 px-6 text-center">
                <span className=" py-1 px-3 rounded-full text-xl">${price}</span>
            </td>
            <td className="py-3 px-6 text-center">
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"> {destination} </span>
                {/* <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span> */}
            </td>
            <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        {/* <button onClick={props.testFunc}> */}
                        <button onClick={() => props.handleDelete(_id, title)}>
                        
                            <i class="far fa-trash-alt"></i>
                           
                        </button>

                    </div>
                </div>
            </td>
        </tr>
    );
};

export default TourInfo;