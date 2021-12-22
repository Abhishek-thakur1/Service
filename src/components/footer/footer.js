import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #010615;
    border-top: .1rem solid #002350;
    padding: 5rem .1rem;
    /* margin-top: 10rem; */

`;
export const Left = styled.div`

    img{
        height: 6rem;
        width: 10rem;
        margin-left: 7rem;
        cursor: pointer;
    }
`;
export const Right = styled.div`

`;
export const Upper = styled.div`
    display: flex;
    align-items: center;
    
    p{
        color: var(--white);
        font-size: 1.8rem;
        font-weight: 900;
        margin-left: 1rem;
    }
`;
export const Lower = styled(Upper)`
    margin-top: 2rem;
    
`;