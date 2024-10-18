import React, { useEffect, useState } from 'react';

export const Gallery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dragonball-api.com/api/characters?limit=10');
                const result = await response.json();
                console.log(result);
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
        <div className='bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full'>
            <div className=''>
                <h1 className='text-2xl font-bold text-center mb-4'>Personajes</h1>
                {loading ? (
                    <p>Loading . . . </p>
                ) : (
                    <ul className='grid grid-cols-2 gap-4'>
                        {data.items.map((item, index) => {
                            return (
                                <li key={index} className='bg-gray-100 p-4 rounded-lg'>
                                    <img src={item.image} alt={item.name} className='h-64'></img>
                                    <h2 className='text-leg font-bold text-center mt-2'>{item.name}</h2>
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