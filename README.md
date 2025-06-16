# Skip Selection Page 🚛

This is a responsive React page where users can choose a skip (waste container) based on their needs. It includes filters for **Road Legal** and **Heavy Waste**, visual cards, and animated selections with pricing.

## 🧠 My Approach

### 🔹 1. Component-Based Design

I broke the page into reusable components:
- `SkipCard`: Displays each skip with details and image
- `FilterButtons`: Toggles filtering options
- `StepIndicator`: Shows progress
- `ProgressBar`: (if used) indicates selection progress
- `SkipSelectionPage`: Main page that handles logic

This makes the app **scalable**, **readable**, and **easier to maintain**.

### 🔹 2. Styling

- Used **custom CSS** for full control of styling.
- Followed a **dark-to-light contrast** with gradients and soft UI.
- Added responsive layout using **media queries**.

### 🔹 3. Interactivity

- Cards become **selectable**, and re-clicking unselects them.
- An **alert with total price** appears at the bottom when a skip is selected.
- Filters update cards dynamically.

### 🔹 4. Data Handling

- Skip data is stored in `data/skipData.js`.
- Used `useState` for:
  - Selected skip
  - Filter state

### 🔹 5. Clean Git Structure

- Used `.gitignore` to exclude unnecessary files (e.g. node_modules)
- Committed modular components and styles

---

## 🌟 Features

- Beautiful dark-themed UI
- Interactive skip selection cards
- Filter buttons (All, Road Legal, Heavy Waste)
- Live price update on selection
- Progress step indicator
- Responsive design (mobile friendly)

## 📷 Screenshot
![image](https://github.com/user-attachments/assets/abf99723-1c34-4ee2-b7fa-8bd28c7d4ec8)

## 🔧 Tech Stack

- React
- CSS Modules
- Lucide Icons
- JSX Components

## 📁 Folder Structure
src/
├── components/
│   ├── SkipCard/
│   ├── FilterButtons/
│   ├── StepIndicator/
│   ├── ProgressBar/
├── data/
├── pages/
├── styles/
├── assets/
├── App.jsx
