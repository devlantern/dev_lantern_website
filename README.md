# Dev Lantern Website  

This is the official website for **Dev Lantern**, a tech community dedicated to empowering developers, product thinkers, designers, and tech enthusiasts through learning, collaboration, and meaningful conversations.

## Project Overview

Dev Lantern is a subsidiary of **Walure Development Initiative**, a non-governmental organisation committed to advancing sustainable development through education, empowerment, and capacity building across Africa.
This repository contains the source code for the Dev Lantern website, which serves as the central hub for all community initiatives, including the Dev Matrix bootcamp, the Dev Lantern Podcast, and the Code Challenge.

The site serves as both a landing page and a resource portal for:

- Tech enthusiasts looking to join the community
* Aspiring developers and designers seeking structured learning
+ Industry leaders and guests interested in the podcast
- Partners, sponsors, and collaborators

## Live Site

*https://www.devlantern.com/*

## Built With

- Vue.js — Frontend framework (component-based architecture)
+ Vue Router — Client-side routing between pages
* CSS3 — Styling and responsive layout
- JavaScript — Interactivity and dynamic behaviour

## Project Structure

This is the design [link](https://www.figma.com/design/7DVDlbHbOh8dEY2sgOADnf/Dev-Lantern-Website?node-id=1-3&t=rQfr4XcYB6Ein08A-1)

dev-lantern-website/

```
├── src/
│   ├── assets/                  # Images, icons, and static assets
│   ├── components/
│   │   ├── Navbar.vue           # Site-wide navigation bar
│   │   └── Footer.vue           # Site-wide footer
│   ├── layouts/
│   │   └── MainLayout.vue       # Main layout wrapper
│   ├── pages/
│   │   ├── HomePage.vue         # Homepage
│   │   ├── AboutPage.vue        # About page
│   │   ├── communityPage.vue    # Community page
│   │   ├── devMatrix.vue        # Dev Matrix bootcamp page
│   │   ├── devPodcast.vue       # Dev Lantern Podcast page
│   │   ├── codeChallenge.vue    # Code Challenge page
│   │   └── contactPage.vue      # Contact page
│   ├── router/                  # Vue Router configuration
│   ├── App.vue                  # Root component
│   ├── main.js                  # App entry point
│   └── style.css                # Global styles
└── README.md
```

## Getting Started

No build tools or package managers are required. To run the project locally:

- **Clone the Website**

```
bash
  git clone https://github.com/your-org/dev-lantern-website.git
```

- **Navigate into the project folder**

```
bash
cd dev-lantern-website
```

- **Install Dependencies**

```
bash
  npm install
```
- **Start the development server**
```
  npm run dev
```

- **Open your browser**

The app will be running at http://localhost:5173 (or the port shown in your terminal).

## Pages
### Home 
Overview of Dev Lantern and all initiatives
### Dev Matrix
Details on the free structured tech bootcamp
### Podcast
Info on the Dev Lantern Podcast and guest nominations
### Code Challenge
Details on the hands-on coding competition
### About
Mission, vision, team, and history
### Contact Us
General inquiries, partnership, and podcast contact form

## Basic Git Commands
If you're new to Git, here are the essential commands you'll need to work on this project:

```
bash
# Check the status of your changes
git status

# Pull the latest changes from the main branch
git pull origin main

# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Stage your changes
git add.

# Commit your changes with a message
git commit -m "describe what you changed"

# Push your branch to GitHub
git push origin feature/your-feature-name
```

## Contributing
We're a small team and welcome contributions that improve the site. 
To contribute:

- Fork the repository
+ Create a new branch for your feature or fix

```
bash
git checkout -b feature/your-feature-name
```
+ Make your changes and commit with a clear message

```
bash
git commit -m "feat: add X section to homepage"
```
* Push to your fork and open a Pull Request
+ A team member will review and merge

Please keep changes consistent with the existing design and code style.

## About Walure Development Initiative
Dev Lantern is proudly powered by **Walure Development Initiative**, an NGO committed to advancing sustainable development through education, empowerment, and capacity building. 

*Built with intention. Growing Africa's tech ecosystem — one builder at a time.*