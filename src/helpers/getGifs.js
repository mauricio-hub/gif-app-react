import React  from 'react'

export const getGifs =async (category)=>{
		//api.giphy.com/v1/gifs/random
		const url=`http://api.giphy.com/v1/gifs/search?api_key=pKMjYaSsPPi4rscD9nVS11nrYOF1ACWR&q=${encodeURI(category)}&limit=9`
		const resp = await fetch(url);
		const {data} = await resp.json();

		const gifs = data.map(img =>{
			return{
				id: img.id,
				title: img.title,
				url : img.images?.downsized_medium.url
				//? condicion si tiene imagenes las manda
			}
		})

		return gifs
	}