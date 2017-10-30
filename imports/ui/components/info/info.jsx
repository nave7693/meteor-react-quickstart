import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';

class Info extends Component {
  constructor(props) {
    super(props);
    this.addLink = this.addLink.bind(this);
  }

  addLink(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('links.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });    
  }

  renderLinks(links) {
    return links.map((link) => {
      return (
        <li key={ link._id } ><a href={ link.url } target="_blank">{ link.title }</a></li>
      );
    });
  }

  render() {
    if (this.props.loading) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <h2>Learn Meteor!</h2>
        <ul>
          <li>
            <form className="info-link-add" onSubmit={this.addLink}>
              <input type="text" name="title" placeholder="Title" required />
              <input type="url" name="url" placeholder="Url" required />
              <input type="submit" name="submit" value="Add new link" />
            </form>
          </li>
          { this.renderLinks(this.props.links) }
        </ul>
      </div>
    );
  }
}

Info.propTypes = {
  loading: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
};

export default withTracker(() => {
  const handle = Meteor.subscribe('links.all');

  return {
    loading: !handle.ready(),
    links: Links.find({}).fetch()
  }
})(Info);