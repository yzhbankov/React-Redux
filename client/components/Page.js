import React, {Component, PropTypes} from 'react'

export default class Page extends Component {
    render() {
        return (
            <div>In {this.props.year} you have {this.props.photos.length} photos</div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
};