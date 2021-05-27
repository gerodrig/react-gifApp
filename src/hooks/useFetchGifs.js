//custom hooks
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
   
        const [state, setState] = useState({
            data: [],
            loading: true,
        });

        //use Effect to avoid an infinit loop with the useState and avoid to fetch every time the button is pressed
        useEffect( () => {
            
            getGifs( category )
                .then( imgs => {

                    setTimeout( () => {

                        //console.log(imgs);
                        setState({
                            data: imgs,
                            loading: false
                        });
                    }, 1000);
                
                })// the [] empty array is to add the dependencies that in this case would be zero
    },[ category ]) 

    return state;
}
