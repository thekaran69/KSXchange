# KSXchange

KSXchange is a full-stack application designed for seamless cryptocurrency exchange. The project leverages modern web development technologies, including React.js for the frontend, Express.js for the backend, and MongoDB for database management.

## Features

- **User Authentication**: Secure login and registration system.
- **Dashboard**: Personalized dashboard displayed after login, providing an overview of user activity, portfolio, and market trends.
- **Transaction Management**: Buy, sell, and track cryptocurrencies.

## Tech Stack

### Frontend
- React.js
- Axios for HTTP requests
- React Router for navigation
- Tailwind CSS / Material-UI for styling (or your chosen CSS framework)

### Backend
- Express.js
- Node.js
- JSON Web Token (JWT) for authentication
- Bcrypt for password hashing

### Database
- MongoDB (with Mongoose for ORM)

## Installation

Follow these steps to run the project locally:

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or access to a cloud MongoDB instance

### Clone the Repository
```bash
git clone https://github.com/thekaran69/ksxchange.git
cd ksxchange
```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```

### Run the Application
1. Ensure the backend server is running on `http://localhost:3002`.
2. Access the frontend on `http://localhost:3000`.

## Project Structure

```
ksxchange/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
├── README.md
└── package.json
```

## Scripts

### Backend
- `npm start`: Start the backend server
- `npm run dev`: Start the backend server in development mode using nodemon

### Frontend
- `npm start`: Start the development server
- `npm run build`: Build the app for production

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy coding!
