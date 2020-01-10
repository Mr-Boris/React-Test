import React from 'react';

import './resume.css';

import { connect } from 'react-redux'

 class Resume extends React.Component {
   render() {

      const {name} = this.props.user;

      return (
         <div className='container' >
            <div className='resume'>
               <header className='nameBio'>
                  <div className='nameBio'>
                     <h1>{name} </h1>
                     <h2>PASSIONATE GITHUB USER</h2>
                     <hr />
                  </div>
               </header>
               <div> 
                  <div className='gitProfile'>
                     <h3>GitHub <br /> Profile</h3>
                     <hr />
                  </div>
                  <div className='site'>  
                     <h3>Website</h3>
                     <hr />
                  </div>
                  <div className='lang'>
                     <h3>Languages</h3>
                     <hr />
                  </div>
                  <div className='poprep'>
                     <h3> Popular <br /> Repositories</h3>
                     <hr />
                  </div>
                  <div className='contrib'>
                     <h3>Contributions</h3>
                     <hr />
                  </div>
                  <div className='organiz'>
                     <h3>Organizations</h3>
                     <hr />
                  </div>
                  <div className='about'>
                     <h3> About This <br /> Résumé</h3>
                     <hr />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

function mapStateToProps (state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(Resume)

