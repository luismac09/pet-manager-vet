import PropTypes from 'prop-types';
import css from './RegisteredPet.module.css';
const RegisteredPet = data => {
	const { id, name, owner, email, discharge, symptom, setPet, deletePet } =
		data;
	const handleDelete = () => {
		const res = confirm('you are sure to remove it?');
		if (res) deletePet(id);
	};
	return (
		<li className={css.list}>
			<p className={css.item}>
				Pet:<span className={css.text}>{name}</span>
			</p>
			<p className={css.item}>
				Owner:<span className={css.text}>{owner}</span>
			</p>
			<p className={css.item}>
				Email:<span className={css.text}>{email}</span>
			</p>
			<p className={css.item}>
				Discharge:<span className={css.text}>{discharge}</span>
			</p>
			<p className={css.item}>
				Symptoms:
				<span className={css.text}>{symptom}</span>
			</p>
			<div className={css.field}>
				<button
					type='button'
					className={css.button}
					onClick={() => setPet(data)}
				>
					Edit
				</button>
				<button
					type='button'
					className={`${css.button} ${css.buttonRed}`}
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

RegisteredPet.propTypes = {
	data: PropTypes.object,
	setPet: PropTypes.func.isRequired
};
export default RegisteredPet;
