<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=32&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=📚+ScholarSync+LMS;🎓+Smart+Learning+Platform;⚡+Built+for+Students+%26+Instructors" alt="Typing SVG" />

<br/>

[![MIT License](https://img.shields.io/badge/License-MIT-6366f1?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)

[![Vite](https://img.shields.io/badge/Vite-⚡-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Express](https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![JWT](https://img.shields.io/badge/JWT-Auth-FB015B?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io)

<br/>

> 🎓 **ScholarSync** is a full-stack Learning Management System with dedicated student & instructor portals, real-time grading, assignment tracking, and a rich library — all secured with role-based JWT auth.

</div>

---

## 🌟 Feature Highlights

<table>
<tr>
<td width="50%">

### 🧑‍🎓 Student Experience
- 🔐 Secure signup & login
- 📖 Browse, search & filter courses
- ✅ Enroll & track module progress
- 📝 Submit assignments & view grades
- 📊 GPA calculator
- 📚 Library with saved resources & reading progress
- 🗂️ Personal dashboard with upcoming work

</td>
<td width="50%">

### 🧑‍🏫 Instructor Experience
- 🏗️ Create / update / delete courses
- 📦 Add modules & announcements
- 📋 Manage assignments & view submissions
- ✏️ Grade student work
- 📁 Publish library resources
- 📈 Instructor analytics dashboard

</td>
</tr>
</table>

### 🔒 Backend Protections

| Shield | Description |
|--------|-------------|
| 🔑 JWT Authentication | Stateless, secure token-based auth |
| 🛡️ Role-Based Authorization | Middleware enforcing student/instructor roles |
| 🚦 API Rate Limiting | Guards against abuse via Express Rate Limit |
| ⚠️ Centralized Error Handling | Consistent, structured error responses |

---

## 🛠️ Tech Stack

<div align="center">

### 🖥️ Frontend

[![React](https://skillicons.dev/icons?i=react)](https://react.dev)
[![Vite](https://skillicons.dev/icons?i=vite)](https://vitejs.dev)
[![TailwindCSS](https://skillicons.dev/icons?i=tailwind)](https://tailwindcss.com)
[![TypeScript](https://skillicons.dev/icons?i=ts)](https://www.typescriptlang.org)

`React 19` · `Vite` · `React Router` · `Axios` · `Tailwind CSS v4` · `Framer Motion` · `Lucide React`

### ⚙️ Backend

[![Node.js](https://skillicons.dev/icons?i=nodejs)](https://nodejs.org)
[![Express](https://skillicons.dev/icons?i=express)](https://expressjs.com)
[![MongoDB](https://skillicons.dev/icons?i=mongodb)](https://mongodb.com)
[![TypeScript](https://skillicons.dev/icons?i=ts)](https://www.typescriptlang.org)

`Node.js` · `Express` · `TypeScript` · `MongoDB + Mongoose` · `JWT` · `bcryptjs` · `Zod` · `CORS`

</div>

---

## 📁 Project Structure

```text
Scholar-Sync/
├── 🖥️  client/
│   └── src/
│       ├── 🌐 api/                # Frontend API wrappers
│       ├── 🧩 components/         # Shared UI + route guards
│       ├── 🔄 context/            # Auth context
│       ├── 🗂️  layouts/            # Public / student / instructor layouts
│       ├── 📄 pages/              # Student & public pages
│       └── 📄 pages/instructor/   # Instructor pages
│
├── ⚙️  server/
│   └── src/
│       ├── 🗄️  config/             # DB connection
│       ├── 🎮 controllers/        # Route handlers & business logic
│       ├── 🛡️  middleware/         # Auth, RBAC, error handling
│       ├── 📦 models/             # Mongoose schemas
│       ├── 🛤️  routes/             # API route definitions
│       ├── 🌱 seed/               # Database seeding script
│       ├── 🔧 utils/              # JWT utilities
│       ├── 🚀 app.ts              # Express app config
│       └── 🏁 server.ts           # Server bootstrap
│
└── 📐 diagrams/                   # System design / UML docs
```

---

## 🏗️ Architecture

```
🖥️  React (Vite)
      ↓
📡  Axios API Client  ──── attaches JWT from localStorage
      ↓
🛤️  Express Routes  (/api/*)
      ↓
🛡️  Middleware Pipeline  (CORS → JSON → Rate Limit → Auth → RBAC)
      ↓
🎮  Controllers  (business logic)
      ↓
📦  Mongoose Models
      ↓
🗄️  MongoDB
```

---

## ⚡ Getting Started

### 📋 Prerequisites

![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=flat-square&logo=nodedotjs)
![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat-square&logo=npm)
![MongoDB](https://img.shields.io/badge/MongoDB-local%20or%20Atlas-47A248?style=flat-square&logo=mongodb)

### 1️⃣ Clone & Install

```bash
git clone <your-repo-url>
cd Scholar-Sync

# Install backend dependencies
cd server && npm install

# Install frontend dependencies
cd ../client && npm install
```

### 2️⃣ Configure Environment Variables

**`server/.env`**
```env
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>
JWT_SECRET=change_this_secret
JWT_EXPIRES_IN=7d
PORT=5001
CLIENT_URL=http://localhost:5173
```

**`client/.env`**
```env
VITE_API_BASE_URL=http://localhost:5001/api
```

> 💡 `PORT` defaults to `5000` if unset — set it to `5001` to match the Vite proxy config.

### 3️⃣ Run the App

```bash
# Terminal 1 — Backend
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

🌐 Open **http://localhost:5173** in your browser.

### 🌱 Seed Demo Data *(optional)*

```bash
cd server && npm run seed
# Prints sample student + instructor credentials to console
```

---

## 🗺️ API Reference

Base URL: `/api`

<details>
<summary>🏥 <strong>Health</strong></summary>

| Method | Endpoint | Auth |
|--------|----------|------|
| `GET` | `/health` | None |

</details>

<details>
<summary>🔐 <strong>Auth</strong></summary>

| Method | Endpoint | Auth |
|--------|----------|------|
| `POST` | `/auth/signup` | None |
| `POST` | `/auth/login` | None |
| `POST` | `/auth/instructor/signup` | None |
| `POST` | `/auth/instructor/login` | None |
| `GET` | `/auth/me` | ✅ Required |

</details>

<details>
<summary>📚 <strong>Courses</strong></summary>

| Method | Endpoint | Role |
|--------|----------|------|
| `GET` | `/courses` | 🔐 Auth |
| `GET` | `/courses/instructor/mine` | 🧑‍🏫 Instructor |
| `GET` | `/courses/:idOrSlug` | 🔐 Auth |
| `POST` | `/courses` | 🧑‍🏫 Instructor |
| `PUT` | `/courses/:id` | 🧑‍🏫 Instructor |
| `DELETE` | `/courses/:id` | 🧑‍🏫 Instructor |
| `POST` | `/courses/:id/modules` | 🧑‍🏫 Instructor |
| `POST` | `/courses/:id/announcements` | 🧑‍🏫 Instructor |

</details>

<details>
<summary>📋 <strong>Enrollments</strong></summary>

| Method | Endpoint | Role |
|--------|----------|------|
| `GET` | `/enrollments` | 🧑‍🎓 Student |
| `POST` | `/enrollments` | 🧑‍🎓 Student |
| `PUT` | `/enrollments/:id/module-complete` | 🧑‍🎓 Student |

</details>

<details>
<summary>📝 <strong>Assignments & Submissions</strong></summary>

| Method | Endpoint | Role |
|--------|----------|------|
| `GET` | `/assignments` | 🔐 Auth |
| `GET` | `/assignments/:idOrSlug` | 🔐 Auth |
| `POST` | `/assignments` | 🧑‍🏫 Instructor |
| `PUT` | `/assignments/:id` | 🧑‍🏫 Instructor |
| `DELETE` | `/assignments/:id` | 🧑‍🏫 Instructor |
| `POST` | `/submissions` | 🧑‍🎓 Student |
| `GET` | `/submissions` | 🧑‍🏫 Instructor |
| `GET` | `/submissions/my` | 🧑‍🎓 Student |

</details>

<details>
<summary>🏆 <strong>Grades</strong></summary>

| Method | Endpoint | Role |
|--------|----------|------|
| `GET` | `/grades` | 🧑‍🎓 Student |
| `GET` | `/grades/gpa` | 🧑‍🎓 Student |
| `POST` | `/grades` | 🧑‍🏫 Instructor |

</details>

<details>
<summary>📖 <strong>Library</strong></summary>

| Method | Endpoint | Role |
|--------|----------|------|
| `GET` | `/library` | 🔐 Auth |
| `GET` | `/library/recent` | 🧑‍🎓 Student |
| `GET` | `/library/saved` | 🧑‍🎓 Student |
| `POST` | `/library/saved` | 🧑‍🎓 Student |
| `PUT` | `/library/progress` | 🧑‍🎓 Student |
| `GET` | `/library/:idOrSlug` | 🔐 Auth |
| `POST` | `/library` | 🧑‍🏫 Instructor |

</details>

<details>
<summary>📊 <strong>Dashboard</strong></summary>

| Method | Endpoint | Role |
|--------|----------|------|
| `GET` | `/dashboard/overview` | 🧑‍🎓 Student |
| `GET` | `/dashboard/instructor` | 🧑‍🏫 Instructor |

</details>

---

## 📜 Scripts

### 🖥️ Client

| Command | Description |
|---------|-------------|
| `npm run dev` | ⚡ Start Vite dev server |
| `npm run build` | 📦 Production build |
| `npm run preview` | 👁️ Preview production build |
| `npm run lint` | 🔍 Run ESLint |

### ⚙️ Server

| Command | Description |
|---------|-------------|
| `npm run dev` | 🔄 Start with ts-node-dev (hot reload) |
| `npm run build` | 🏗️ Compile TypeScript → `dist/` |
| `npm start` | 🚀 Run compiled server |
| `npm run seed` | 🌱 Seed the database |

---

## 🚀 Deployment

### Backend — Vercel
`server/vercel.json` is pre-configured for Vercel Node.js deployment using `src/app.ts`.

### Frontend — Static Host
Deploy the Vite build output to any static host (Vercel / Netlify / Cloudflare Pages):
```bash
cd client && npm run build
```

> ⚠️ Ensure `VITE_API_BASE_URL` points to the deployed backend and the server's `CLIENT_URL` matches your frontend origin.

---

## 🤝 Contributing

```
1. 🍴 Fork the repo
2. 🌿 Create a feature branch
3. 🛠️  Make your changes in client/ and/or server/
4. ✅ Run lint + build locally
5. 📬 Open a pull request with clear scope and test notes
```

---

## ⚠️ Known Issues

> 🐛 `client/vite.config.js` proxies `/api` → `http://localhost:5001`, but the backend defaults to port `5000` unless `PORT` is set explicitly.
> **Fix:** Add `PORT=5001` to `server/.env`.

---

## 📐 Diagrams

System design and UML documentation are available in the [`diagrams/`](./diagrams) directory.

---

<div align="center">

Made with ❤️ by the ScholarSync Team

![Wave](https://capsule-render.vercel.app/api?type=waving&color=6366F1&height=100&section=footer)

</div>
