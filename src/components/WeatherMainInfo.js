import style from '../css/WeatherMainInfo.module.css';

const WeatherMainInfo = ({ weather }) => {
    return(
        <div className={ style.mainInfo }>
            <div className={ style.city }>{ weather?.location.name }</div>
            <div className={ style.country }>{ weather?.location.country }</div>
            <div className={ style.row }>
                <div>
                    <img 
                    src={ `http:${ weather?.current.condition.icon }` } 
                    width='128px' 
                    alt={ weather?.current.condition.text } />
                </div>
                <div className={ style.weatherConditions }>
                    <div className={ style.condition }>
                        { weather?.current.condition.text }
                    </div>
                    <div className={ style.current }>{ weather?.current.temp_c }º</div>
                </div>
            </div>
            <iframe 
                title="map"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15694.616546846093!2d${weather?.location.lon}3!3d${weather?.location.lat}7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1669415740347!5m2!1ses!2sco`}
                width="100%" 
                height="350" 
                style={{ border:0 }} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default WeatherMainInfo;

/*
Longitud: -73.241150
Latitud: 10.448995
*/ 