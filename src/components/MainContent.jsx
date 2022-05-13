import css from './MainContent.module.css';
import MainForm from './MainForm';
import MainList from './MainList';
const MainContent = () => {
	return (
		<main className={css.main}>
			<section className={css.column}>
				<h2 className={css.main__title}>Vetclinic Pet</h2>
				<p className={css.main__subtitle}>register pets to manage</p>
				<MainForm />
			</section>
			<section className={css.column}>
				<MainList />
			</section>
		</main>
	);
};
export default MainContent;
