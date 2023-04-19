# SHU Pathways Countdown

This repository contains a simple JavaScript countdown timer for the SHU Pathways event.

## Overview

The script calculates the remaining time until the specified event date and updates the countdown timer on the webpage every second.

## Usage

1. Include the script in your HTML file:
```html
<script src="countdown.js"></script>
```

2. Add an HTML element with the `id` attribute set to `countdown-clock` to display the countdown timer:
```html
<span id="countdown-clock"></span>
```

3. Set the date and time of the event in the `countdown.js` file:
```javascript
const eventDate = new Date('2023-04-29T11:00:00Z');
```

## How It Works

The countdown timer works as follows:

1. Sets the event date and time.
2. Gets the HTML element for the countdown clock.
3. Updates the countdown timer every second.
4. Calculates the remaining time until the event in days, hours, minutes, and seconds.
5. Formats the remaining time as a string.
6. Updates the countdown clock text with the formatted remaining time.

## License

This project is released under the MIT License. See the `LICENSE` file for more information.
