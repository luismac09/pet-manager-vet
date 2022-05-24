import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import css from './MainForm.module.css';
import SuccessMessage from './SuccessMessage';

const MainForm = ({ pets, setPets, pet, setPet }) => {
	const [name, setName] = useState('');
	const [owner, setOwner] = useState('');
	const [email, setEmail] = useState('');
	const [discharge, setDischarge] = useState('');
	const [symptom, setSymptom] = useState('');

	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	useEffect(() => {
		if (Object.keys(pet).length > 0) {
			setName(pet.name);
			setOwner(pet.owner);
			setEmail(pet.email);
			setDischarge(pet.discharge);
			setSymptom(pet.symptom);
		}
	}, [pet]);
	const randomizeId = () => {
		return Math.random().toString(36).substring(2) + Date.now().toString(36);
	};
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
		if (pet.id) {
			const updatedData = pets.map(currentData =>
				currentData.id === pet.id
					? { id: pet.id, name, owner, email, discharge, symptom }
					: currentData
			);
			setPets(updatedData);
			setPet({});
		} else {
			setPets([
				...pets,
				{ id: randomizeId(), name, owner, email, discharge, symptom }
			]);
		}
		setName('');
		setOwner('');
		setEmail('');
		setDischarge('');
		setSymptom('');
	};
	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<h3 className={css.title}>
				<img src='/form.svg' className={css.icon} alt='form' />{' '}
				<span className={css.form__text}>include your data here</span>
			</h3>
			<div className={css.field}>
				{error && (
					<ErrorMessage>
						<p>All fields are required</p>
					</ErrorMessage>
				)}
				{success && (
					<SuccessMessage>
						<p>Sent Successfully</p>
					</SuccessMessage>
				)}
				<label htmlFor='pet' className={css.label}>
					<input
						id='pet'
						type='text'
						className={css.input}
						placeholder="Pet's name"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</label>
			</div>
			<div className={css.field}>
				<label htmlFor='owner' className={css.label}>
					<input
						id='owner'
						type='text'
						className={css.input}
						placeholder="Owner's name"
						value={owner}
						onChange={e => {
							setOwner(e.target.value);
						}}
					/>
				</label>
			</div>
			<div className={css.field}>
				<label htmlFor='email' className={css.label}>
					<input
						id='email'
						type='email'
						className={css.input}
						placeholder='Email'
						value={email}
						onChange={e => {
							setEmail(e.target.value);
						}}
					/>
				</label>
			</div>
			<div className={css.field}>
				<label htmlFor='discharge' className={css.label}>
					<input
						id='discharge'
						type='date'
						className={css.input}
						value={discharge}
						min='2022-05-12'
						max='2022-05-31'
						onChange={e => {
							setDischarge(e.target.value);
						}}
					/>
				</label>
			</div>
			<div className={css.field}>
				<textarea
					className={css.textarea}
					id='symptom'
					placeholder="Describe your pet's symptoms"
					value={symptom}
					onChange={e => {
						setSymptom(e.target.value);
					}}
				></textarea>
			</div>
			<input
				type='submit'
				value={pet.id ? 'Edit Pet' : 'Add Pet'}
				className={css.submit}
			/>
		</form>
	);
};
MainForm.propTypes = {
	pet: PropTypes.object.isRequired,
	setPet: PropTypes.func.isRequired,
	pets: PropTypes.array.isRequired,
	setPets: PropTypes.func.isRequired
};
export default MainForm;
