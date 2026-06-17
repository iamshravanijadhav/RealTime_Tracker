# 🌍 Real-Time Tracker

A real-time location tracking web application built using **Node.js**, **Express.js**, **Socket.IO**, **Leaflet.js**, and the **Browser Geolocation API**.

The application continuously tracks a user's live location and displays it on an interactive map in real time. Through WebSocket communication, multiple connected users can instantly view location updates.

---

## 🚀 Live Demo

🔗 **Live Website:**  
https://realtime-tracker-c1cl.onrender.com/

---

## ✨ Features

- 📍 Real-time location tracking
- 🔄 Live location updates using Socket.IO
- 🗺️ Interactive maps powered by Leaflet.js
- 🌐 OpenStreetMap integration
- 👥 Multi-user tracking support
- 📌 Dynamic marker creation and updates
- ❌ Automatic marker removal on user disconnect
- 📡 Browser Geolocation API integration
- ⚡ Real-time communication using WebSockets

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- EJS
- Leaflet.js

### Backend
- Node.js
- Express.js
- Socket.IO

### APIs & Services
- Browser Geolocation API
- OpenStreetMap Tiles

---

## 🏗️ How It Works

```text
User Opens Website
        │
        ▼
Browser Requests Location Permission
        │
        ▼
Geolocation API Fetches Coordinates
        │
        ▼
Socket.IO Sends Coordinates to Server
        │
        ▼
Express + Socket.IO Server Receives Data
        │
        ▼
Server Broadcasts Updated Location
        │
        ▼
All Connected Users Receive Updates
        │
        ▼
Leaflet Updates Map Markers in Real Time
```

---

## 📂 Project Structure

```text
RealTime_Tracker/
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── views/
│   └── index.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/iamshravanijadhav/RealTime_Tracker.git
```

### Navigate to Project

```bash
cd RealTime_Tracker
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
node app.js
```

or

```bash
npm start
```

---

## 🌐 Local Usage

Open:

```text
http://localhost:3000
```

Allow location access when prompted.

Your live location will appear on the map and update automatically as you move.

---

## 📚 Key Concepts Implemented

### Express.js
- Server setup
- Routing
- Static file serving
- EJS rendering

### Socket.IO
- Real-time client-server communication
- Event-based architecture
- User connection handling
- User disconnection handling

### Leaflet.js
- Interactive map rendering
- Marker creation
- Marker updates
- Map navigation and zoom

### Geolocation API
- Live GPS coordinates
- Continuous location tracking
- Browser permission handling

---

## 🎯 Real-World Applications

This project demonstrates concepts used in:

- 🚖 Uber
- 🛵 Rapido
- 🚗 Ola
- 🍔 Swiggy Delivery Tracking
- 🍕 Zomato Delivery Tracking
- 📍 Google Maps Live Location Sharing
- 👨‍👩‍👧‍👦 Life360
- 📱 Find My Device

---

## 🔮 Future Improvements

- 🔐 User Authentication
- 📍 Route History Tracking
- 📏 Distance Calculation
- 🚨 Geofencing Alerts
- 📱 Enhanced Mobile Responsiveness
- 💾 Location History Storage
- 📊 Analytics Dashboard
- 👥 Private Location Sharing Rooms

---

## 🚀 Deployment

Hosted on **Render**

🔗 Live Demo:  
https://realtime-tracker-c1cl.onrender.com/

---

## 👨‍💻 Author

**Shravani Jadhav**

🎓 B.Tech CSE (AI & Data Science)  

🔗 GitHub:  
https://github.com/iamshravanijadhav

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
