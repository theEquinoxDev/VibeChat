# 🌐 VibeChat - Real-Time Chat Application

---

## 🔥 Project Overview

**VibeChat** is a modern, real-time chat application. It enables users to connect seamlessly with the following features:

- Secure user authentication (signup, login, logout)
- Profile picture uploads via Cloudinary
- Real-time messaging powered by Socket.io
- Online/offline status indicators for contacts
- Persistent chat history stored in MongoDB
- Responsive and intuitive UI with TailwindCSS
- Toast notifications for user actions

Built with the **MERN stack (MongoDB, Express, React, Node.js)**, integrated with **Socket.io** for real-time communication and **Cloudinary** for media management.

---

## 🛠 Features

- **Authentication**: Secure signup, login, and logout functionality.
- **Profile Management**: Upload and update profile pictures.
- **Real-Time Messaging**: Send and receive text/image messages instantly.
- **Contact Status**: View online/offline status of contacts.
- **Chat History**: Messages stored securely in MongoDB.
- **Responsive Design**: Mobile-friendly UI with TailwindCSS.
- **Notifications**: Toast alerts for user actions (e.g., message sent, profile updated).

---

## ⚙️ Tech Stack

| Layer         | Technology                  |
| ------------- | --------------------------- |
| **Frontend**  | React, TailwindCSS, Zustand |
| **Backend**   | Node.js, Express, MongoDB   |
| **Real-Time** | Socket.io                   |
| **Media**     | Cloudinary                  |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (Atlas account or local MongoDB instance)
- **Cloudinary** account for media uploads
- **npm** as a package manager
- A modern web browser (e.g., Chrome, Firefox)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/theEquinoxDev/VibeChat.git
cd VibeChat
```

#### 2. Backend Setup

```bash
cd backend
npm install
```

# Create a .env file based on the .env.example:

# .env file

    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    CLIENT_URL=http://localhost:5173
    NODE_ENV=development

# Start the backend server.

```bash
npm run dev
```

#### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

# Open browser: http://localhost:5173

## ⚡ Usage

- Sign up or log in.
- Update your profile picture.
- Select a contact or start a new chat.
- Send text or image messages in real-time.
- Watch online/offline indicators update instantly.

## 🌐 Live Demo

[Visit](https://vibechat-nq1r5.sevalla.app/)
