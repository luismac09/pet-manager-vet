import css from './RegisteredPet.module.css';
const RegisteredPet = () => {
	return (
		<li className={css.list}>
			<p className={css.item}>
				Pet:<span className={css.text}>beethoven</span>
			</p>
			<p className={css.item}>
				Owner:<span className={css.text}>Michael</span>
			</p>
			<p className={css.item}>
				Email:<span className={css.text}>Michael@mail.com</span>
			</p>
			<p className={css.item}>
				Discharge:<span className={css.text}>03/06/2022 </span>
			</p>
			<p className={css.item}>
				Symptoms:
				<span className={css.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
					porro dolorum distinctio animi quasi beatae voluptates pariatur sit
					amet consectetur.
				</span>
			</p>
		</li>
	);
};

export default RegisteredPet;
