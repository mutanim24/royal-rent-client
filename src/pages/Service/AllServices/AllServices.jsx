import React from 'react';
import { useState, useEffect } from 'react';
import CardForCar from '../../../components/CardForCar/CardForCar';

const AllServices = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);

    const [searchResult, setSearchResult] = useState("");

    return (
        <div className="mx-auto md:px-20 px-10">
            <form className='text-black my-8 mx-auto max-w-lg'>
                <input
                    onChange={(e) => setSearchResult(e.target.value)}
                    type="text" placeholder="Search..."
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
                />
            </form>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl'>
                {cars.filter(car => searchResult === "" ? car : car.brand.toLowerCase().includes(searchResult.toLowerCase()))
                    .map(car => (
                        <CardForCar
                            key={car._id}
                            car={car}
                        ></CardForCar>
                    ))}
            </div>
        </div>
    );
};

export default AllServices;
