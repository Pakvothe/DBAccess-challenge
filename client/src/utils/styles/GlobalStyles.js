import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
	margin: 16px 0;

    @media (max-width: 500px) {
		flex-direction: column;
        margin: 8px 0;
        padding: 8px;

        button {
            margin: 0px auto;
            width: 95%;
        }
	}
`