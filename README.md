# 🎬 Movie Discovery App

A modern React-based Movie Discovery Application built using TMDB API.  
Users can explore trending movies, search films, view detailed movie information, and save favorites to a personal watchlist.

---

# 🚀 Features

## 🏠 Home Page
- Cinematic Hero Banner
- 3D Swiper Slider
- Trending Movies
- Popular Movies
- Top Rated Movies
- Upcoming Movies

## 🔍 Search Movies
- Live movie search
- Debounced API calls
- Empty state UI
- Responsive search layout

## 🎥 Movie Details
- Full movie information
- Backdrop banner
- Genres
- Ratings
- Runtime
- Production companies
- Languages
- IMDb redirect

## ❤️ Watchlist
- Add/remove movies
- Heart icon interaction
- LocalStorage persistence
- Watchlist page

## 📱 Responsive Design
- Mobile friendly
- Tablet support
- Desktop optimized

---

# 🛠️ Tech Stack

- React JS
- React Router DOM
- Swiper JS
- Axios
- TMDB API
- React Icons
- CSS3

---

# 📂 Project Structure

```bash
src/
│
├── assets/
├── components/
│   ├── Footer
│   ├── HeroBanner
│   ├── MovieCard
│   ├── MultiSlider
│   └── Navbar
│
├── pages/
│   ├── Home
│   ├── MovieDetails
│   ├── Search
│   └── Watchlist
│
├── routes/
├── services/
├── utils/
└── App.jsx
```

---

# ⚙️ Installation

## 1 Clone Repository

```bash
git clone <your-repository-url>
```

## 2 Navigate to Project

```bash
cd movie-discovery-app
```

## 3 Install Dependencies

```bash
npm install
```

## 4 Create Environment File

Create `.env` file in root directory.

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

## 5 Start Development Server

```bash
npm run dev
```

---

# 🔑 TMDB API

This project uses TMDB API.

Get your API key from:

https://www.themoviedb.org/settings/api

---

# 📸 Screenshots

## Home Page
- Hero Banner
- Movie Sliders
- Responsive Layout

## Search Page
- Live Search
- Dynamic Results

## Movie Details
- Fullscreen Banner
- Movie Information

## Watchlist
- Favorite Movies
- Persistent Storage

---

# 🌟 Future Improvements

- Context API for Watchlist
- Authentication
- Trailer Integration
- Infinite Scrolling
- Skeleton Loaders
- Dark/Light Theme
- Genre Filtering
- Pagination
- Firebase Backend

---

# 📄 License

This project is for learning and portfolio purposes.

---

# 👨‍💻 Author

Developed with React JS and TMDB API.
```