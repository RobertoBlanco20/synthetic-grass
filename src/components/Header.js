import styled from "@emotion/styled";

const Header = ({title}) => {

    const Header = styled.header`
    text-align: center;
    background-color: #386641;
    border-radius: 5px 5px 0 0;
  `

  

    return ( 
        <Header>
                <h1> {title} </h1>
        </Header>
     );
}
 
export default Header;