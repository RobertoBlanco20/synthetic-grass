import React, { useState }from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Spinner from './components/Spinner'
import styled from "@emotion/styled";

const Main = styled.main`
        max-width: 40%;
        margin: 1em auto;
        background-color: tranparent;
        color: #FFFBFE;
        border-radius: 5px;

        @media (max-width: 850px) {
              max-width: 90%;
  }
    `;


function App() {

  const [ summary, setSummary ] = useState({})
  const [ update, setUpdate ] = useState(false)
 

  const {data} = summary

  return (
    <Main>
      <Header 
        title="Syntethic Grass"
      />

          <Form 
            setSummary={setSummary}
            setUpdate={setUpdate}
          />
  

        { update ? 
              <Spinner /> 
              
        : !update && data ? 
              <Summary 
                  summary={summary}
                /> 

        : null }


    </Main>
  );
}

export default App;
