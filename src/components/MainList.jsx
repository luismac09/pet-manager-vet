import PropTypes from 'prop-types';
import css from './MainList.module.css';
import RegisteredPet from './RegisteredPet.jsx';
const MainList = ({ pets, children }) => {
	const renderedPets =
		pets.length > 0 ? (
			pets.map(pet => <RegisteredPet key={pet.id} {...pet} />)
		) : (
			<p className={css.message}>no pets yet</p>
		);
	return (
		<>
			{children}
			<ul className={css.list}>{renderedPets}</ul>
		</>
	);
};

MainList.propTypes = {
	pets: PropTypes.array.isRequired,
	children: PropTypes.object.isRequired
};
export default MainList;
