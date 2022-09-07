import styled from "@emotion/styled";
import PropTypes from 'prop-types'

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
 
Header.propTypes = {
        title: PropTypes.string.isRequired
}

export default Header;