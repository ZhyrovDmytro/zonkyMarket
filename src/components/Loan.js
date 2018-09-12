import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../components/Modal';
import moment from 'moment';

class Loan extends Component{
    state = {
        modalIsOpen: false
    }

    handleModal = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen
        }));
    }
    render() {
        const {
            amount,
            name,
            story,
            deadline,
            datePublished,
            photos,
            rating,
        } = this.props.loans;
        const publishDate = moment(datePublished).format("D, MMMM YYYY, h:mm:ss a");
        const deadlineDate = moment(deadline).format("D, MMMM YYYY, h:mm:ss a");
        const modal = this.state.modalIsOpen && (
            <Modal
                loan={this.props.loans}
            />
        );
        const limitedStory = story.length > 200 ? <span>{story.substring(0,200)}...</span> : story;

        return (
            <div className="loan__item"
                onClick={this.handleModal}
            >
                <div className="loan__content">
                    <div className="loan__primary">
                        <h2 className="loan__title">{name}</h2>
                        <h3 className="loan__amount">Required amount <strong>{amount/100}</strong></h3>
                        <p>Day published <strong>{publishDate}</strong></p>
                        <p>Deadline <strong>{deadlineDate}</strong></p>
                        <p className="loan__rating">Rating <span><strong>{rating}</strong></span></p>
                        {photos.map(photo => {
                            return (
                                <div key={photo.name}>
                                    <img
                                        className="loan__img"
                                        src={`https://api.zonky.cz${photo.url}`} alt="Loan"/>
                                </div>
                            )
                        })}
                        <p className="loan__story">{limitedStory}</p>
                    </div>
                </div>
                {modal}
            </div>
        )
    }
}

Loan.propTypes = {
    loans: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        story: PropTypes.string.isRequired,
        deadline: PropTypes.string.isRequired,
        datePublished: PropTypes.string.isRequired,
        photos: PropTypes.arrayOf(PropTypes.object),
        rating: PropTypes.string.isRequired,
      }).isRequired
}

export default Loan;