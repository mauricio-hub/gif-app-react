import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    //se dispara unicamente la peticion si la categoria cambia
    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 1000)
            })
    }, [category])


    /*
    	setTimeout( () =>{
    		setState({
    			data:[1,2,3],
    		loading:false
    		})
    	},3000)*/

    return state
}