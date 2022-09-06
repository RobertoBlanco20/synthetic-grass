import styled from "@emotion/styled";

const HeaderTitle = styled.header`
        text-align: center;
        background-image: url('grass-1582.svg');
        border-radius: 5px 5px 0 0;
`



const Header = ({title}) => {



    return ( 
        <HeaderTitle>
                <h1> {title} </h1>
        </HeaderTitle>
     );
}
 
export default Header;