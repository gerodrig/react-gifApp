//you can use rafc shortcut
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp =  () => {

   const [categories, setCategories] = useState(['Chinchillas']);

    // const handleAdd = () => {
    //     //setCategories( [...categories, 'Squirrel'] );
    //     setCategories( cats => [...cats, 'Squirrel' ]);
    // }

    return (
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category= { category }/>
                        )
                }
            </ol>
        </>
    )
}

export default GifApp;