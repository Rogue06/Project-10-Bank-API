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

### Special Instructions for Mac with Apple Silicon (M1/M2/M3)

If you're using a Mac with Apple Silicon (ARM64 architecture), please follow one of these specific methods for MongoDB installation:

#### Method 1: Installation via Homebrew (Recommended for most users)

1. Install MongoDB Community via Homebrew:

```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install MongoDB Community Edition
brew tap mongodb/brew
brew install mongodb-community@6.0
```

2. Start MongoDB service:

```bash
brew services start mongodb/brew/mongodb-community
```

3. Verify installation:

```bash
# The path may be different from Intel Macs
mongosh --version
```

#### Method 2: Manual Installation from .tgz Archive

1. Download the MongoDB Community Server for macOS ARM64 from the [official MongoDB download page](https://www.mongodb.com/try/download/community)

   - Select the current version (e.g., 8.0.5)
   - Choose "macOS ARM 64" as Platform
   - Select "tgz" as Package
   - Click "Download"

2. Move the downloaded archive to your desired installation location:

```bash
# Replace with your actual file version
mv ~/Downloads/mongodb-macos-arm64-8.0.5.tgz /usr/local/
```

3. Extract the archive:

```bash
cd /usr/local/
tar -xzvf mongodb-macos-arm64-8.0.5.tgz
```

4. Rename the extracted folder for easier reference (optional):

```bash
mv mongodb-macos-arm64-8.0.5 mongodb
```

5. Add MongoDB binaries to your PATH by adding these lines to your ~/.zshrc or ~/.bash_profile:

```bash
# Add this to your ~/.zshrc or ~/.bash_profile
export PATH="/usr/local/mongodb/bin:$PATH"
```

6. Apply the changes:

```bash
source ~/.zshrc  # or source ~/.bash_profile
```

7. Create data directory:

```bash
sudo mkdir -p /usr/local/var/mongodb
sudo chown -R $(whoami) /usr/local/var/mongodb
```

8. Create log directory:

```bash
sudo mkdir -p /usr/local/var/log/mongodb
sudo chown -R $(whoami) /usr/local/var/log/mongodb
```

9. Start MongoDB:

```bash
/usr/local/mongodb/bin/mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
```

10. Verify the installation:

```bash
/usr/local/mongodb/bin/mongosh --version
```

For more details, refer to the [official MongoDB documentation for Apple Silicon Macs](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x-apple-silicon/).

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
