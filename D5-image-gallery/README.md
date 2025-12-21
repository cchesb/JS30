# Flex Panels Image Gallery (Day 5)
## 30 Day JS

## Description
An interactive image gallery that uses CSS Flexbox and JavaScript event listeners to create a smooth, "exploding" transition effect. When a panel is clicked, it expands to show more of the image and slides in hidden text from the top and bottom.

## Features
- **Dynamic Flex Resizing:** Panels expand using `flex: 5` on click.
- **Staggered Animations:** Text elements use `translateY` to slide into view only after the panel has finished growing.
- **Modern UI:** Uses high-resolution Unsplash images and custom cubic-bezier transitions for a premium feel.

## Tech Stack
- **Core:** HTML5, CSS3(Flexbox, Transitions, Transforms), JavaScript
- **APIs:** DOM (Document Object Model)
- **Concepts:** forEach, eventListener

## Key Concepts Learned

- **Event Delegation/Looping:** Using `forEach` to attach listeners to multiple elements.
- **Transition Events:** Leveraging `transitionend` to sequence animations.
- **Conditional Logic:** Filtering event properties (e.g., `e.propertyName.includes('flex')`) to prevent transition "ghosting."

## Usage

1. Clone the repository.
2. Open `image-gallery.html` in your preferred browser.