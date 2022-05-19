import PropTypes from 'prop-types';
import css from './RegisteredPet.module.css';
const RegisteredPet = ({ ...pet }) => {
	return (
		<li className={css.list}>
			<p className={css.item}>
				Pet:<span className={css.text}>{pet.name}</span>
			</p>
			<p className={css.item}>
				Owner:<span className={css.text}>{pet.owner}</span>
			</p>
			<p className={css.item}>
				Email:<span className={css.text}>{pet.email}</span>
			</p>
			<p className={css.item}>
				Discharge:<span className={css.text}>{pet.discharge}</span>
			</p>
			<p className={css.item}>
				Symptoms:
				<span className={css.text}>{pet.symptom}</span>
			</p>
		</li>
	);
};

RegisteredPet.propTypes = {
	pet: PropTypes.object
};
export default RegisteredPet;
