import { HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ButtonIcon from '@ui/ButtonIcon';

const StyledHeaderMenu = styled.ul`
    display: flex;
    gap: 0.4rem;
`;

const HeaderMenu = () => {
    const navigate = useNavigate();
    return (
        <StyledHeaderMenu>
            <li>
                <ButtonIcon onClick={() => navigate('/')}>
                    <HiOutlineUser />
                </ButtonIcon>
            </li>
        </StyledHeaderMenu>
    );
};

export default HeaderMenu;
