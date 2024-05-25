/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

const Modal = (props) => {
    console.log(props.modalData)
    const { image_link, description, features, input_output_examples, integrations } = props.modalData;
    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='md:grid grid-cols-2 gap-5'>
                        <div className="card w-full border border-red-400
                         bg-red-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{description ? description : 'No description found!'}</h2>
                                <div className='md:flex gap-4'>
                                    <h3 className='text-base font-bold bg-white
                                     text-center py-3 rounded-xl text-green-600'>$10/Month Basic</h3>
                                    <h3 className='text-base font-bold bg-white text-center py-3 rounded-xl text-orange-600'>$50/Month Pro</h3>
                                    <h3 className='text-base font-bold bg-white text-center py-3 rounded-xl text-red-600'>Contact Us Enterprise</h3>
                                </div>
                                <div className='flex justify-between'>
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
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;