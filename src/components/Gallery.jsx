import React, { useEffect, useState } from 'react';

export const Gallery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dragonball-api.com/api/characters?limit=30');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.log('Error fetch data, ', error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='bg-white shadow-xl rounded-lg p-6 max-w-3xl w-screen pb-6'>
            <div className=''>
                <h1 className='text-4xl font-bold text-center mb-6'>Personajes</h1>
                {loading ? (
                    <p>Loading . . . </p>
                ) : (
                    <ul className='grid grid-cols-3 gap-8 '>
                        {data.items.map((item, index) => {
                            return (
                                <li key={index} className='bg-gray-300 p-6 rounded-lg'>
                                    <img src={item.image} alt={item.name} className='h-80 mx-auto transition-transform transform hover:scale-125'></img>
                                    <h2 className='text-leg font-bold text-center mt-4 text-2xl'>{item.name}</h2>
                                </li>
                            )
                        }
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}