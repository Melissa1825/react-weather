export default function FormatDate(props) {
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let weekDay = weekDays[props.date.getDay()];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[props.date.getMonth()];

    let date = props.date.getDate();

    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let min = props.date.getMinutes();
    if (min < 10) {
        min = `0${min}`;
    }

    return <div>{weekDay}, {month} {date}  {hours}:{min}</div>
}