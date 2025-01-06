# CinePop - Movie Review Portal 🎥🍿
CinePop is a dynamic movie portal that allows users to explore, review, and manage their favorite films. With features like user authentication, movie CRUD operations, personalized favorites, and dark/light theme toggles, CinePop offers an intuitive and engaging experience. The platform ensures seamless navigation across devices, making it the perfect destination for movie enthusiasts to discover and interact with their favorite films.


## Purpose 

CinePop is a user-friendly movie portal designed to simplify the process of exploring, reviewing, and managing movies. The platform aims to provide seamless navigation, dynamic functionality, and a visually engaging user experience. With CinePop, users can:

- Explore featured movies.
- View detailed information about movies.
- Add, update, and delete movies.
- Mark movies as favorites and manage their list.
This project is built to meet modern web application standards while focusing on responsiveness, security, and user convenience.


## Key Features 🚀

1. **Dynamic Navigation**
- Navbar with dynamic user authentication and role-based routes.
- Public routes for browsing movies and private routes for adding/updating movies and managing favorites.

2. **Authentication**
- Google login via Firebase Authentication.
- Conditional display of login/logout and user profile features.

3. **CRUD Operations**
- Add, update, delete movies with real-time feedback via toasts and alerts.
- Search and filter movies dynamically.

4. **Responsive Design**
- Mobile-first approach to ensure smooth user experience across devices.

5. **Movie Features**
- Add a movie with validations using React Hook Form.
- View movie details and perform actions like marking favorites, updating, or deleting.

6. **Theming**
- Dark/light theme toggle for personalized viewing experience.

7. **Interactive Elements**
- Static Carousels for featured movies.
- Ratings using react-simple-star-rating.
- Toasts and alerts via sweetalert2.

8. Environment Variables
- Client-Side: Firebase configuration keys are stored securely using environment variables.
- Server-Side: MongoDB credentials and other sensitive data are managed with .env files.
## Live Website Link
- https://cinepop.surge.sh/
## Server Repo Link
- https://github.com/Rza-O/CinePop-Server-express-mongoDBb
### Framework and NPM Packages 📦  

This project leverages the following frameworks and npm packages to enhance functionality and user experience:  

- **React**: Core framework for building the user interface.  
- **React Router**: For seamless navigation and dynamic routing.  
- **Tailwind CSS**: A utility-first CSS framework for efficient styling.  
- **DaisyUI**: Pre-styled components for a consistent and elegant design.  
- **React Icons**: A library for integrating scalable vector icons.   
- **Swiper.js**: Enables a responsive and customizable slider for the homepage.  
- **React Hot Toast**: Displays toast notifications for user feedback.  
- **React Spinner**: Adds stylish loading indicators during asynchronous operations.  
- **react-hook-form**: Simplifies form handling and validation.  
- **react-select**: Dropdown and multiselect component for movie genre selection.  
- **react-simple-star-rating**: 	Interactive star rating for movies.  
- **react-spinners**: Loader animations for data-fetching states.  
- **sweetalert2**: Alert and modal library for better user feedback.   
