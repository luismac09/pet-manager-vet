import css from './MainHeader.module.css';

const MainHeader = () => {
	return (
		<header className={css.header}>
			<h1 className={css.title}>
				Tracking our Clients&apos; pets {''}
				<span className={css.logo}>VetClinic</span>
			</h1>
		</header>
	);
};
export default MainHeader;
