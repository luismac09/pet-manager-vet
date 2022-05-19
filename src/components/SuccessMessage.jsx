import PropTypes from 'prop-types';
import css from './SuccessMessage.module.css';
const SuccessMessage = ({ children }) => {
	return (
		<div className={css.success}>
			{children}
			<img className={css.icon} src='/check.svg' alt='icon success' />
		</div>
	);
};
SuccessMessage.propTypes = {
	children: PropTypes.element.isRequired
};

export default SuccessMessage;
