import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

export default function Button({ label, onClick }) {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}
