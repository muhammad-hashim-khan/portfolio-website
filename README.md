# Personal Portfolio Website

## Overview

This is a full-stack Personal Portfolio Website developed as an internship project to demonstrate the integration of frontend, backend, and database technologies. The website showcases personal information, technical skills, projects, and provides a contact form for visitors.

The project follows a simple and clean architecture using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.

---

## Features

### Frontend

* Responsive and modern user interface
* Hero section with introduction
* About Me section
* Skills section
* Dynamic Projects section
* Contact form
* Smooth scrolling navigation
* Mobile-friendly design

### Backend

* REST API built using Express.js
* Handles project data requests
* Processes contact form submissions
* Connects frontend with MySQL database

### Database

* Stores project details
* Stores contact form messages
* Easy to manage and extend

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Tools

* Git
* GitHub
* VS Code

---

## Project Structure

```text
portfolio-website/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   └── package-lock.json
│
├── database/
│   └── portfolio.sql
│
├── .gitignore
└── README.md
```

---

## Database Setup

### Create Database

```sql
CREATE DATABASE portfolio_db;
USE portfolio_db;
```

### Create Projects Table

```sql
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description TEXT
);
```

### Insert Sample Data

```sql
INSERT INTO projects(title, description)
VALUES
('Smart Waste Management System',
 'IoT based waste monitoring and overflow detection'),

('Quick Note Application',
 'Full stack note management application');
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start server:

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

Open the frontend folder and launch:

```text
index.html
```

You can also use VS Code Live Server for a better development experience.

---

## API Endpoints

### Get All Projects

```http
GET /projects
```

Returns all project records from the database.

---

## Future Improvements

* Admin Login System
* Project Management Dashboard
* Resume Download Feature
* Dark/Light Theme Toggle
* Project Images
* Email Notifications
* Deployment on Render or Railway

---

## Learning Outcomes

Through this project, I gained experience in:

* Frontend Development
* Backend Development
* REST APIs
* Database Integration
* CRUD Operations
* Git and GitHub Version Control
* Full-Stack Application Development

---

## Author

**Muhammad Hashim Khan**

Computer Science Engineering Student

Interested in:

* Full Stack Development
* Web Applications
* Software Engineering
* AI and Automation

---

## License

This project is created for educational and internship purposes.
