import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './MainForm.module.css';
const MainForm = ({ pets, setPets }) => {
	const [name, setName] = useState('');
	const [owner, setOwner] = useState('');
	const [email, setEmail] = useState('');
	const [discharge, setDischarge] = useState('');
	const [symptom, setSymptom] = useState('');

	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		setError(true);
		setSuccess(false);
		if (![name, owner, email, discharge, symptom].includes('')) {
			const interval = setInterval(() => {
				setSuccess(true);
			}, 0);
			setTimeout(() => {
				clearInterval(interval);
				setSuccess(false);
			}, 4000);
			setError(false);
		}

		setPets([...pets, { name, owner, email, discharge, symptom }]);

		setName('');
		setOwner('');
		setEmail('');
		setDischarge('');
		setSymptom('');
	};
	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<h3 className={css.form__title}>
				<img src='/form.svg' className={css.form__icon} alt='form' />{' '}
				<span className={css.form__text}>include your data here</span>
			</h3>
			<div className={css.form__field}>
				{error && <span className={css.error}>All fields are required</span>}
				{success && <span className={css.success}>Sent Successfully</span>}
				<label htmlFor='pet' className={css.form__label}>
					<input
						id='pet'
						type='text'
						className={css.form__input}
						placeholder="Pet's name"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</label>
			</div>
			<div className={css.form__field}>
				<label htmlFor='owner' className={css.form__label}>
					<input
						id='owner'
						type='text'
						className={css.form__input}
						placeholder="Owner's name"
						value={owner}
						onChange={e => {
							setOwner(e.target.value);
						}}
					/>
				</label>
			</div>
			<div className={css.form__field}>
				<label htmlFor='email' className={css.form__label}>
					<input
						id='email'
						type='email'
						className={css.form__input}
						placeholder='Email'
						value={email}
						onChange={e => {
							setEmail(e.target.value);
						}}
					/>
				</label>
			</div>
			<div className={css.form__field}>
				<label htmlFor='discharge' className={css.form__label}>
					<input
						id='discharge'
						type='date'
						className={css.form__input}
						value={discharge}
						min='2022-05-12'
						max='2022-05-31'
						onChange={e => {
							setDischarge(e.target.value);
						}}
					/>
				</label>
			</div>
			<div className={css.form__field}>
				<textarea
					className={css.form__textarea}
					id='symptom'
					placeholder="Describe your pet's symptoms"
					value={symptom}
					onChange={e => {
						setSymptom(e.target.value);
					}}
				></textarea>
			</div>
			<input type='submit' value='Add Pet' className={css.form__submit} />
		</form>
	);
};
MainForm.propTypes = {
	pets: PropTypes.array.isRequired,
	setPets: PropTypes.func.isRequired
};
export default MainForm;
