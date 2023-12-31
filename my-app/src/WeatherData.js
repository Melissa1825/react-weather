import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'

import Date from './Date';
import WeatherIcon from './WeatherIcon';
import TempConversion from './TempConversion';

export default function WeatherData(props) {
    return (
      <div>
        <h6>
          <Date date={props.data.date}/>
        </h6>

        <div className="locationIcon">
            <div>
            <FontAwesomeIcon className="fa-solid, locationDot" size='lg' icon={faLocationDot} />
            </div>
            <h4>{props.data.city}</h4>
        </div>
    

        <div>
            <WeatherIcon code={props.data.icon} size={52}/>
        
          <div className="temp">
          <TempConversion celcius={props.data.temp}/>
          </div>

            <h3>{props.data.desc}</h3>
          </div>

          <div>
      <span>Feels Like</span>
      <div className="realFeel">
        <h4>{Math.round(props.data.feel)}</h4>
        <span>°C</span>
      </div>
    </div>


          <div className="details">
      <ul>
        <div className="row">
            <div className='col-2'></div>
         
          <div className="col-4">
            <li>
            <FontAwesomeIcon className="fa-solid, windIcon" icon={faWind} />
              <span>{props.data.wind}</span> <span>km/h</span>
              <p>Wind</p>
            </li>
          </div>

          <div className="col-4">
            <li>
            <FontAwesomeIcon className="fa-solid, humidIcon" icon={faDroplet} />
              <span>{props.data.humid}</span> <span>%</span>
              <p>Humidity</p>
            </li>
          </div>

          <div className='col-2'></div>
         
        </div>
      </ul>
</div>
</div>
    );
}