import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'

class App extends Component {
    render() {
        return <div>
            <User username={this.props.user.username} age={this.props.user.age}/>
            <Page year={this.props.page.year} photos={this.props.page.photos}/>
        </div>
    }
}

function storeToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(storeToProps)(App)