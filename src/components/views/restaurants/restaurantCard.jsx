import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Button,
  Header,
  Image,
  Modal,
  Comment,
  Feed,
  Icon,
  Rating,
} from 'semantic-ui-react';
// var Rating = require('react-rating');

class RestaurantCard extends Component {
  render() {
    // const restaurant = this.props.location.state.restaurant
    console.log(this.props);
    const venue = this.props.restaurant;

    const address = JSON.parse(venue.address).join(', ');
    const {prefix, suffix} = JSON.parse(venue.imageUrl);
    const img = `${prefix}800x200${suffix}`;

    if (!venue) {
      return <div>Sorry, but the restaurant was not found</div>;
    }
    return (
      <div className="ui container ">
        <div className="ui fluid card">
          <div className="image">
            {venue.imageUrl && <img id="restimg" src={img} alt="bill" />}
          </div>
          <div className="content">
            <a className="header">
              <Link
                to={{
                  pathname: `/restaurants/${venue.name}`,
                  state: {venue},
                }}
              >
                restaurauntCard link : <h1>{venue.name}</h1>
              </Link>
            </a>
            <div className="meta">
              <Rating defaultRating={3} maxRating={5} disabled />
              <span className="date">342 Ratings</span>
            </div>
            <div className="description">
              We serve an obsene amount of Ramen, at any point and any time. We
              serve asian inspired Ramen made with Indian Ingredients. It is the
              most special thing you will ever have the pleasure of eating....
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="map outline icon" />
              {address}
            </a>
          </div>
        </div>
        <div className="ui star rating" data-rating="3" />
      </div>
    );
  }
}

export default RestaurantCard;