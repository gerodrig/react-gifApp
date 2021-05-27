import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue ] = useState(''); //the use state should be declared as an empty string

    //catch the value that we need to change
    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        //this is to prevent the default refresh when submitting forms
        e.preventDefault();
        
        if( inputValue.trim().length > 2 ) {

            //only add if input is at least 2 letters
            setCategories( cats => [ inputValue, ...cats ]);
            //set the input value to an empty box
            setInputValue('');
        }

        
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
