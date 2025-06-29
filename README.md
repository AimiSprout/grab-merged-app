# Grab Merged App 🚖

This is a merged Node.js + Express web application that combines:
- Week 04 Project (`/week04`)
- Week 06 Project (`/week06`)
- Week 07 Project (`/week07`)

## 🚀 Features

✅ One app deployed to Azure  
✅ Three separate modules/routes  
✅ Connected to MongoDB Atlas (shared)  
✅ Organized project structure

## 🌐 Live Demo

Access the app at:  
🔗 [https://grab-merged-app.azurewebsites.net](https://grab-merged-app.azurewebsites.net)

### Routes
- `/` – Home dashboard  
- `/week04` – Week 04 Grab e-Hailing prototype  
- `/week06` – Week 06 MongoDB + Node CRUD system  
- `/week07` – Week 07 Booking System with aggregation

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Azure Web App
- GitHub Actions (CI/CD)

## 📁 Folder Structure
```bash
grab-merged-app/
├── .env                           # MongoDB Atlas URI and secrets
├── .gitignore                     # Ignore node_modules, .env etc.
├── README.md                      # Project overview
├── index.js                       # Main Express app entry point
├── package.json                   # App metadata and dependencies
├── public/
│   └── week07/
│       └── analytics.html         # Week07 Chart.js Dashboard
├── models/
│   ├── Booking.js                 # (optional) Ride model (not required if Ride is in index)
│   ├── Driver.js                  # Driver schema for week04
│   ├── Passenger.js               # Passenger schema for week04
│   └── Rating.js                  # Rating schema for week04
├── routes/
│   ├── week04.js                  # E-Hailing APIs (book, login, admin)
│   ├── week06.js                  # JWT Auth + RBAC APIs
│   └── week07.js                  # Aggregation + Analytics
└── .github/
    └── workflows/
        └── deploy.yml             # GitHub Actions for Azure

```

---

## ☁️ Live Demo (Azure)

| Route | Description | Live URL |
|-------|-------------|----------|
| `/`   | Root Welcome | [Open](https://grab-merged-app-cxbcc8akanagaabp.southeastasia-01.azurewebsites.net/) |
| `/week04` | Grab E-Hailing APIs | [Open](https://grab-merged-app-cxbcc8akanagaabp.southeastasia-01.azurewebsites.net/week04) |
| `/week06` | JWT Auth System | [Open](https://grab-merged-app-cxbcc8akanagaabp.southeastasia-01.azurewebsites.net/week06) |
| `/week07/analytics.html` | Dashboard + Chart.js | [Open](https://grab-merged-app-cxbcc8akanagaabp.southeastasia-01.azurewebsites.net/week07/analytics.html) |

---

## 🌐 MongoDB Atlas

- All routes use a **shared MongoDB Atlas cluster**
- Connection URI is stored in `.env`: MONGODB_URI=mongodb+srv://admin:admin123@cluster0.oznkp0f.mongodb.net/grabdb
-  Passwords and secrets are managed securely with environment variables.

---

## 🛠️ Installation (Local)

```bash
git clone https://github.com/AimiSprout/grab-merged-app.git
cd grab-merged-app
npm install
npm start
```

🔐 Week 06: JWT Auth (Postman Usage)
- POST /week06/users – Register user
- POST /week06/auth/login – Login and receive JWT
- GET /week06/admin/users – Admin-only route
- Add JWT token to Postman Authorization > Bearer Token

📊 Week 07: Analytics
- Aggregates total rides & fare per passenger using $lookup, $group, $project.
- Output displayed using Chart.js in the analytics.html dashboard.

✅ GitHub Actions: Azure Deployment
- This app is deployed using GitHub Actions to:
```
https://grab-merged-app-cxbcc8akanagaabp.southeastasia-01.azurewebsites.net
```
- Any push to main triggers .github/workflows/deploy.yml

