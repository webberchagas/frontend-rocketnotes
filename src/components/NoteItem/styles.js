import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};
    border-radius: 10px;

    margin-bottom: 8px;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none; 
    }

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE}; 
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}; 
        }
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

`;