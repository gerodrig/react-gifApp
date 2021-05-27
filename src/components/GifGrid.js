import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    //when destructuring an object we can rename the value with : like data:images renamed to images
    const { data:images, loading } = useFetchGifs( category );

    //console.log(loading);


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }/> //very common to use to send the destrucured object
                    ))
                }
                </div>
        </>
    )
}
