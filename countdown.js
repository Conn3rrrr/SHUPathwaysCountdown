// Set the date and time of the event
const eventDate = new Date('2023-04-29T11:00:00Z');

// Get the HTML element for the countdown clock
const countdownClock = document.getElementById('countdown-clock');

// Update the countdown every second
setInterval(() => {
  // Get the current date and time
  const now = new Date();

  // Calculate the time remaining until the event
  const timeRemaining = eventDate.getTime() - now.getTime();

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Format the time remaining as a string
  const timeRemainingStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Update the countdown clock text
  countdownClock.innerText = timeRemainingStr;
}, 1000);
