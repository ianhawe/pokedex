import React from 'react';

const SearchBox = ({searchChange}) => {
    
    return (
       <div >
            <input 
            className='pa3 ba b--red bg-light-yellow'
            type='search'
            placeholder='Search Pokemon'
            onChange={searchChange}    
            />
       </div>
    );
}
export default SearchBox;