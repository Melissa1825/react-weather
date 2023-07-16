import React, { useState } from "react";
import "./index.css";
import MultiDayDaily from "./MultiDayDaily";
import axios from "axios";

export default function MultiDay(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="multiDay">
                <div className="row">
                    <div className="col-2">
                        <MultiDayDaily data={forecast[0]} />
                    </div>
                </div>   
            </div>  
        );

    } else { 
        let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=667d9f573c8af4c33457be5d561a9148&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    
    return null;
    }
}
