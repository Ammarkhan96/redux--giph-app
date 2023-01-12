import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    
	return (
	    <div className='pa2'>
	    	<input 
	    		className='pa3 ba b--yellow bg-lightest-blue'
	    		type="search" 
	    		placeholder="Search your Giphs" 
	    		onChange={searchChange} 
                
                //onChange={event => this.onInputChange(event.target.value)} 
	    	/>
	    </div>
  );
}

export default SearchBox;