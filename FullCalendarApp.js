
document.addEventListener('DOMContentLoaded', async function() {
    
    const response = await fetch('http://localhost:3000/events');
    const events = await response.json();

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [googleCalendarPlugin],
      events: events.items,
    });
    calendar.render();
  });