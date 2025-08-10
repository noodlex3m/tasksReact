import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
	return (
		<div>
			<header>
				<nav>
					<Link to="/">Головна</Link>
					<Link to="/about">Про нас</Link>
				</nav>
			</header>

			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
