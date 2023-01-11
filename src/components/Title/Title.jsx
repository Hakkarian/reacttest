import PropTypes from 'prop-types';
import { TitleCss } from './Title.styled';

export const Title = ({ title }) => {
    return <TitleCss>{title}</TitleCss>
}

Title.propTypes = { 
    title: PropTypes.string.isRequired
}