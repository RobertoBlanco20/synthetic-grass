import React, { useState }from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import styled from "@emotion/styled";



const Main = styled.main`
        max-width: 40%;
        margin: 1em auto;
        background-color: #A7C957;
        color: #FFFBFE;
        border-radius: 5px;
    `;


function App() {

  const [ summary, setSummary ] = useState({})

  const {data} = summary

  return (
    <Main>
      <Header 
        title="Syntethic Grass"
      />

     
          <Form 
            setSummary={setSummary}
          /> 

      
      { data ? 
          <Summary 
            summary={summary}
          />
      : null }


    </Main>
  );
}

export default App;
