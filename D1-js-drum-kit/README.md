# JS Drum Kit (Day 1)
## 30 Day JS

## Description
A vanilla JavaScript single page application that simulates drum beats. It maps keyboard events to specific audio elements, and applies CSS transitions for visual feedback.

## Features
- **Keyboard Interaction:** Listens for the keydown event to trigger the audio of corresponding key.
- **Visual Feedback:** adding and removing CSS class for when the event is triggered and when the transition ends.

## Tech Stack
- **Core:** HTML5, CSS3, ES6+, JavaScript
- **APIs:** DOM (Document Object Model), HTMLMediaElement API

## Key Concepts Learned

- **Event Listeners:** distinct handling of `keydown` vs `transitionend`.
- **Reference Passing:** Passing function references (e.g., `removeTransition`) to `forEach` loops rather than invoking them immediately.
- **Data Attributes:** Using `data-key` to link DOM elements with audio files.

## Usage

1. Clone the repository.
2. Open `drum-kit.html` in your preferred browser.
3. Press keys corresponding to the on-screen display (A, S, D, F, G, H, J, K, L).