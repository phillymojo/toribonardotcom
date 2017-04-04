import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">

        Footer &copy; {new Date().getFullYear()}
        
      </div>
    )
  }
}

export default Footer;