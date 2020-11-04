import React from 'react'

const GifGridItem = ({title,url})=>{

	//console.log({title,url})

	return(

		<div className="card animate__animated animate__bounce animate">
		<img src={url} alt={title} className="card__img"/>
		<p>{title}</p>
		</div>
			)
	}

	export default GifGridItem