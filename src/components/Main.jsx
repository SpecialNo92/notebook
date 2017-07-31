import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NoteFormContainer from '../Containers/NoteFormContainer'
import Welcome from './Welcome'
import Sidebar from '../Containers/Sidebar'

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-3">
                    <Sidebar />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-9">         
                        <Switch>   
                            <Route exact path='/' component={Welcome}/>       
                            <Route exact path='/note/:id' component={NoteFormContainer}/>            
                        </Switch>
                    </div>
                </div>
            </main>
        );
    }
}
export default Main