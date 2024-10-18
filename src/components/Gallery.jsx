import React, { useEffect, useState } from 'react';

export const Gallery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dragonball-api.com/api/characters?limit=30');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching data, ', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const openModal = (character) => {
        setSelectedCharacter(character);
    };

    const closeModal = () => {
        setSelectedCharacter(null);
    };

    const filteredData = data.items ? data.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
    ) : [];

    return (
        <div className='bg-white shadow-xl rounded-lg p-6 max-w-3xl w-screen pb-6'>
            <div className=''>
                <h1 className='text-4xl font-bold text-center mb-6'>Personajes</h1>

                <input
                    type="text"
                    placeholder="Buscar personaje"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="mb-4 p-2 rounded border border-gray-300 w-full"
                />

                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="loader">Loading...</div>
                    </div>
                ) : (
                    <ul className='grid grid-cols-3 gap-8'>
                        {filteredData.map((item, index) => (
                            <li key={index} className='bg-gray-300 p-6 rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:bg-yellow-300 hover:shadow-lg' onClick={() => openModal(item)}>
                                <img src={item.image} alt={item.name} className='h-80 mx-auto transition-transform transform hover:scale-125'></img>
                                <h2 className='text-leg font-bold text-center mt-4 text-2xl'>{item.name}</h2>
                            </li>
                        ))}
                    </ul>
                )}

                {selectedCharacter && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg">
                            <h2 className="text-3xl font-bold">{selectedCharacter.name}</h2>
                            <img src={selectedCharacter.image} alt={selectedCharacter.name} className="w-64 mx-auto" />
                            <button onClick={closeModal} className="mt-4 p-2 bg-red-500 text-white rounded">Cerrar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};