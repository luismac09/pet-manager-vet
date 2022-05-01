import css from './MainList.module.css';
const MainList = () => {
	return (
		<>
			<h3 className={css.title}>list of pets</h3>
			<p className={css.subtitle}>manage pets</p>
			<ul className={css.list}>
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
							porro dolorum distinctio animi quasi beatae voluptates pariatur
							sit amet consectetur.
						</span>
					</p>
				</li>
			</ul>
		</>
	);
};
export default MainList;
