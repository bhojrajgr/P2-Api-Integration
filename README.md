# GitHub User Search – REST API Integration

This project demonstrates a React Single Page Application (SPA) that integrates with the GitHub REST API to search for GitHub users dynamically. It showcases the use of **Axios**, dynamic rendering, loading/error states, and **debounced search input** for optimal performance.

## 🚀 Features

- 🔍 Search GitHub users in real time
- ⚡ Debounced API calls for better performance
- 🎯 Dynamic content rendering using React state
- 📡 Axios for fetching data from GitHub REST API
- 💡 Handles loading states and error messages
- 🧼 Clean and responsive UI (customizable)

## 📸 Demo

![App Screenshot](screenshot.png)

## 🛠️ Tech Stack

- **React** (CRA)
- **Axios**
- **JavaScript (ES6)**
- **CSS**

## 📁 Folder Structure

```
src/
├── App.js
├── App.css
├── GitHubSearch.js
├── index.js
```

## 🧰 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/bhojrajgr/P2-Api-Integration.git
   cd P2-Api-Integration
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser

## 🔎 How It Works

- User types into the search bar
- Input is debounced (delayed) using a timer to avoid frequent API calls
- Axios fetches data from the [GitHub Users API](https://api.github.com/users)
- Results are displayed as user cards with avatar and profile link

## 📦 API Reference

**Endpoint Used:**

```
GET https://api.github.com/search/users?q={username}
```

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
