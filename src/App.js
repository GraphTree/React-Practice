// to do app
import {useState, useEffect} from "react"

function Converter(givenValue, measurement){
  // given = original value that you wanna convert to other value
  // measurment = how much is the target value per given value
  return givenValue * measurement

}
function InputBlock(props) {
  const [value, setValue] = useState()

  const onChange = (e) => {
    e.preventDefault();
    if(props.flag===false){
      setValue(e.target.value);
      props.setGivenValue(e.target.value)
      
      console.log(props.flag, props.givenValue)
    } else {
      setValue(props.givenValue*props.measurement);
      console.log(props.givenValue,props.measurement)
    }
  }
  // props = flag, given, measurement
  return (
    <form>
      <input 
        placeholder="type dollar" 
        type="text"
        onChange={onChange}
        {props.flag !===false ? ()}
        />
  </form>
  )
}

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinValue, setCoinValue] = useState(0)
  const [flag, setFlag] = useState(false)
  const [givenValue, setGivenValue] = useState()

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response=>response.json()
      .then((json)=>{
        setCoins(json);
        setLoading(false);
      })
      )
  },[])

  const onChangeCoinSelect =(e)=>{
    setCoinValue(e.target.value);
  }

  return(
  <div>
    <h1>the Coins! {loading ? "" : `(${coins.length})`}</h1>
    {loading ? 
      <strong>Loading...</strong> : 
      <select onChange={onChangeCoinSelect}>
        {coins.map((coin, index) => <option key={index} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
      </select>
      }

      <InputBlock flag={flag} measurement={coinValue} givenValue={givenValue} setGivenValue={setGivenValue} />
      <InputBlock flag={!flag} measurement={coinValue} givenValue={givenValue} setGivenValue={setGivenValue} />



  </div>)   
}

export default App;
