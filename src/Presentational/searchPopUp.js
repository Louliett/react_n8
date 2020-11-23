import React from "react";
import {CSSTransition} from "react-transition-group";


export const SearchPopUp=(props)=>{


    return(
        <CSSTransition
            in={props.showSearch}
            timeout={300}
            classNames="showSearch"
            unmountOnExit
        >
        <div className='full-screen-search-holder'>
            <a className='search-close'>
                <span className='search-close-icon-holder' onClick={props.handleCloseSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
                    </svg>
                </span>
            </a>
            <div className='full-screen-search-table'>
                <div className='full-screen-search-cell'>
                    <div className='full-screen-search-inner'>
                        <form className='search-form' method='get' action='http://localhost:3000/view-all'>
                            <div className='form-holder grid'>
                                <h4 className='search-label'>Search</h4>
                                <div className='search-form-inner'>
                                    <input className='search-field' type="text" placeholder="Enter your keyword" name="s" autoComplete="off"/>
                                    <button id='search-submit' type='submit'>
                                        <span className='search-icon-holder'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px">
                                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                                <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                            </svg>
                                        </span>
                                    </button>


                                </div>

                            </div>
                        </form>

                    </div>

                </div>


                </div>

        </div>
        </CSSTransition>
    )

}
