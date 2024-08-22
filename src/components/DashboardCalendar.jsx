import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const localizer = momentLocalizer(moment);

const DashboardCalendar = () => {
  const handleDateClick = arg => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
  return (
    <div>
      <FullCalendar
        headerToolbar={{
          start: 'today prev next',
          end: 'dayGridMonth dayGridWeek dayGridDay'
        }}
        themeSystem="standard"
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
      />
    </div>
  );
};

export default DashboardCalendar;
