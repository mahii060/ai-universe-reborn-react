/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards, setCards] = useState([])
    const [showAll, setShowAll] = useState(false)


    const handleShowAll = () => {
        setShowAll(true)
    }


    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setCards(data.data.tools))
    }, [])

    return (
        <div>
            <div className='text-center my-3'>
                <button className="btn btn-accent">Sort by Date</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-12 md:px-6 px-2 my-3'>
                {
                    cards.slice(0, showAll ? 12 : 6).map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            <div className='text-center my-3'>
                {
                    !showAll && <button onClick={handleShowAll} className="btn btn-accent">Show All</button>
                }
            </div>
        </div>
    );
};

export default Cards;