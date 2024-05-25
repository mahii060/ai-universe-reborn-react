/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

const Card = (props) => {
    // console.log(props.card)
    const { id, image, name, features, published_in, } = props.card
    const defaultImage = "https://cdn.pixabay.com/photo/2022/12/18/04/39/cyber-brain-7662721_1280.jpg";
    // console.log(props)
    const { setUniqueId } = props;

    const handleModal = (id) => {
        setUniqueId(id)
        document.getElementById('my_modal_4').showModal()
    }

    const handleImageError = (event) => {
        event.target.src = defaultImage;
    }

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-2xl">
                <figure><img src={image || defaultImage} alt={name || "Ai tool"}
                    onError={handleImageError} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Features</h2>
                    {
                        features?.map((feature, index) => <li key={index}>{feature}</li>)
                    }
                    <hr className='border border-black my-3' />
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <div className="flex justify-between items-center">
                        <div className='flex gap-1'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            </span>
                            <p>{published_in}</p>
                        </div>
                        <button onClick={() => handleModal(id)} className="btn btn-circle btn-sm btn-error"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;