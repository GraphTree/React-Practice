import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

interface CoinObject {
    id:string;
    name:string;
    symbol:string;
    rank:number;
    is_new:boolean;
    is_active:boolean;
    type:string
}

const Container = styled.div`
    padding : 0px 20px;
`;
const Header = styled.header`
    height : 1-hv;
    display : flex;
    justify-content : center;
    align-items: center;

`;
const CoinList = styled.ul``;
const Coin = styled.li`
    background-color:white;
    color: ${props => props.theme.bgColor};
    padding: 20px;
    margin-bottom : 10px;
    border-radius : 15px;
    a {
        transition: color 0.2s ease0-in;
        display : flex;
        align-items : center;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }

`;
const Title = styled.h1`
    color : ${props => props.theme.accentColor};
    font-size : 48px;
         
    }
`;

const Loader = styled.span`
    text-align:center;
    `;

const Img = styled.img`
    width:25px ;
    height:25px;
    margin-right:10px
`


function Coins() {
    const [coins, setCoins] = useState<CoinObject[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.coinpaprika.com/v1/coins');
            const json = await response.json();
            setCoins(json.slice(0,10));
            setLoading(false);
        })();
    }, []);
    return (
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            {loading ? (<Loader>loading ...</Loader>) : (<CoinList>
                {coins.map(coin => <Coin key={coin.id}>
                                    <Link to={`/${coin.id}`} state={coin}>
                                    <Img src = {`https://coinicons-api.vercel.app/api/icon/btc}`}/>
                                    {coin.name} &rarr;</Link>
                                    </Coin>)}
            </CoinList>)}
        </Container>
    )
}

export default Coins