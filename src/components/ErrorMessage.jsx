import PropTypes from 'prop-types';
import css from './ErrorMessage.module.css';
const ErrorMessage = ({ children }) => {
	return (
		<div className={css.error}>
			{children}
			<img className={css.icon} src='/error.svg' alt='error-icon' />
		</div>
	);
};
ErrorMessage.propTypes = {
	children: PropTypes.element.isRequired
};
export default ErrorMessage;
