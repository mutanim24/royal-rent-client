import { useEffect, useState } from "react";
import CardForCar from "../../../components/CardForCar/CardForCar";


const ServiceCar = () => {
    const [cars, setCars]  = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])

    // console.log(cars)
    return (
        <div className="grid grid-cols-3 gap-5 p-20">
            {
                cars.map(car => <CardForCar
                    key={car._id}
                    car={car}
                ></CardForCar>)
            }
        </div>
    );
};

export default ServiceCar;