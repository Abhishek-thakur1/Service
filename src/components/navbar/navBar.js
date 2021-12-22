import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    /*  */
    padding: .6rem .2rem;
    /* height: 15rem; */
    /* margin-top: 1rem; */
    transition: all 1s ease;
    z-index: 1000;
`;

export const Logo = styled.div`
    
    margin-left: 7rem;
    cursor: pointer;
    margin-top: 1rem;

    img{
        height: 6rem;
        width: 10rem;
    }

    @media (max-width: 765px) {
        margin-left: 1rem;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 7rem;
    margin-top: 1rem;

    @media (max-width: 765px) {
        margin-right: 2rem;
    }
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    color: var(--grey);
`;

export const ListItem = styled.li`
    font-size: 1.35rem;
    text-transform: uppercase;
    margin-right: 2.5rem;
    cursor: pointer;
    font-weight: 700;
    transition: all 0.5s;

    &:hover {
        color: var(--dark-grey);
    }

`;