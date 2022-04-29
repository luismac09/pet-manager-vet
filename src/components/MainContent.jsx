import css from './MainContent.module.css';
import MainForm from './MainForm';
const MainContent = () => {
	return (
		<main className={css.main}>
			<section className={css.column}>
				<h2 className={css.main__title}>Vetclinic Pet Control </h2>
				<p className={css.main__subtitle}>register pets to manage</p>
				<MainForm />
			</section>
			<section className={css.column}></section>
		</main>
	);
};
export default MainContent;
