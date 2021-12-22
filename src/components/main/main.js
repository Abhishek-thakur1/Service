import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90%;
    width: 100%;

    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
    }
`;
export const Left = styled.div`
    margin-left: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    @media (max-width: 768px) {
        margin-top: 20rem;
        margin-left: 0rem;
        align-items: center;
    }

    h1{
        color: var(--white);
        font-size: 6rem;
        font-weight: 900;
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,253,255,1) 46%, rgba(222,255,255,1) 98%); 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 768px) {
            text-align: center;
            font-size: 4rem;
        }
    }

    p{
        color: var(--white);
        font-size: 1.8rem;
        font-weight: 700;
        letter-spacing: .06rem;
        margin-top: 1.5rem;

        @media (max-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 1.6rem;
            width: 90%;
            margin-top: 2rem;
        }
    }
`;

export const Right = styled.div`
    width: 60%;
    height: 80%;
    margin-right: .5rem;
    margin-top: 20rem;

    img{
        width: 100%;
        height: 100%;
        
    }
    @media (max-width: 768px){
        width: 100%;
        height: 40%;
        margin-top: 10rem;

    }
`;

