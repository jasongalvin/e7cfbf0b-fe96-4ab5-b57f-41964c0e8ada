import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #333;
  color: white;
  padding: 1em;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2023 Countdown Timer</p>
    </FooterWrapper>
  );
}