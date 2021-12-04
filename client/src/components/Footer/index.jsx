import styled from 'styled-components';
import Container from "../Container";

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<p>
					Developed by{" "}
					<a href="https://www.franco-ortiz.com/" target="_blank" rel="noopener noreferrer">
						Franco Ortiz
					</a>
				</p>
			</Container>
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.footer`
 	margin-top: auto;
	height: 51px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 32px;
	border-top: 2px solid #1aafa5;

	& > div:only-child {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
	}

	a {
		text-decoration: none;
		color: #7209b7;
		font-weight: 600;
	}

	@media (max-width: 500px) {
		padding: 24px;
		& > div:only-child {
			font-size: 16px;
		}

	}
`
