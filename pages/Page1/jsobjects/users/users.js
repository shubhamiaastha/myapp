export default {
	
	user: ()=>{
		const fullname = Form1.data.fullName;
		const email = Form1.data.email ;
		const phone = Form1.data.phone;
		const address = Form1.data.address;
		storeValue("fullname",fullname)
		
		// if(fullName.text.length===0){
			// showAlert('Please enter your Full name', 'error')
		// }
		// else if(email.text.length === 0){
			// showAlert('Please enter your email', 'error')
		// }
		// else if(phone.length === 0){
			// showAlert('Please enter your phone number', 'error')
		// }
		// else if(address.text.length === 0){
			// showAlert('Please enter your address', 'error')
		// }
	
				return user.run({fullname,email,phone,address})
	    
		.then(()=>{ 
		
			navigateTo('Page2');
			showAlert("successfull completed!","success")
					
		})
			
	
		
	
		
	}
	
	
}