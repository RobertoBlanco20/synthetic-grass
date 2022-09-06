import Header from './components/Header'
import Form from './components/Form'
import styled from "@emotion/styled";

function App() {

  const Main = styled.main`
    max-width: 40%;
    margin: 1em auto;
    background-color: #A7C957;
    color: #FFFBFE;
    border-radius: 5px;
  `;



  return (
    <Main>
      <Header 
        title="Syntethic Grass"
      />
      <Form />
    </Main>
  );
}

export default App;
