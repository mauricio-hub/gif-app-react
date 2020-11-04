import React, {useState}from 'react';
import {AddCategory}from './components/AddCategory';
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {

	//const categories=['One Pounch','Family guy','the office']
	const [categories,setCategories] = 
	useState(['random'])

/*const handleAdd = ()=>{

	//setCategories([...categories,'American dad','Dragon ball','Alf'])	
	setCategories(cats =>[...cats,'American dad','Dragon ball','Alf'])
}*/

 	return(
 			<>
			<h2>Gif App React</h2>
			
			<AddCategory setCategories={setCategories} />
			<hr/>
		
				<ol>
				{
				categories.map( category =>(
					<GifGrid 
					key={category}
					category={category}/>
					)) 
				}

			</ol>
			</>
				
 		) 

}
	
