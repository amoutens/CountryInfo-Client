# React + TypeScript + Vite  

This project provides a **React frontend** powered by **Vite** with TypeScript support, optimized for fast development and production builds. It includes **React Router**, **Material UI**, and **Chart.js** for UI components and data visualization.  

## Frontend Setup  

### Tech Stack  

- **React.js** – Frontend framework  
- **TypeScript** – Statically typed JavaScript  
- **Vite** – Fast development server and build tool  
- **React Router** – Client-side navigation  
- **MUI (Material UI)** – UI components library  
- **Chart.js + react-chartjs-2** – Data visualization  

## Scripts  

The following scripts are available in `package.json`:  

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}'"
  }
}
```  

## Pages & Features  

### **Country List Page**  

- Fetches and displays a list of countries from the backend API.  
- Clicking a country navigates to the **Country Details Page**.  

### **Country Details Page**  

Displays detailed information about a selected country:  

- **Country Name** – Displayed at the top.  
- **Country Flag** – Fetched from the backend and displayed near the name.  
- **Border Countries Widget**:  
  - Lists neighboring countries.  
  - Clicking a border country loads its details.  
- **Population Chart**:  
  - Displays historical population data.  
  - X-axis: Years, Y-axis: Population.  

## Running the Project  

### **Development Mode**  

```sh
npm run dev
```  