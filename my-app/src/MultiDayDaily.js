import React from 'react';
import WeatherIcon from "./WeatherIcon";

export default function MultiDayDaily(props) {
    function maxTemp() {
        return Math.round(props.data.temp.max);
    }

    function minTemp() {
        return Math.round(props.data.temp.min);
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


        return days[day];
    }

    return (
        <div>
            <div>{day()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={32}/> 
            <div><strong>{maxTemp()}˚</strong> / {minTemp()}˚</div>
        </div>
    );
}