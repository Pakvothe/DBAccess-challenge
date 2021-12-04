import PropTypes from "prop-types";
import styled from 'styled-components';

const PageLayout = ({ children }) => {
	return (
		<StyledLayout>
			<StyledDiv>{children}</StyledDiv>
		</StyledLayout>
	);
};

export default PageLayout;

PageLayout.propTypes = {
	children: PropTypes.node,
};

const StyledLayout = styled.main`
	display: flex;
	margin: 51px 32px;
	justify-content: center;
	min-height: 65vh;
	border-radius: 10px;
	h3 {
		text-align: center;
		margin: 16px 0;
	}
	@media (max-width: 500px) {
		margin: 16px;
		padding: 8px;
		h3{
			margin: 10px
		}

		p{
			text-align: center;
		}
	}
`

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`
