import React from 'react'
import { CategoriesContainer } from '../containers/categoriesContainer'
import { UserMenu } from './userMenu'




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
                    <UserMenu/>
                  </div>
              </div>
          </div>
      </div>
        </header>
    );
}