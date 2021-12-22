import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: #010615;
    /* z-index: -2; */

    h3{
        color: var(--white);
        font-size: 3.1rem;
        font-weight: 900;
        letter-spacing:0.07rem;
        margin-top: 7rem;
    }
`;
export const Cards = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;