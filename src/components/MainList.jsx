import css from './MainList.module.css';
import RegisteredPet from './RegisteredPet.jsx';
const MainList = () => {
	return (
		<>
			<h3 className={css.title}>list of pets</h3>
			<p className={css.subtitle}>manage pets</p>
			<ul className={css.list}>
				<RegisteredPet />
				<RegisteredPet />
			</ul>
		</>
	);
};
export default MainList;
