import css from './MainForm.module.css';

const MainForm = () => {
	return (
		<form className={css.form}>
			<h3 className={css.form__title}>
				<img src='/form.svg' className={css.form__icon} />{' '}
				<span className={css.form__text}>INCLUYA AQUI LOS DATOS</span>
			</h3>
			<div className={css.form__field}>
				<label htmlFor='pet' className={css.form__label}>
					<input
						id='pet'
						type='text'
						className={css.form__input}
						placeholder="Pet's name"
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
					/>
				</label>
			</div>
			<div className={css.form__field}>
				<label htmlFor='discharge' className={css.form__label}>
					<input
						id='discharge'
						type='date'
						className={css.form__input}
						placeholder='Discharge'
					/>
				</label>
			</div>
			<div className={css.form__field}>
				<textarea
					className={css.form__textarea}
					id='symptom'
					placeholder="Describe your pet's symptoms"
				></textarea>
			</div>
			<input type='submit' value='Enviar' className={css.form__submit} />
		</form>
	);
};

export default MainForm;
