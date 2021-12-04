import styled from 'styled-components';
import { Link } from "react-router-dom";
import Head from "../../components/Head";
import SadFace from "../../assets/svg/SadFace";
import PageLayout from "../../components/PageLayout";

const Page404 = () => (
	<>
		<Head title="Page not found | DBAccess" />
		<PageLayout>
			<Flex>
				<SadFace />
				<h2>The page you are trying to access does not exist</h2>
				<p>
					Check for possible typing errors or <Link to="/">back to home</Link>.
				</p>
			</Flex>
		</PageLayout>
	</>
);

export default Page404;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;

	h2 {
		margin: 16px 0;
	}
`