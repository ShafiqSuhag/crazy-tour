import React from 'react';
import "./PageLoader.css";

const PageLoader = () => {
    return (
        <div className="flex items-center justify-center w-full h-96">
            <div class="bg-blue-600 p-2  w-4 h-4 rounded-full animate-bounce blue-circle" ></div>
            <div class="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle"></div>
            <div class="bg-red-600 p-2  w-4 h-4 rounded-full animate-bounce red-circle" ></div>
        </div>
    );
};

export default PageLoader;