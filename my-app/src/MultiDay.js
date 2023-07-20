import React, { useState, useEffect } from "react";
import "./index.css";
import MultiDayDaily from "./MultiDayDaily";
import axios from "axios";

export default function MultiDay(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coord]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {
        let lat = props.coord.lat;
        let lon = props.coord.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=667d9f573c8af4c33457be5d561a9148&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }

    if (loaded) {
        return (
            <div className="multiDay">
                <div className="row">
                    {forecast.map(function(dailyforecast, index) {
                        if (index < 6) {
                        return (
                            <div className="col-2" key={index}> 
                                <MultiDayDaily data={dailyforecast} />
                            </div>
                        );
                        } else {
                            return null;
                        }
                    })}
                </div>   
            </div>  
        );

    } else { 
        load();
    
        return null;
    }
}
