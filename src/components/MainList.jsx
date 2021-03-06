import PropTypes from 'prop-types';
import css from './MainList.module.css';
import RegisteredPet from './RegisteredPet.jsx';
const MainList = ({ pets, setPet, deletePet, children }) => {
	const renderedPets =
		pets.length > 0 ? (
			pets.map(data => (
				<RegisteredPet
					key={data.id}
					{...data}
					setPet={setPet}
					deletePet={deletePet}
				/>
			))
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
	children: PropTypes.object.isRequired,
	setPet: PropTypes.func.isRequired,
	deletePet: PropTypes.func.isRequired
};
export default MainList;
