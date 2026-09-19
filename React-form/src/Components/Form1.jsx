import React, { use, useState } from 'react'; 
import '../Styles/Form1.css'
function Form1() { 
 
	// state for multiple inputs. 
	//This works perfectly but there is another approach that is very useful. 
	const [userName, setUserName] = useState(""); 
	const [userEmail, setUserEmail] = useState(""); 
	const [userPassword, setUserPassword] = useState(""); 
 
 
	// instead of doing this we can do as follow. 
 
	const [formData, setFormData] = useState({ 
		name: "", 
		email: "", 
		password: "" 
	}); 
 
	const handleChange = (e) => { 
 
		const name = e.target.name; 
		const value = e.target.value; 
 
		// shorthand for above  
		// const { name, value } = e.target; 
		// This means take the value and name property from the input that triggered the event and create variables with those names 
 
 
 
		setFormData({ 
 
			...formData,     // this means copy all existing data from object and create new one 
			[name]: value    // JavaScript converts this into : email: "ritesh@gmail.com" 
		}); 
	} 
 
 
	// state for errors that will contain the objects. 
	const [errors , setErrors] = useState({}); 
	// function for form validation. 
	const validate = () => { 
 
		const newErrors = {}; 
 
		if (!formData.name.trim()) { 
			newErrors.name = "Name is required"; 
		} 
 
		if (!formData.email.trim()) { 
			newErrors.email = "Email is required"; 
		} 
 
		if (formData.password.length < 6) { 
			newErrors.password = 
				"Password must contain at least 6 characters"; 
		} 
 
		setErrors(newErrors); 
 
		return Object.keys(newErrors).length === 0; 
	}; 
 
 
	//handling the form submission. 
	const handleSubmit = (e) => { 
		e.preventDefault(); 
		 
		if(!validate()){ 
			return; 
		} 
		Document.write(userName); 
 
	}; 
 
	return ( 
		<> 
 
			<form action="" onSubmit={handleSubmit}> 
 
				<div className="form-container"> 
					{/* // 1st way 
					<label htmlFor="name">Enter your name:</label> 
					<input type="text" name="name" id="user-name" value={userName} onChange={(e) => setUserName(e.target.value)} /> 
					<h3>Your name:{userName}</h3> 
 
					<label htmlFor="email">Enter email:</label> 
					<input type="email" name='email' id='user-email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} /> 
					<br /> 
					<label htmlFor="password">Enter password:</label> 
					<input type="password" name='password' id='user-password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} /> 
  */}
					{/* <button>submit</button>  */}
 
 
					<br /> 
					<hr /> 
 
					{/* //2nd way  */}
					<label htmlFor="name">name</label> 
					<input 
						name='name' 
						value={formData.name} 
						onChange={handleChange} 
 
					/> 
					{errors.name && <p>{errors.name}</p>} 
					<label htmlFor="email">email</label> 
					<input 
						name='email' 
						value={formData.email} 
						onChange={handleChange} 
					/> 
					{errors.email && <p>{errors.email}</p>} 
 
 
 
				</div> 
			</form> 
		</> 
	) 
} 
 
export default Form1;