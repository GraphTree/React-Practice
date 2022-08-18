
const BASE_URL = `https://api.coinpaprika.com/v1`
export async function fetchCoin(){ 
    const response = await fetch(`${BASE_URL}/coins`);
    const json = await response.json();
    return json

}

export async function fetchCoinInfo(coinId:string){
    if (typeof coinId ==='string'){
    const response = await fetch(`${BASE_URL}/coins/${coinId}`);
    const json = await response.json();
    return json}
}

export async function fetchTickerInfo(coinId:string){
    if (typeof coinId === 'string'){
    const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
    const json = await response.json();
    return json}
}


export async function fetchCoinHistory(coinId:string){
    if (typeof coinId ==='string'){
    const response = await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`);
    const json = await response.json();
    return json}
    }

