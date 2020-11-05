import React from 'react'


export function Header_Mobile(props){
    return (
        <header className='page-header-mobile'>
      <div className='header-mobile-inner'>
          <div className='header-mobile-main'>
              <div className='grid'>
                  <div className='header-mobile-vertical'>
                      <div className='header-menu-dropdown'>
                          <a href='#'>
                              <span className='mobile-menu-icon' onClick={props.handleClick}>
                                  <span className='menu-icon-holder'>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"/>
                                      </svg>

                                  </span>
                              </span>
                          </a>

                      </div>
                      <div className='header-mobile-center'>
                          <div className='mobile-center-inner'>
                              <div className='mobile-logo-holder'>
                                  <a itemProp='url' href='#' style={{height:21}}>
                                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="58px" height="58px" viewBox="0 0 31 31" style={{enableBackground:"new 0 0 31 31"}} xmlSpace="preserve">
                                          <g>
                                              <path d="M19.5,14.5c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.9v-0.5c0-0.4-0.1-0.7-0.3-0.9c-0.2-0.2-0.5-0.3-0.8-0.3
		c-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.2-0.3,0.5-0.3,0.9v0.5c0,0.4,0.1,0.7,0.3,0.9C18.9,14.3,19.2,14.5,19.5,14.5z"></path>
                                              <path d="M19.5,16c-0.4,0-0.7,0.1-0.9,0.4c-0.2,0.3-0.3,0.6-0.3,0.9v0.9c0,0.4,0.1,0.7,0.3,0.9c0.2,0.3,0.5,0.4,0.9,0.4
		c0.4,0,0.7-0.1,0.9-0.4c0.2-0.3,0.3-0.6,0.3-0.9v-0.9c0-0.4-0.1-0.7-0.3-0.9C20.2,16.1,19.9,16,19.5,16z"></path>
                                              <path d="M15.5,0.5c-8.3,0-15,6.7-15,15c0,8.3,6.7,15,15,15c8.3,0,15-6.7,15-15C30.5,7.2,23.8,0.5,15.5,0.5z M15.2,20.3
		c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1h-1.2c-0.1,0-0.3,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.2-0.3l-2.9-6.5v6.5
		c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1H8.9c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3v-9.6c0-0.1,0-0.2,0.1-0.3
		c0.1-0.1,0.2-0.1,0.3-0.1h1.2c0.1,0,0.3,0,0.3,0.1c0.1,0.1,0.1,0.2,0.2,0.3l2.9,6.5v-6.5c0-0.1,0-0.2,0.1-0.3
		c0.1-0.1,0.2-0.1,0.3-0.1h0.9c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3V20.3z M22.5,18.1c0,0.5-0.1,0.9-0.2,1.3
		c-0.2,0.4-0.4,0.7-0.6,0.9c-0.3,0.2-0.6,0.4-0.9,0.5C20.3,21,19.9,21,19.5,21c-0.4,0-0.8-0.1-1.1-0.2c-0.4-0.1-0.7-0.3-1-0.5
		c-0.3-0.2-0.5-0.5-0.6-0.9c-0.2-0.4-0.2-0.8-0.2-1.3v-0.8c0-0.6,0.1-1,0.3-1.3c0.2-0.3,0.5-0.6,0.9-0.8c-0.3-0.2-0.6-0.5-0.7-0.8
		c-0.1-0.3-0.2-0.7-0.2-1.1v-0.9c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.6-0.8c0.3-0.2,0.5-0.4,0.9-0.5c0.3-0.1,0.7-0.2,1.1-0.2
		c0.4,0,0.8,0.1,1.1,0.2c0.3,0.1,0.6,0.3,0.9,0.5c0.3,0.2,0.4,0.5,0.6,0.8c0.1,0.3,0.2,0.6,0.2,0.9v0.9c0,0.4-0.1,0.7-0.2,1.1
		c-0.1,0.3-0.4,0.6-0.7,0.8c0.4,0.2,0.7,0.5,0.9,0.8c0.2,0.3,0.3,0.8,0.3,1.3V18.1z"></path>
                                          </g>
                                      </svg>
                                  </a>
                              </div>

                          </div>

                      </div>
                      <div className='right'>
                          <div className='right-inner'>
                              <div className='cart-holder'>
                                      <div className='cart-holder-inner'>
                                          <a className='cart-holder-inner-wrapper'>
                        <span className='cart-icon-holder'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                            <span className='cart-number'>0</span>
                        </span>

                                          </a>
                                      </div>

                              </div>

                          </div>

                      </div>

                  </div>
              </div>
          </div>
          {props.navbar}
      </div>
        </header>
    );
}