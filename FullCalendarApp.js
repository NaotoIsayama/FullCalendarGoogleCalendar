
document.addEventListener('DOMContentLoaded', async function() {
    
    const response = await fetch('https://fcserver.netlify.app/.netlify/functions/events');
    const events = await response.json();

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [googleCalendarPlugin],
      events: events.items,
    });
    calendar.render();
  });