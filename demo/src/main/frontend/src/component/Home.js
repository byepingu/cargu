import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar, momentLocalizer, dateFnsLocalizer } from 'react-big-calendar'
import moment from 'moment'
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ko from "date-fns/locale/ko";
import { useState } from 'react';
import DatePicker from "react-datepicker";

const locales = {
    ko: ko // 여기서 ko는 date-fns에서 가져온 한국어 로케일 객체.
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const events = [
    {
        title: "big Meeting",
        allDay: true,
        start: new Date(2024, 3, 7),
        end: new Date(2024, 3, 10)
    },
    {
        title: "count",
        allDay: true,
        start: new Date(2024, 3, 1),
        end: new Date(2024, 3, 1)
    },
    {
        title: "a",
        allDay: true,
        start: new Date(2024, 3, 9),
        end: new Date(2024, 3, 14)
    }
]

function Home() {
    const [newEvent,setNewevnet] = useState({title:"",start:"",end:""}) //객체로 새로운 이밴트 전달
    const [allevents,setAllevnets] = useState(events)
    
    const handleevent = ()=>{
        setAllevnets([...allevents,newEvent])
    }

    return (
        <>
        <h1>달력</h1>
        <h2>일정 추가</h2>
        <article>
            <input type='text' placeholder='일정이름'
            value={newEvent.title} onChange={(e)=>setNewevnet({...newEvent, title:e.target.value})}
            />

            <DatePicker placeholderText ="시작날" selected = {newEvent.start} onChange={(start)=> setNewevnet({...newEvent,start})} style={{marginRight: "10px"}}/>
            <DatePicker placeholderText ="마지막날" selected = {newEvent.end} onChange={(end)=> setNewevnet({...newEvent,end})} style={{marginRight: "10px"}}/>
            <button onClick={handleevent}>일정추가</button>
        </article>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                events={allevents}
                culture='ko' //한국어로 출력되게 설정
                style={{ height: 700, margin: "50px" }}
            />
        </>
    )
}

export default Home