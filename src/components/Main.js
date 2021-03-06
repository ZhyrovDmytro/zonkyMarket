import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems, handleSortingMethod } from '../actions/itemActions';
import { SORT_BY_NAME, SORT_BY_RATING, SORT_BY_AMOUNT, SORT_BY_DEADLINE, SORT_BY_DURATION } from '../actions/actionTypes';
import Loan from './Loan';
import Spinner  from './Spinner';
import moment from 'moment';

export class Main extends Component {

    state = {
        error:'',
        currentCount: 300000
    }

    componentDidMount() {
        this.props.getItems();
        this.interval = setInterval(this.timer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    timer = () => {
        this.setState({
            currentCount: this.state.currentCount - 1000
        })
        if(this.state.currentCount < 1000) {
            this.props.getItems();
            this.setState({
                currentCount: 300000
            });
        }
    }

    handleActionMethod = evt => {
        const actionName = evt.currentTarget.dataset.action;
        const activeBtn = document.querySelector('.btn--active');
        if (activeBtn) {
            activeBtn.classList.remove('btn--active');
        }
        evt.currentTarget.classList.add('btn--active');
        this.props.handleSortingMethod(actionName);
    }

    render() {
        const { loading, error, items } = this.props.loans;
        const errorMessage = !!error && <h2 className="main__error">{error}</h2>;
        const timerTime = moment(this.state.currentCount).format("mm:ss");

        return(
            <div className="main">
                {errorMessage}
                {loading && !errorMessage && <Spinner />}
                {!loading && items && (
                <div>
                    <h2 className="main__timer">New <strong>zonky</strong> in {timerTime}</h2>
                    <div className="main__btn-group">
                        <button
                            className="btn btn--active"
                            data-action={SORT_BY_DEADLINE}
                            onClick={e => {this.handleActionMethod(e)}}
                        >
                            Sort by deadline
                        </button>
                        <button
                            className="btn"
                            data-action={SORT_BY_NAME}
                            onClick={e => {this.handleActionMethod(e)}}
                        >
                            Sort by name
                        </button>
                        <button
                            className="btn"
                            data-action={SORT_BY_RATING}
                            onClick={e => {this.handleActionMethod(e)}}
                        >
                            Sort by rating
                        </button>
                        <button
                            className="btn"
                            data-action={SORT_BY_AMOUNT}
                            onClick={e => {this.handleActionMethod(e)}}
                        >
                            Sort by required amount
                        </button>
                        <button
                            className="btn"
                            data-action={SORT_BY_DURATION}
                            onClick={e => {this.handleActionMethod(e)}}
                        >
                            Sort by duration
                        </button>
                    </div>
                    <div className="loan">
                        {this.props.loans.items.map(item => {
                            return (
                                <Loan
                                    key={item.id}
                                    loans={item}
                                />
                            )
                        })}
                    </div>
                </div>)}
            </div>
        )
    }
}

Main.propTypes = {
    getItems: PropTypes.func.isRequired,
    handleSortingMethod: PropTypes.func,
    loans: PropTypes.shape({
        error: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.object),
        loading: PropTypes.bool,
      })
}

const mapStateToProps = state => ({
    loans: state.loans
})

Main.defaultProps = {
    handleSortingMethod: () => {},
    loans: {},
    loading: ''
};

export default connect(mapStateToProps, { getItems, handleSortingMethod })(Main)