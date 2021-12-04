import PropTypes from "prop-types";
import styled from 'styled-components';

const Button = ({ text, color, fill, className, onClick, type }) => {
    return (
        <StyledButton color={color} fill={fill} className={className} onClick={onClick} type={type}>
            {text}
        </StyledButton>
    )
}

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    fill: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
};

const StyledButton = styled.button`
    color: ${({ color, fill }) => fill ? '#fafafa' : (color === 'primary' ? '#7209b7' : '#f72585')};
    background-color: ${({ color, fill }) => fill ? (color === 'primary' ? '#7209b7' : '#f72585') : 'transparent'};;
    outline: 2px solid  ${({ color }) => color === 'primary' ? '#7209b7' : '#f72585'};
    border: none;
    padding: 8px 16px;
    margin: 16px;
    cursor: pointer;
    max-width: 300px;
	border-radius: 5px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
        color: #fafafa;
        background-color: ${({ color, fill }) => fill ? (color === 'primary' ? '#58068f' : '#c91566') : (color === 'primary' ? '#7209b7' : '#f72585')};
        outline: 2px solid  ${({ color }) => color === 'primary' ? '#7209b7' : '#f72585'};
    }

    @media (max-width: 500px) {
        min-width: 50%;
        min-height: 32px;
        padding: 2px 8px;
        margin: 12px 8px;
        font-size: 12px;
	}

`