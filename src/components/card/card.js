import styled from 'styled-components';

export const Box = styled.div`
    position: relative;
    width: 40rem;
    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #060c21;
    margin: 4rem;
    /* z-index: 1; */

    &::before{
        content: '';
        position: absolute;
        top: -2px;left: -2px;
        right: -2px; bottom: -2px;
        background: #fff;
        z-index: -1;
        background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
    }
`;
export const Glass = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    display: block;
    background: rgba(255, 255, 255, 0.1);
    pointer-events: none;
`;
export const Content = styled.div`
    padding:2rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;
export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: -15rem; */

    img{
        height: 25rem;
        width: 37rem;
        position: relative;
        opacity: 0.8;
    }
    h2{
        position: absolute;
        font-size: 2.2rem;
        font-weight: 900;
        background-color: rgba(6, 12, 33, 0.85);
        width: 37rem;
        text-align: center;
        padding: 1rem .2rem;
    }
`;
export const Desc = styled.div`
    /* position: absolute; */
    margin-top: 5rem;
    height: 100%;
    p{
        font-size: 1.65rem;
        font-weight:700;
        letter-spacing:0.07rem;
        margin-top: .7rem;
        text-transform: capitalize;
    }
`;
// 010615