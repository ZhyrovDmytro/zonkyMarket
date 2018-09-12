import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Modal extends Component {

    render() {
        const {
            amount,
            name,
            story,
            deadline,
            datePublished,
            photos,
            rating,
            interestRate,
            investmentRate,
            investmentsCount,
            remainingInvestment
        } = this.props.loan;
        const publishDate = moment(datePublished).format("D, MMMM YYYY, h:mm:ss a");
        const deadlineDate = moment(deadline).format("D, MMMM YYYY, h:mm:ss a");
        return (
            <div className="modal">
                <div className="modal__content">
                    <h2 className="loan__title">{name}</h2>
                    <div className="loan__primary">
                        <h3 className="loan__amount">Required amount <strong>{amount/100}</strong></h3>
                        <h4 >Remaining Investment: <span><strong>{remainingInvestment}</strong></span></h4>
                        <p>Day published <strong>{publishDate}</strong></p>
                        <p>Deadline <strong>{deadlineDate}</strong></p>
                        <p className="loan__rating">Rating <span><strong>{rating}</strong></span></p>
                    </div>
                    <div
                        className="modal__image"
                    >
                        {photos.map(photo => {
                            return (
                                <img
                                    key={photo.name}
                                    className="loan__img"
                                    src={`https://api.zonky.cz${photo.url}`} alt="Loan"/>
                            )
                        })}
                    </div>
                    <div className="loan__secondary">
                        <p>Interest Rate: <span><strong>{interestRate}</strong></span></p>
                        <p>Investment  Rate: <span><strong>{investmentRate}</strong></span></p>
                        <p>Investments Count: <span><strong>{investmentsCount}</strong></span></p>
                        <p className="loan__story">{story}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    loan: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        story: PropTypes.string.isRequired,
        deadline: PropTypes.string.isRequired,
        datePublished: PropTypes.string.isRequired,
        photos: PropTypes.arrayOf(PropTypes.object),
        rating: PropTypes.string.isRequired,
        interestRate: PropTypes.number.isRequired,
        investmentRate: PropTypes.number.isRequired,
        investmentsCount: PropTypes.number.isRequired,
        remainingInvestmen: PropTypes.number
      }).isRequired
}

Modal.defaultProps = {
    remainingInvestmen: '',
};

export default Modal;