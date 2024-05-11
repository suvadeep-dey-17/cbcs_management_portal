# CBCS Management System

## Overview

This is a CBCS Management System built using React for the frontend, Node.js with Express for the backend, and MongoDB for the database. It allows students to login and view their assignments and study materials, teachers to add study materials, and administrators to manage users and semesters.

## Features

- **Student Portal:**
  - Login using student ID and password.
  - View assignments.
  - Access study materials.

- **Teacher Portal:**
  - Login using teacher credentials.
  - Add study materials.

- **Admin Panel:**
  - Add students and teachers.
  - Upgrade students to the next semester.

## Technologies Used

- **Frontend:**
  - React
  - React Router
  - Bootstrap

- **Backend:**
  - Node.js
  - Express

- **Database:**
  - MongoDB

## Usage

- Open the application in your browser.
- Sign up as an admin, teacher, or student.
- Explore the respective functionalities based on your role.

## API Endpoints

- `/api/auth` - Authentication routes for login and registration.
- `/api/students` - Routes for student operations (e.g., get assignments, study materials).
- `/api/teachers` - Routes for teacher operations (e.g., add study materials).
- `/api/admin` - Routes for admin operations (e.g., add students, upgrade semesters).

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
