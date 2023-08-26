export default {
	
  test : ()=>{
		if(!appsmith.store.token){
			navigateTo("login")
		}else{
			navigateTo('Page1')
			}
		
	}

	
}