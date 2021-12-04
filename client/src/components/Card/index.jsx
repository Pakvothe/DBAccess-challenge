import PropTypes from "prop-types";
import styled from 'styled-components';

const Card = ({ children }) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}

export default Card

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border: transparent;
    margin: 16px;
    padding: 16px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    min-width: 350px;
    border-radius: 10px;
    h4{
        text-align: center;
    }

    @media (max-width: 500px) {
        min-width: 90%;
        margin: 12px 0;
        div {
            display: flex;
            justify-content: center;
            width: 100%;
        }
	}
`

Card.propTypes = {
    children: PropTypes.node,
};