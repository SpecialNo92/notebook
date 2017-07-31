import React from 'react'
import { Router, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'

import store from './store/store'
import TemplateWrapper from './components/TemplateWrapper'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Route path="/" component={TemplateWrapper} />
                </HashRouter>
            </Provider>
        );
    }
}

export default App