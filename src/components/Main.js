import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';

class Main extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        console.log(this.props);
        return(
            <div>
                Hello!
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems })(Main)