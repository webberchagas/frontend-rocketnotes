import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    border: 0;

    color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
    font-size: 1.6rem;
`;
