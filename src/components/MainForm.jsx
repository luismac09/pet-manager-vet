import { useState } from 'react';
import css from './MainForm.module.css';
const MainForm = () => {
	const [name, setName] = useState('');
	const [owner, setOwner] = useState('');
	const [email, setEmail] = useState('');
	const [discharge, setDischarge] = useState('');
	const [symptom, setSymptom] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		console.log('sending form data....');
	};
	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<h3 className={css.form__title}>
				<img src='/form.svg' className={css.form__icon} alt='form' />{' '}
				<span className={css.form__text}>INCLUYA AQUI LOS DATOS</span>
			</h3>
			<div className={css.form__field}>
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
			<input type='submit' value='Enviar' className={css.form__submit} />
		</form>
	);
};

export default MainForm;
