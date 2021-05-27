
    export const getGifs = async ( category ) => {


        //A new string representing the provided string encoded as a URI.
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=HIpicCD1rp5ipDq7b04p5IAeJ5G55GNn`;
        const resp = await fetch( url );
        //we destructure the url to receive only the data
        const {data} = await resp.json();

        //we only fetch the information that we are interested in from the fetch and assign it to gifs constant.
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        //console.log(gifs);
        return gifs ;
    }