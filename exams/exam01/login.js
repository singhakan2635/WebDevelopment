function login(){
	return `
		<!doctype html>    
		<html>    
		<head>    
		    <title>Login Form</title>    
		    <link rel="stylesheet" type="text/css" href="login.css">    
		</head>    
		<body>   
		<div class="login-page-background"> 
			<div class="header">
		    	<h1>Login Page</h1><br>    
		    	<div class="login-section">    
			    <form method="POST" action="/login">    
			        <h2>User Name </h2>    
			        <input type="text" name="username"  placeholder="Username" required> <br>   
			        <button type="submit" id="login-button">Login</button>          
			    </form>     
				</div> 
			</div>
		</div>   
		</body>    
		</html>    
		`
	}

module.exports = login;