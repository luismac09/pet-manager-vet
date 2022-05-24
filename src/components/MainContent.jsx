import { useState } from 'react';
import css from './MainContent.module.css';
import MainForm from './MainForm';
import MainList from './MainList';
const MainContent = () => {
	const [pets, setPets] = useState([]);
	const [pet, setPet] = useState({});
	const renderedText = pets[0] ? (
		<>
			<h2 className={css.title}>List of Pets </h2>
			<p className={css.subtitle}>Manage Pets</p>
		</>
	) : (
		<>
			<h2 className={css.title}>Pets</h2>
			<p className={css.subtitle}>Start adding pets</p>
		</>
	);
	return (
		<main className={css.main}>
			<section className={css.column}>
				<h2 className={css.title}>Vetclinic Pet</h2>
				<p className={css.subtitle}>Register pets to manage</p>
				<MainForm pets={pets} setPets={setPets} pet={pet} setPet={setPet} />
			</section>
			<section className={css.column}>
				<MainList pets={pets} setPet={setPet}>
					{renderedText}
				</MainList>
			</section>
		</main>
	);
};
export default MainContent;
