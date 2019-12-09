import React, { Component, Fragment } from 'react'
import Header from '../Components/Header/Header'
import { 
    Container
} from 'react-bootstrap'

class View extends Component {
    render() {
        return (
            <div>
               <Fragment>

                    <Header />
                    <Container>
                        Body
                    </Container>
                    
                </Fragment>
            </div>
        )
    }
}

export default View;
