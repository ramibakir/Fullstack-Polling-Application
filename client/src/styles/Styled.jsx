import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
`;

export const Error = styled.div`
  color: ${(props) => props.theme.colors.warning};
`;

export const Heading = styled.h1`
  color: ${({ theme: { colors } }) => colors.default};
`;

export const DivWithChildren = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    max-width: 350px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    border: 1px solid red;
  }
`;

export const Button = styled.button`
  background: white;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0.5em 1em;
  padding: 1em 1em;
  text-decoration: none;

  &:hover {
    background: #363640;
    border-color: #363640;
    color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 50%;
  margin: 0 100px;
`;

export const CreateButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export const SaveButton = styled(Button)`
  color: black;
  border-color: black;
`;

export const ViewPollsButton = styled(Button)`
  color: darkgreen;
  border-color: darkgreen;
`;

export const LoginButton = styled(Button)`
  color: darkblue;
  border-color: darkblue;
`;

export const Input = styled.input`
  color: darkolivegreen;
  font-size: 1em;
  border: 2px solid darkolivegreen;
  border-radius: 3px;
  margin: 1em;
  min-width: 10em;
  height: 3em;
  padding: 10px;
`;

export const InOutForm = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 60%;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
`;

export const ShowText = styled.p`
  margin: 0 auto;
  font-size: 1em;
  font-weight: 700;
`;

export const Section = styled.section`
  margin: 0 auto;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Polls = styled.div`
  grid-template-columns: repeat(3, 1fr);
  background-color: whitesmoke;
  border-radius: 4px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.26);
  width: 300px;
`;

export const CardSection = styled(Section)`
  display: flex;
  flex-direction: column;
`;

export const CardBox = styled(Cards)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
