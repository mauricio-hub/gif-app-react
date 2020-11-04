import React  from 'react'
//recibe data la manda al gifGridItem
import GifGridItem from '../components/GifGridItem'
//import {getGifs} from '../helpers/getGifs'
//llama a useFetch cuando pide data
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category})=>{

	//const [images,setImages]=useState([])
	//const [count, setCount]=useState(0)
	const {data,loading} = useFetchGifs(category); 

	console.log(data)
	console.log(loading)
//getGifs()
	return (
			<>

			{loading && <p>loading...</p>}
			<div className="card-grid"> 

				{
				data.map(img=>(
							<GifGridItem 
							key={img.id}
							{...img}
							/>
							
						))

					}
				</div>
			</>
		
		)
}