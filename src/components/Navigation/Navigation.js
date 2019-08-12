import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
            if(isSignedIn) {
                return(
                    <nav className="flex justify-between bb b--white-10 shadow-3 navbar-container"  style = {{display: 'flex', justifyContent: 'flex-end'}}>
                        <div className="flex-grow flex items-center">
                            <p onClick={ () => onRouteChange('signout')} className="f6 dib black bg-animate hover-bg-black hover-white mr3 mr4-ns pv2 ph2 pointer navbar-button">Sign out</p>
                        </div>
                    </nav>
                );
            }else {
                return(
                    <nav class="flex justify-between bb b--white-10 shadow-3 navbar-container"  style = {{display: 'flex', justifyContent: 'flex-end'}}>
                        <div className="flex-grow flex items-center">
                            <p onClick={ () => onRouteChange('SignIn')}  className="f6 dib black bg-animate hover-bg-black hover-white mr1 mr4-ns pv2 ph2 br-pill pointer navbar-button">Sign in</p>
                            <p onClick={ () => onRouteChange('Register')} className="f6 dib black bg-animate hover-bg-black hover-white mr1 mr4-ns pv2 ph2 br-pill pointer navbar-button">Register</p>
                        </div>
                    </nav>
                );
            }
}

export default Navigation;