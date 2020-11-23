import React from 'react'
import { CategoriesContainer } from '../Container/categoriesContainer'
import { UserMenu } from './userMenu'
import {SearchPopUpContainer} from "../Container/searchPopUpContainer";
import {Loading} from "./loading";




export function Header(props){
    return (
        <header className='page-header'>
      <div className='header-main-area'>
          <div className='vertical-align'>
              <div className='left'>
                  <div className='inner-left' style={{height:"inherit"}}>
                    <CategoriesContainer/>
                  </div>
              </div>
              <div className='right'>
                  <div className='right-inner'>
                    <UserMenu handleSearchClick={props.handleSearchClick}/>
                  </div>
              </div>
          </div>
      </div>
            <SearchPopUpContainer showSearch={props.showSearch}/>
        </header>
    );
}