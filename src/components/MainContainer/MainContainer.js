import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

class MainContainer extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Header />
        <div className={'content-container'}>
          <div className={'content'}>

          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default MainContainer;


