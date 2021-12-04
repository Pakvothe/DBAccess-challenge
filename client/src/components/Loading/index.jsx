import PropTypes from "prop-types";
import styled from 'styled-components';
import PageLayout from "../PageLayout";

const Loading = ({ text }) => {
    return (
        <PageLayout>
            <Flex>
                <Spinner /> 
                {text && <h2>{text}</h2>}
            </Flex>
        </PageLayout>
    );
};

export default Loading;

Loading.propTypes = {
    text: PropTypes.string,
};

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
`
const Spinner = styled.div`
    width: 50px;
	height: 50px;
	border: 10px solid #7209b7;
	border-left-color: rgb(155, 56, 221);
	border-radius: 50%;
	animation: spin 650ms infinite linear;
	margin-bottom: 16px;

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`