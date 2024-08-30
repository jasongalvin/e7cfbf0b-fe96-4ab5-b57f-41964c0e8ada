import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #333;
  color: white;
  padding: 1em;
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>Countdown Timer</h1>
    </HeaderWrapper>
  );
}