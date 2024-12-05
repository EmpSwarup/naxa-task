# NAXA Task

This is a React-based web application designed to showcase a list of services offered by NAXA. The application uses Redux for state management, Redux-Saga for handling side effects, and a RESTful API to fetch service data. It features a responsive design with a dynamic landing section and a services section that adapts to both large and small screens.

[Live Demo](https://naxa-task-zeta.vercel.app/)

### Key Features:

- Fetching services data via an API and displaying it with dynamic sorting.
- A responsive UI that adjusts for both mobile and large screen devices.
- A custom Redux setup with Redux-Saga for handling asynchronous actions.

## Tech Stack

- **Frontend:** React.js, Redux, Redux-Saga, TailwindCSS
- **State Management:** Redux (with Redux Toolkit)
- **API Integration:** RESTful API
- **Design:** Responsive UI with TailwindCSS for styling

## Features

- **Landing Section:** A dynamic, responsive hero section with a background image and text.
- **Services Section:** Displays a list of services with dynamic data fetched from an API. The layout adapts to both mobile and large screen sizes.
- **API Integration:** Uses Redux-Saga to handle API calls for fetching service data.
- **Responsive Design:** The application layout adjusts for smaller screens with a mobile-first approach, using TailwindCSS's responsive utilities.

## Steps to Install and Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EmpSwarup/naxa-task.git
   cd naxa-task
   ```

2. **Install dependencies:**

  Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```
   
3. **Start the development server:**

   ```bash
   npm run dev
   ```      

## How the App Works
### API Integration:
The application uses fetchServicesStart to initiate the fetch call for services. The API data is stored in the Redux store upon successful fetching (fetchServicesSuccess), and any errors are caught and stored using fetchServicesFailure.

### Redux-Saga:
The servicesSaga listens for the fetchServicesStart action, and it triggers an API call to retrieve service data. If the data is fetched successfully, it is dispatched with fetchServicesSuccess; if there is an error, fetchServicesFailure is dispatched.

### Responsive Design:
TailwindCSS utilities are used to create a responsive layout. The services section adapts its layout based on the screen size. On large screens, services are displayed in rows (alternating layout), and on small screens, they are displayed in a vertical column layout for better accessibility.

### State Management:
Redux is used to manage the application's state, including loading states, error handling, and the list of fetched services. The services data is sorted by the service_order field to ensure proper display order.   