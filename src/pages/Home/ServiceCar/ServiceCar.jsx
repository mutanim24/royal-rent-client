import { useEffect, useState } from "react";
import CardForCar from "../../../components/CardForCar/CardForCar";
import { Fade } from "react-awesome-reveal";


const ServiceCar = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('https://royal-rent-server.vercel.app/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    // console.log(cars)
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:p-20 p-10">
            <Fade triggerOnce direction="up">
                {
                    cars.slice(0, 6).map(car => <CardForCar
                        key={car._id}
                        car={car}
                    ></CardForCar>)
                }
            </Fade>

        </div>
    );
};

export default ServiceCar;