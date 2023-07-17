import React, {useState} from 'react';
import './index';

export default function TempConversion(props) {
    const [unit, setUnit] = useState('celcius');

    function farTemp(event) {
        event.preventDefault();
        setUnit('farenheight');
    }

    function celTemp(event) {
        event.preventDefault();
            setUnit('celcius');
        }

    function farenheight() {
        return (props.celcius *9/5) + 32;
    }


    if (unit === 'celcius') {
    return (
    <div className='mainTemp'>
        <h1>{Math.round(props.celcius)}</h1>
        <span className="deg">°C | <a href='/' onClick={farTemp}>°F</a></span>
    </div>
    );
    } else {
        return (
            <div className='mainTemp'>
                <h1>{Math.round(farenheight())}</h1>
                <span className="deg"><a href='/' onClick={celTemp}>°C</a> | °F</span>
            </div>
            );
    }
}