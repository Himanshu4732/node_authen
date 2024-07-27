An e-commerce website built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project provides a platform for users to browse, search, and purchase products, while also providing an admin interface for managing products, categories, and orders.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication (register, login, logout)
- Browse products by category
- Search products by name
- Product detail pages
- Shopping cart functionality
- Checkout process with payment integration
- Order history for users
- Admin interface for managing products, categories, and orders

## Demo
A live demo of the application can be found at [Demo Link](#).

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ecommerce-website.git
   cd ecommerce-website
   ```

2. Install server dependencies:
   ```sh
   cd server
   npm install
   ```

3. Install client dependencies:
   ```sh
   cd ../client
   npm install
   ```

4. Create a `.env` file in the `server` directory with the following content:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. Create a `.env` file in the `client` directory with the following content:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

## Usage
1. Start the server:
   ```sh
   cd server
   npm start
   ```

2. Start the client:
   ```sh
   cd ../client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Technologies
- **MongoDB**: NoSQL database for storing product, user, and order data.
- **Express.js**: Backend framework for building the API.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.
- **JWT**: JSON Web Tokens for authentication.
- **Stripe**: Payment processing.

## Folder Structure
```
ecommerce-website/
├── client/                # Frontend code
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       └── App.js
├── server/                # Backend code
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.
