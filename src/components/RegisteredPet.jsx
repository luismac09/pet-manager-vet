import css from './RegisteredPet.module.css';
const RegisteredPet = () => {
	return (
		<li className={css.list__item}>
			<p className={css.list__row}>
				Pet:<span className={css.list__text}> beethoven</span>
			</p>
			<p className={css.list__row}>
				Owner:<span className={css.list__text}> Michael</span>
			</p>
			<p className={css.list__row}>
				Email:<span className={css.list__text}> Michael@mail.com</span>
			</p>
			<p className={css.list__row}>
				Alta:<span className={css.list__text}> 03/06/2022 </span>
			</p>
			<p className={css.list__row}>
				Symptoms:
				<span className={css.list__text}>
					{' '}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
					porro dolorum distinctio animi quasi beatae voluptates pariatur sit
					amet consectetur.
				</span>
			</p>
		</li>
	);
};

export default RegisteredPet;
