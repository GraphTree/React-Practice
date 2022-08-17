import {useParams, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {useState, useEffect} from 'react'

interface RouteParams {
    coinId:string;
}

const Title = styled.h1`
    color : white;
    font-size : 48px;
`;

const Container = styled.div`
    padding : 0px 20px;
`;
const Header = styled.header`
    height : 1-hv;
    display : flex;
    justify-content : center;
    align-items: center;

`;


const Loader = styled.span`
    text-align:center;
    `;
interface LocationState{
    state :{
    name:string;
    rank:number;
    }
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
  }
  
  interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
  }

function Coin() {
    const [loading,
         setLoading] = useState(true);    
    const {coinId} = useParams<keyof RouteParams>();
    const {state} = useLocation() as  LocationState;
    const [info, setInfo] = useState<InfoData>();
    const [priceInfo, setPriceInfo] = useState<PriceData>();
    useEffect(() => {
        (async () => {
            const infoData =await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
            setInfo(infoData);
            setPriceInfo(priceData);
        })  ()
    },[]);
    return (
    <Container>
        <Header>
            <Title>{state?.name || "loading" }</Title>
        </Header>
        {loading ? (<Loader>loading ...</Loader>) : <h1>priceInfo?.quotes.USD.price</h1>}
        
    </Container>
    )
}

export default Coin