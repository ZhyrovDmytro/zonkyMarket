import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems, handleSortingMethod } from '../actions/itemActions';
import { SORT_BY_NAME, SORT_BY_RATING, SORT_BY_AMOUNT, SORT_BY_DEADLINE, SORT_BY_DURATION } from '../actions/actionTypes';
import moment from 'moment';

class Main extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    handleActionMethod = evt => {
        const actionName = evt.currentTarget.dataset.action;
        this.props.handleSortingMethod(actionName);
    }

    render() {
        return(
            <div>
                <button
                    data-action={SORT_BY_NAME}
                    onClick={e => {this.handleActionMethod(e)}}
                >
                    Sort by name
                </button>
                <button
                    data-action={SORT_BY_RATING}

                    onClick={e => {this.handleActionMethod(e)}}
                >
                    Sort by rating
                </button>
                <button
                    data-action={SORT_BY_AMOUNT}

                    onClick={e => {this.handleActionMethod(e)}}
                >
                    Sort by required amount
                </button>
                <button
                    data-action={SORT_BY_DEADLINE}

                    onClick={e => {this.handleActionMethod(e)}}
                >
                    Sort by deadline
                </button>
                <button
                    data-action={SORT_BY_DURATION}

                    onClick={e => {this.handleActionMethod(e)}}
                >
                    Sort by duration
                </button>
                {this.props.loans.items.map(item => {
                     const {
                        amount,
                        name,
                        story,
                        deadline,
                        datePublished,
                        photos,
                        rating,
                        id,
                        interestRate,
                        investmentRate,
                        investmentsCount,
                        remainingInvestment
                    } = item;
                    const publishDate = moment(datePublished).format("D, MMMM YYYY, h:mm:ss a");
                    const deadlineDate = moment(deadline).format("D, MMMM YYYY, h:mm:ss a");

                    return (
                        <div key={id} className="loan">
                            <div>
                                <h2>{name}</h2>
                                <h3>Required amount <strong>{amount/100}</strong></h3>
                                <p>Day published <strong>{publishDate}</strong></p>
                                <p>Deadline <strong>{deadlineDate}</strong></p>
                                <p>Rating <span><strong>{rating}</strong></span></p>
                                {photos.map(photo => {
                                    return (
                                        <div key={photo.name}>
                                            <img src={`https://api.zonky.cz${photo.url}`} alt="Loan"/>
                                        </div>
                                    )
                                })}
                                <p>{story}</p>
                            </div>
                            <div>
                                <h4 >Remaining Investment: <span><strong>{remainingInvestment}</strong></span></h4>
                                <p>Interest Rate: <span><strong>{interestRate}</strong></span></p>
                                <p>Investment  Rate: <span><strong>{investmentRate}</strong></span></p>
                                <p>Investments Count: <span><strong>{investmentsCount}</strong></span></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loans: state.loans
})

export default connect(mapStateToProps, { getItems, handleSortingMethod })(Main)