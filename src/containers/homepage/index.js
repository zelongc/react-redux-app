import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeToRedColor} from '../../actions/homePage';

class HomePage extends Component {
    render() {
        return (
            <div >
                This is my home page laaaaa
                {this.props.color} <button onClick={() => {this.props.changeToRedColor()}}></button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const {homepage} = state;
    return Object.assign({}, homepage);
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeToRedColor: () => dispatch(changeToRedColor())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
