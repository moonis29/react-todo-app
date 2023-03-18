import React from "react";

const GridDesign = () => {
    return (
        <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4">
            <h1 className="text-4xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3">
                <span className="md:col-span-2">Todo App with Tailwind CSS</span>
            </h1>
            <p className="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-6 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="h-16 bg-cyan-600 xs:h-auto xs:square"></div>
            <div className="h-16 bg-cyan-600 xs:h-auto xs:square"></div>
            <div className="h-16 bg-gray-900 xs:h-auto xs:square"></div>
            <div className="h-16 bg-cyan-600 xs:h-auto xs:square md:col-start-2"></div>
            <div className="h-16 bg-gray-900 xs:h-auto xs:square"></div>
            <div className="h-16 bg-cyan-600 xs:h-auto xs:square"></div>
            <div className="h-16 bg-cyan-600 xs:h-auto xs:square"></div>
            <div className="h-16 bg-gray-900 xs:h-auto xs:square"></div>
            <p className="xs:self-center md:text-lg md:col-span-2 md:text-center md:px-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

export default GridDesign;