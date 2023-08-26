export default {
	
createHash: (password)=>{
	return dcodeIO.bcrypt.hashSync(password);
},
	verifyHash: (password, hash)=>{
		return dcodeIO.bcrypt.compareSync(password, hash);
	},
	createToken: (email)=>{
		return jsonwebtoken.sign({email},'secret',{expiresIn:60*60});
	},
	signup: () => {
		const email = email_su.text;
		const password = password_su.text;	
		const pHash = this.createHash(password);
	 	storeValue("email",email)
		return signup.run({email,pHash})
	 	 
		.then(() => showAlert('Account is created!', "success"))
		.then(() => storeValue('token',this.createToken(email)))
		.then(() => navigateTo('home'))
		.catch(e => showAlert(e.message,'error'));
		
	},
  signIn: async () =>{
		const email = signin_email.text;
		const password = signin_password.text;
		
		const[user] = await finduser.run({email});
		if(user && this.verifyHash(password,user?.password)){
			storeValue("email",email)
			
	     storeValue('token',this.createToken(email))
      .then(()=> navigateTo('home'))	
		 
		}else{
			showAlert('Invalid email or password', 'error');
		}
			
}
	
}