# JS Clock (Day 2)
## 30 Day JS

## Description
A vanilla JavaScript single page application that your local time. It uses Date() method to get the local time on your computer, to transform the clock hands to point at the current time.

## Features
- **Real-time Synchronization:** Instantiates the `new Date()` object every second to calculate accurate rotation degrees for hours, minutes, and seconds.
- **Visual Feedback:** Dynamically manages CSS transitions to prevent the "rewind glitch" when the seconds hand resets from 444° to 90°.
- **Clock Face generation:** Uses JavaScript to mathematically position hour markers (1-12) in a perfect circle using trigonometry logic (Rotate → Translate → Rotate).

## Tech Stack
- **Core:** HTML5, CSS3, ES6+, JavaScript
- **APIs:** DOM (Document Object Model)
- **Concepts:** CSS transforms (rotate/translate), keyframes

## Key Concepts Learned

- **Date Object:** Handling of the Date object, and extracting the specific time needed.
- **Intervals:** Using `setInterval` to trigger state updates efficiently (event loop).
- **Using ternary if-statements:** Using the ternary if statement to eliminate the bug on the transition when it hits the 0 degrees.
- **Geometry in CSS:** Understanding how `transform-origin` affects rotation and using axis translation to plot items in a circle.

## Usage

1. Clone the repository.
2. Open `clock.html` in your preferred browser.