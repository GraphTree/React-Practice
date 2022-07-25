import styled, {keyframes} from "styled-components"


const Wrapper= styled.div`
  display : flex;`;

const animation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }

  100% {
    transform:rotate(0deg);
    border-radius:0px;
`;

const Box = styled.div`
  height : 100px;
  width : 100px ;
  background-color : tomato ;
  display : flex;
  justify-content : center ;
  aligh-item : center;
  animation : ${animation} 2s linear infinite;
  span {
    font-size : 60px;
    &:hover {
      font-size : 10px;
    }
  }

  `;



const Text = styled.span`color:white;`;

function App() {
  return (
    <Wrapper>
        <Box><span>WoW</span></Box>
    </Wrapper>
      
    
  )

}

export default App;
