import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CardForCar from '../../../components/CardForCar/CardForCar';

const AllServices = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:3000/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <div className='grid grid-cols-3 gap-3 p-20'>
            {
                cars.map(car => <CardForCar
                    key={car._id}
                    car={car}
                ></CardForCar>)
            }
        </div>
    );
};

export default AllServices;