import styled from 'styled-components';
import { Link } from "react-router-dom";
import Container from "../Container";

const Navbar = () => (
	<StyledNavbar>
		<Container>
			<Link to='/'>DBAccess-Challenge</Link>
			<div>
				<Link to='/courses'>Courses</Link>
				<Link to='/tutors'>Tutors</Link>
				<Link to='/students'>Students</Link>
				<Link to='/'>Daily cronogram</Link>
			</div>
		</Container>
	</StyledNavbar>
);

export default Navbar;


const StyledNavbar = styled.nav`
    background-color: #1aafa5;
	padding: 16px 32px;
	text-align: center;

	div {
		display: flex;
		align-items: center;
        justify-content: space-between;

        a {
            color: #fafafa;
            text-decoration: none;
            font-weight: 500;
        }

        div {
            a {
                margin-left: 16px;
            }
        }
	}

	@media (max-width: 500px) {
		padding: 10px;

		div {
			flex-direction: column;

			a{
				margin-bottom: 10px;
				font-size: 22px;
			}
			div {
				flex-direction: column-reverse;

				a {
					margin-left: 0;
					margin-bottom: 8px;
					font-size: 18px;
				}
			}
		}
	}
`
