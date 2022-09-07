import styled from "@emotion/styled";

const HeaderTitle = styled.header`
        text-align: center;
        border-radius: 5px 5px 0 0;
`

const H1 = styled.h1`
        color: #386641;
`


const Header = ({title}) => {



    return ( 
        <HeaderTitle>
                <H1> {title} </H1>
        </HeaderTitle>
     );
}
 
export default Header;