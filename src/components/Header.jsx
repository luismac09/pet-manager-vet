import css from './Header.module.css';

const Header = () => {
	return (
		<header className={css.header}>
			<h1 className={css.title}>
				Tracking our Clients&apos; pets {''}
				<span className={css.logo}>VetClinic</span>
			</h1>
		</header>
	);
};
export default Header;
