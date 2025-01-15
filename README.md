# Vue 3 + Vite

---

# Drag-and-Drop Whiteboard

A **drag-and-drop UI editor** built with Vue.js, allowing users to visually arrange components like buttons, text areas, and checkboxes on a whiteboard. This project demonstrates the use of Vue's reactivity, HTML5 Drag-and-Drop API, and modern component-based architecture.

---

## Features

- **Component Menu**:
  - A list of draggable components like `Button`, `Text Area`, and `Checkbox`.
  - Each component is visually represented with icons for intuitive interaction.
- **Whiteboard**:
  - A drop area where users can place components by dragging them from the menu.
  - Supports real-time positioning with calculated `x` and `y` coordinates.
- **Dynamic State Management**:
  - All created and dropped components are stored in a reactive array, ensuring the UI updates automatically.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Yasins-SE/vue-visual-wysiwyg.git
   cd vue-visual-wysiwyg
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run serve
   ```

4. Open the app in your browser at `http://localhost:8080`.

---

## Usage

1. Drag a component (e.g., Button) from the **Component Menu**.
2. Drop it onto the **Whiteboard**.
3. Move components around the whiteboard by dragging them.
4. Hover over a component to reveal the delete icon and remove it if needed.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── ComponentMenu.vue    # Sidebar menu with draggable components
│   ├── Whiteboard.vue       # Drop area where components are placed
├── App.vue                  # Main layout combining menu and whiteboard
├── main.js                  # Vue app initialization
├── style.css                # Icons or additional resources
```

---

## Technologies Used

- **Vue.js**: Component-based UI framework.
- **HTML5 Drag-and-Drop API**: To enable drag-and-drop functionality.
- **CSS**: For styling and hover effects.
- **JavaScript**: To manage state and component behaviors.

---

## Future Enhancements

- **Customizable Components**:

  - Let users edit component properties (e.g., button text, placeholder in text area).

- **Additional Components**:

  - More components like dropdowns, sliders, and toggle switches will be added to expand functionality.

- **Save and Export**:
  - Save the whiteboard state as JSON or export it to HTML for later use.

---
