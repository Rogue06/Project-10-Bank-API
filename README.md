# Argent Bank Project

Ce projet est une application bancaire complète avec une interface utilisateur React et une API backend.

## Structure du Projet

Le projet est divisé en deux parties principales :

### Frontend (`/argent-bank-frontend`)

- Application React
- Gestion d'état avec Redux
- Routing avec React Router
- Styles CSS
- Interface utilisateur responsive

### Backend (`/argent-bank-backend`)

- API Node.js
- Base de données MongoDB
- Documentation Swagger
- Authentification JWT

## Installation

### Backend

```bash
cd argent-bank-backend
npm install
npm run dev:server
```

### Frontend

```bash
cd argent-bank-frontend
npm install
npm run dev
```

## Documentation API

La documentation de l'API est disponible à l'adresse suivante une fois le serveur lancé :
http://localhost:3001/api-docs

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
