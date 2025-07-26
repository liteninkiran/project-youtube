import styled from 'styled-components';

const StyledLogo = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
`;

const Img = styled.img`
    width: 50px;
`;

const P = styled.p`
    margin-left: 15px;
    font-size: 16pt;
    transform: scaleY(1.6);
`;

const Logo = () => (
    <StyledLogo>
        <Img src={'/YouTube.svg'} alt='Logo' />
        <P>YouTube</P>
    </StyledLogo>
);

export default Logo;
