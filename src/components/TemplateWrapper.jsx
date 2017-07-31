import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class TemplateWrapper extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}
export default TemplateWrapper