import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CardForCar from '../../../components/CardForCar/CardForCar';

const AllServices = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const [searchResult, setSearchResult] = useState("");
    
    return (
        <div>
            <form className='text-black px-20 pt-20 pb-14'>
                <input
                    onChange={(e) => setSearchResult(e.target.value)}
                    type="text" placeholder="Search..."
                    className="input input-bordered w-full max-w-xs" />
            </form>
            <div className='grid grid-cols-3 gap-3 px-20'>
                {
                    cars.filter(car => searchResult === "" ? car 
                    : car.brand.toLowerCase().includes(searchResult.toLowerCase())).map(car => <CardForCar
                        key={car._id}
                        car={car}
                    ></CardForCar>)
                }
            </div>
        </div>
    );
};

export default AllServices;