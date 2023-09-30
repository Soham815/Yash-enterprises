import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TopCompanies from "./components/TopComapnies";
import "./style.css";

function App() {
	return (
		<main>
			<Header></Header>
			<div className="container container--orange">
				<Hero></Hero>
				<Features></Features>
				<TopCompanies></TopCompanies>
			</div>
		</main>
	);
}

export default App;
