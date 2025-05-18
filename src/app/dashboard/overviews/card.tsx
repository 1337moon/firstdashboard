import React from 'react';

const Card = () => {
    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-5">
                    <div className="card w-full shadow-sm border border-gray-500">
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                        </figure>
                    </div>
                    <div className="card w-full shadow-sm border border-gray-500">
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                        </figure>
                    </div>
                    <div className="card w-full shadow-sm border border-gray-500">
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;