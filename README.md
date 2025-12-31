💇‍♀️ Salon Appointment Booking System

A full-stack, Dockerized salon appointment booking system that allows customers to book appointments online and download a PDF appointment receipt, while providing admin-level management features.

Built using React, Node.js, MongoDB, Nginx, and Docker, following real-world web application architecture.

🚀 Features
👤 Customer Features

Book salon appointments online

Select service, date, and time

Receive appointment confirmation

Download styled PDF receipt for bookings

User-friendly and responsive UI

🧑‍💼 Admin Features

Secure admin login

View all appointments

Appointment status management

Dashboard-style interface

📄 PDF Receipt Generation

Automatically generates a downloadable appointment confirmation PDF

Includes:

Salon branding

Booking ID

Client name

Service

Date & time

Booking status

Professional layout suitable for real businesses

🧱 Tech Stack
Frontend

React

HTML5 / CSS3

JavaScript (ES6+)

Backend

Node.js

Express.js

MongoDB

Mongoose

DevOps / Infrastructure

Docker

Docker Compose

Nginx (Reverse Proxy)

🏗️ System Architecture
Client (Browser)
      |
      v
   Nginx (Port 80)
   ├── /        → React Frontend
   └── /api     → Node.js Backend
                     |
                     v
                 MongoDB

📁 Project Structure
salon-booking-system/
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── BookingForm.jsx
│       │   ├── HomePage.jsx
│       │   ├── AdminDashboard.jsx
│       │   └── AdminLogin.jsx
│       ├── App.js
│       ├── index.js
│       └── App.css
│
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── models/
│       └── appointment.js
│
├── nginx/
│   └── nginx.conf
│
├── docker-compose.yml
├── .env
└── README.md

⚙️ Environment Variables

Create a .env file in the root directory:

MONGO_URL=mongodb://mongo:27017/salon

🐳 Run the Project with Docker
Prerequisites

Docker

Docker Desktop

MongoDB Compass (optional, for GUI)

Steps
docker compose down
docker compose up --build


Once running, open:

http://localhost

🧪 Database Access (MongoDB Compass)

Host: localhost

Port: 27017

Database: salon

Collection: appointments

You can view live booking data created from the frontend.

📄 Sample PDF Receipt

Styled Salon
128 Sloane Street, London, SW1X 9AS
www.styledsalon.com
 | +44 20 7946 0123

APPOINTMENT CONFIRMATION

Booking ID: 69501F77EF

Client Name: Mohammed Ifham Nuha

Service: Color

Date: Tuesday, December 30, 2025

Time: 15:36

Status: Confirmed (Pending Payment)

Please arrive 10 minutes prior to your appointment.
Cancellations must be made 24 hours in advance.

🔒 Validation & Reliability

Backend schema validation using Mongoose

Required fields enforced

Centralized API routing via Nginx

Dockerized services ensure consistency across environments

📌 Learning Outcomes

Full-stack application design

Docker & Docker Compose orchestration

Reverse proxy using Nginx

MongoDB schema design and validation

Debugging containerized applications

Real-world API integration

PDF generation in web applications

🔮 Future Enhancements

Time-slot availability & double-booking prevention

Authentication with JWT

Online payment integration

Email/SMS notifications

Deployment to cloud (AWS / Azure / GCP)

👨‍💻 Author

Nuha
Software Technology
Passionate about Full-Stack Development 

⭐ Acknowledgements

This project was built as a real-world learning exercise to understand modern web application architecture using Docker and microservice-style separation.
