import styled from 'styled-components';
import Logo from '@ui/sidebar/Logo';
import MainNav from '@ui/sidebar/MainNav';

const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);

    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;

const Sidebar = () => {
    return (
        <StyledSidebar>
            <Logo />
            <MainNav />
        </StyledSidebar>
    );
};

export default Sidebar;
