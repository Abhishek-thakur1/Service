import { Box, Content, Glass, Title, Desc } from './card';

const Card = ({id, title, ...props}) => {
    return (
        <Box>
            <Glass></Glass>
            <Content>
                <Title>
                    <img src={props.img} alt="OOOPs!Image Not appeared..." />
                    <h2>{title }</h2>
                </Title>
                <Desc>
                    <p> &gt;&nbsp;{props.s1 }</p>
                    <p>&gt;&nbsp;{props.s2 }</p>
                    <p>&gt;&nbsp;{props.s3 }</p>
                    {props.s4 ? <p>&gt;&nbsp;{props.s4 }</p> : ''}
                    {props.s5 ? <p>&gt;&nbsp;{props.s5 }</p> : ''}
                </Desc>
            </Content>
        </Box>
    )
}

export default Card;
