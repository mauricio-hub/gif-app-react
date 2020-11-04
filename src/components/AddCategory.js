import React, {useState}from 'react';
import PropTypes from 'prop-types';

//import {setCategories} from '../gifExpertApp.js'
export const AddCategory = ({setCategories})=>{
	//useState establece el estado inicial del componente
	const [inputValue,setInputValue] = useState('')	

	const hanldeInputChange =(e)=>{
		//console.log(e.target.value)
		setInputValue(e.target.value)
	}

	const handleSubmit = (e)=>{
		e.preventDefault()
		//console.log('hecho')
		//si es mayor a 2 caracteres establece el string
		//trim borra espacios en blanco antes y despues
		if (inputValue.trim().length>2) {
		//se pasa el estring a setcategories	
		setCategories(cats =>[inputValue,...cats])
		//se borra el string del input
		setInputValue('')
		}
	

	}

	return(
		<form onSubmit={handleSubmit}> 

			<input
				type="text"
				value={inputValue}
				onChange={hanldeInputChange }
			/>
		</form>
		)
}


AddCategory.propTypes = {
	setCategories:PropTypes.func.isRequired
}