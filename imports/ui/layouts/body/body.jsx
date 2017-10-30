import React from 'react';
import BlazeWrapper from 'meteor/gadicc:blaze-react-component';
import { _ } from 'meteor/underscore';

const Body = ({header, contentPage}) => {
  let content = null;
  // For account signins, the meteor system is still passing us string ids
  // for their Blaze templates. We need to wrap that in a react component.
  if (_.isString(contentPage)) {
    content = () => React.createElement(BlazeWrapper, { template: contentPage });
  } else {
    content = contentPage;
  }

  return (
    <div>
      <header>
        { header ? header() : null }
      </header>
      <main>
        { content() }
      </main>
    </div>
  );
};

export default Body;
