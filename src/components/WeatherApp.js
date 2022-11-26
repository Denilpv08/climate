//Importaciones de otras paginas
import { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import style from '../css/WeatherApp.module.css';
import Loanding from "./Loading";

const WeatherApp = () =>{
    //Estado
    const [weather, setWeather] = useState(null);
    useEffect(() =>{
        loadInfo();
    }, []);
    useEffect(() =>{
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather]);

    //Funcion asincrona para loadInfo, que es el tiempo de espera
    const loadInfo = async (city = 'valledupar') =>{
        try {
            const request = await fetch(
            `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
            );
            const json = await request.json();

            setTimeout(() =>{
                setWeather(json);
            }, 2000);

            console.log(json);
        } catch (error) {
            
        }
    }

    //Funcion para props onChangeCity
    const handleChangeCity = (city) =>{
        setWeather(null);
        loadInfo(city);
    }
    return (
        <div className={ style.weatherContainer }>
            <WeatherForm onChangeCity={ handleChangeCity } />
            { weather ? <WeatherMainInfo weather={ weather } /> : <Loanding /> }
            
        </div>
    );
}

//Exportaciones para otras paginas
export default WeatherApp;
