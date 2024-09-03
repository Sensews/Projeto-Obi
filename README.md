# Projeto Obi - Character Sheet & Campaign Manager
## Table of Contents 
- [Project Overview](#project-overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
    - [Login & Registration](#login--registration)
    - [Player Mode](#player-mode)
    - [Dungeon Master Mode](#dungeon-master-mode) 
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)

## Project Overview
Project Obi is a web application designed to streamline character creation and campaign management for tabletop role-playing games (TTRPGs). Whether you're a player crafting your ideal hero or a Dungeon Master weaving intricate narratives, Project Obi aims to be your go-to tool.

## Features
**Current Features:**
- **User Authentication:** Securely register and log in to manage your TTRPG experience.
- **Player Character Creation:** Generate detailed character sheets with customizable attributes.

**Planned Features (In Development):**
- **Campaign Management:** Dungeon Masters can create and organize campaigns, including storylines, maps, and encounters.
- **Monster & NPC Creation:** Design unique antagonists and supporting characters.
- **Spell & Item Database:** Access and modify a library of spells and magical items.
- **Collaborative Features:** Players and Dungeon Masters can interact and share information seamlessly.

## Screenshots
**Login Screen:**
<img src="/assets/print_login_screen.png" />

**Main Screen:**
<img src="/assets/print_main_screen.png" />

## Getting Started 

### Prerequisites
- **Web Browser:** Google Chrome, Mozilla Firefox, Microsoft Edge, or similar.
- **Node.js and npm:** Ensure you have Node.js and npm (Node Package Manager) installed on your system. Download from [https://nodejs.org/](https://nodejs.org/).

### Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Sensews/Projeto-Obi.git
   cd project-obi

### Install Dependencies:
    ```bash
    npm install

### Set up Firebase:
   1. Create a Firebase project at [https://firebase.google.com/](https://firebase.google.com/)
   2. Follow Firebase setup instructions to obtain your project's configuration.
   3. Create a file named `firebaseConfig.js` in your project's root directory and add your Firebase configuration:

       ```javascript
       const firebaseConfig = {
           // ... your Firebase config ...
       };

       firebase.initializeApp(firebaseConfig);

### Run the Application:
    ```bash
    npm start
This typically starts a local development server. Open your web browser and navigate to the specified address (e.g., http://localhost:3000) to view the application.

## Usage

### Login & Registration
- Upon launching the application, you will be presented with a login screen.
- If you're a new user, click on the "Register" button. Provide your email address and a secure password to create an account.
- Existing users can log in with their credentials.

### Player Mode
- Once logged in, you can access the player mode to create and manage your character sheets.
- Fill in the necessary fields, such as name, race, class, attributes, and skills.
- Save your character sheet to access it later.

### Dungeon Master Mode
- Dungeon Masters will have access to additional features to manage their campaigns.
- This includes creating new campaigns, defining world settings, and populating the world with NPCs, monsters, and loot.

## Future Enhancements
- **Dice Rolling Mechanics:** Integrate dice rolling features for resolving actions.
- **Character Sheet Templates:** Offer pre-made templates for popular TTRPG systems.
- **Real-time Collaboration:** Enable real-time updates and communication between players and Dungeon Masters.
- **Mobile Responsiveness:** Optimize the application for mobile devices.

## Contributing
We welcome contributions from the community. If you'd like to contribute, please fork the repository and submit a pull request with your changes. Ensure your code follows our coding standards and include appropriate tests.
