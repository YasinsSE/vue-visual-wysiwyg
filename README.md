# Vue 3 + Vite
(README file may not be up to date)

---

# Drag-and-Drop Whiteboard

A **drag-and-drop UI editor** built with Vue.js, allowing users to visually arrange components like buttons, text areas, and checkboxes on a whiteboard. This project demonstrates the use of Vue's reactivity, HTML5 Drag-and-Drop API, modern component-based architecture, and state management with **Pinia**.
---

## Features

- **Component Menu**:
  - A list of draggable components like `Button`, `Text Area`, and `Checkbox` etc.
  - Each component is visually represented with icons for intuitive interaction.
- **Whiteboard**:
  - A drop area where users can place components by dragging them from the menu.
  - Supports real-time positioning with calculated `x` and `y` coordinates.
- **Component Settings**:
  - A dynamic sidebar where users can modify the properties of a selected component, such as changing its background color.
  - Visible when a component is selected on the whiteboard.
- **Layout Logic**:
  - When a component is clicked, the layout changes to show `ComponentSettings`.
  - Clicking anywhere on the whiteboard deselects the component and shows the `ComponentMenu` again.
- **State Management**:
  - **Pinia** has been added for global state management of dropped components, ensuring the UI stays in sync with changes.
  - Components are managed reactively, allowing for smooth updates to the whiteboard.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YasinsSE/vue-visual-wysiwyg
   cd vue-visual-wysiwyg
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at Local: 'http://localhost:5173/'

---

## Usage

1. Drag a component (e.g., Button) from the **Component Menu**.
2. Drop it onto the **Whiteboard**.
3. Click on a component to show the **Component Settings** for modification.
4. Click anywhere on the whiteboard to deselect the component and show the **Component Menu**.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── ComponentMenu.vue       # Sidebar menu with draggable components
│   ├── ComponentSettings.vue   # Sidebar menu to modify component features
│   ├── Whiteboard.vue          # Drop area where components are placed
├── stores/
│   └── useComponentStore.js    # Pinia store for managing the component state
├── App.vue                     # Main layout combining menu and whiteboard
├── main.js                     # Vue app initialization
├── style.css                   # Style file for general layout
```

---

## Technologies Used

- **Vue.js**: Component-based UI framework.
- **Pinia**: State management library for Vue.js.
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
