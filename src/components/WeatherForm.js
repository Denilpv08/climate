import { useState } from "react";
import style from '../css/WeatherForm.module.css';

const WeatherForm = ({ onChangeCity }) => {
    //Estado
    const [city,  setCity] = useState('');

    //Funcion para manejar el evento onChange
    const onChange = (e) => {
        const value = e.target.value;
        
        if (value !== '') {
            setCity(value);
        }
    }
    //Funcion para manejar el evento onSubmit
    const handleSubmit = (e) =>{
        e.preventDefault();
        onChangeCity(city);
    }

    return (
        <form onSubmit={ handleSubmit } className={ style.container }>
            <input type="text" onChange={ onChange } className={ style.input } />
        </form>
    );
}

export default WeatherForm;