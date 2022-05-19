import PropTypes from 'prop-types';
import css from './MainList.module.css';
import RegisteredPet from './RegisteredPet.jsx';
const MainList = ({ pets }) => {
	console.log(pets);
	const renderedPets =
		pets.length > 0 ? (
			pets.map(pet => <RegisteredPet key={pet.name} {...pet} />)
		) : (
			<p className={css.message}>no pets yet</p>
		);
	return (
		<>
			<h3 className={css.title}>list of pets</h3>
			<p className={css.subtitle}>manage pets</p>
			<ul className={css.list}>{renderedPets}</ul>
		</>
	);
};

MainList.propTypes = {
	pets: PropTypes.array.isRequired
};
export default MainList;
