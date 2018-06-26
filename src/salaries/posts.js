import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from '../components/components';

import * as firebase from 'firebase';

class Post extends Component {
  calculateTimeDiff() {
    var diffMs = Date.now() - this.props.time;
    var diffDays = Math.floor(diffMs / 86400000);
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

    if (diffDays > 0) {
      return `${diffDays} days`;
    } else if (diffHrs > 0) {
      return `${diffHrs} hours`;
    } else {
      return `${diffMins} minutes`;
    }
  }

  render() {
    return (
      <article className="post">
        <h4> {this.props.children} </h4>
        <div className="media">
          <div className="media-left">
            <p className="image is-32x32">
              <img
                src={(() => {
                  if (this.props.icon != 'null') {
                    return this.props.icon;
                  } else {
                    return 'http://bulma.io/images/placeholders/128x128.png';
                  }
                })()}
              />
            </p>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <a href="#">{this.props.user}</a> reviewed{' '}
                {this.calculateTimeDiff()} ago &nbsp;
                <span className="tag is-info">Review</span>
              </p>
            </div>
          </div>
          <div className="media-right">
            <span className="has-text-success">
              <i className="fas fa-thumbs-up" /> {this.props.likes}{' '}
            </span>
          </div>
        </div>
      </article>
    );
  }
}

Post.propTypes = {
  user: PropTypes.element,
  time: PropTypes.element,

  likes: PropTypes.number,

  icon: PropTypes.string
};

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewText: '',
      user: null
    };

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    });

    this.inputRef = createRef();
  }

  renderPosts() {
    if (this.props.reviews && this.props.reviews.length != 0) {
      return this.props.reviews.map(review => {
        return (
          <Post
            icon={review.icon}
            key={review}
            likes={review.likes}
            time={review.time}
            user={review.user}
          >
            {' '}
            {review.content}{' '}
          </Post>
        );
      });
    } else {
      return <div> There are currently no reviews. Be the first! </div>;
    }
  }

  renderInput() {
    return (
      <textarea
        className="textarea"
        placeholder="Leave a review!"
        onChange={event => this.setState({ reviewText: event.target.value })}
        ref={ref => (this.inputRef = ref)}
      />
    );
  }

  submitReview() {
    if (this.props.onSubmitReview) {
      const user = this.state.user;

      if (user) {
        this.props.onSubmitReview(
          this.state.reviewText,
          user.displayName,
          user.photoURL,
          user.email
        );
      } else {
        this.props.onSubmitReview(
          this.state.reviewText,
          'Anonymous',
          null,
          null
        );
      }
    }

    this.inputRef.value = '';
  }

  render() {
    return (
      <Box className="content">
        {this.renderPosts()}
        {this.renderInput()}
        <Button onClick={() => this.submitReview()}> Submit </Button>
      </Box>
    );
  }
}

Posts.propTypes = {
  reviews: PropTypes.array,
  onSubmitReview: PropTypes.func
};

export default Posts;
