/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

const Modal = (props) => {
    const { image_link, description, features, input_output_examples, integrations, tool_name } = props.modalData;

    const defaultImage = "https://cdn.pixabay.com/photo/2022/12/18/04/39/cyber-brain-7662721_1280.jpg";
    const handleImageError = (event) => {
        event.target.src = defaultImage;
    }


    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='md:grid grid-cols-2 gap-5'>
                        <div className="card w-full border border-red-400
                         bg-red-50 shadow-xl my-1">
                            <div className="card-body">
                                <h2 className="card-title">{description ? description : 'No description found!'}</h2>
                                <div className='md:flex gap-4'>
                                    <h3 className='text-base font-bold bg-white
                                     text-center py-3 rounded-xl text-green-600 my-1'>$10/Month Basic</h3>
                                    <h3 className='text-base font-bold bg-white text-center py-3 rounded-xl text-orange-600 my-1'>$50/Month Pro</h3>
                                    <h3 className='text-base font-bold bg-white text-center py-3 rounded-xl text-red-600 my-1'>Contact Us Enterprise</h3>
                                </div>
                                <div className='lg:flex justify-between'>
                                    <div>
                                        <h2 className='text-xl font-bold'>Features</h2>
                                        {
                                            Object.values(features || {}).map((feature, index) => <li key={index}>{feature.feature_name}</li>)
                                        }
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold'>Integrations</h2>
                                        {
                                            (integrations || []).map((integration, index) => <li key={index}>{integration}</li>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl p-3 border border-gray-400">
                            <figure><img className='rounded-lg' src={image_link ? image_link[0] : defaultImage} alt={tool_name || "Ai tool"} onError={handleImageError} /></figure>
                            <div className="card-body">
                                <h2 className='text-xl font-bold text-center'>{input_output_examples ? input_output_examples[0].input : "Can you tell me a joke?"}</h2>
                                <p className='text-center text-gray-600'>{input_output_examples ? input_output_examples[0].output : "Sure! Why did the tomato turn red? Because it saw the salad dressing!"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-warning">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;