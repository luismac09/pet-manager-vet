import { useState } from 'react';
import css from './MainContent.module.css';
import MainForm from './MainForm';
import MainList from './MainList';
const MainContent = () => {
	const [pets, setPets] = useState([]);
	return (
		<main className={css.main}>
			<section className={css.column}>
				<h2 className={css.title}>Vetclinic Pet</h2>
				<p className={css.subtitle}>register pets to manage</p>
				<MainForm pets={pets} setPets={setPets} />
			</section>
			<section className={css.column}>
				<MainList pets={pets} />
			</section>
		</main>
	);
};
export default MainContent;
