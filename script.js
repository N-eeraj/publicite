/*Portrait Devices*/

html{height: 200%;}
body{
	height: 100%;
	margin: 0;
	padding: 0;
	background-color: rgb(246, 247, 252);
}

#nav{
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	background-color: rgb(246, 247, 252);
	box-shadow: 10px 0 10px rgba(201, 201, 201, 0.8);
	z-index: 1;
}
#title{
	width: 30%;
	height: 45%;
}
#logo{
	width: auto;
	height: 100%;
}
#hamburger{
	width: 8%;
	height: 30%;
}
#menu_container{
	height: 10%;
	padding-top: 19%;
	display: none;
}
#menu_container #menu{
	width: 100%;
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 10%;
	text-align: center;
}
#menu_container #menu a{
	padding: 7% 0;
	flex: 1;
	background-color: rgb(216, 110, 31);
	color: rgb(246, 247, 252);
}
#landscape_nav_btn{display: none}
#content{
	height: 100%;
	padding-top: 18%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
#home_section{
	height: 36.85%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
#home_section div{
	width: 100%;
	height: 40%;
	color: rgb(246, 247, 252);
	text-align: center;
	transition: 1s;
}
#about_section{
	background-image: linear-gradient(45deg, rgb(216, 110, 31), rgb(254, 176, 78));
}
#advertise_section{
	background-image: linear-gradient(135deg, rgb(102, 95, 89), rgb(150, 150, 150));
}
#home_section div h2{margin: 7% 0 5% 0;}
#home_section div div{
	width: 85%;
	height: 60%;
	margin: 0 auto;
	text-align: justify;
	font-size: 4vw;
}

#service_section{
	height: 26.31%;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
}
#service_section h1{
	height: 15%;
	margin: auto 0 0 0;
	color: rgb(216, 110, 31);
}
#service_section button{
	border: 0;
	background-color: transparent;
}
#service_section #tabs{
	width: 100%;
	height: 12%;
	display: flex;
	background-color: rgb(102, 95, 89);
}
#service_section #tabs button{
	flex: 1;
	color: rgb(246, 247, 252);
}#service_section #tabs button:hover{color: rgb(254, 176, 78);}
#service_section #slide{
	width: 100%;
	height: 66%;
	padding: 0;
	display: flex;
	justify-content: space-between;
}
#service_section #slide button{font-size: 10vw;}


#contact_section{
	height: 36.84%;
	background-color: blue;
}

a{text-decoration: none;}


/*Mobile devices with ratio 9:18*/
@media(max-aspect-ratio: 9/17){
	html{height: 177.78%;}
	#content{padding-top: 20%;}
}

/*Mobile devices with ratio 9:20*/
@media(max-aspect-ratio: 9/19){
	html{height: 164.1%;}
	#content{padding-top: 22%;}
}

/*Tablet devices*/
@media(min-width:768px)
{
	#hamburger{width: 6%;}
	#title{
		width: 35%;
		height: 65%;
	}
	#menu_container #menu a{
		font-size: 5vw;
	}
	#home_section{
		width: 96%;
		margin: 0 auto;
	}
	#home_section div{
		width: 75%;
		height: 42%;
		border-radius: 30px;
	}
	#about_section{
	}
	#advertise_section{
		margin-right: 0;
		margin-left: auto;
	}
	#home_section div h2{
		margin: 7% 0 3% 0;
		font-size: 5vw;
	}
	#home_section div div{
		font-size: 3.5vw;
		width: 80%;
	}
	
	#service_section h1{font-size: 6.3vw;}
	#service_section #tabs button{font-size: 3vw;}
}


/*Landscape Devices/

/*Mobile devices*/
@media(orientation: landscape)
{
	html{height: 500%;}
	
	#nav{
		height: 15%;
	}
	#logo{
		width: auto;
		height: 150%;
		margin-left: 3%;
	}
	#title{
		width: 25%;
		height: 60%;
	}
	#landscape_nav_btn{
		width: 30%;
		display: flex;
		justify-content: space-between;
		margin-right: 2%;
	}
	#landscape_nav_btn a{color: rgb(102, 95, 89);}#landscape_nav_btn a:hover{color: rgb(254, 176, 78);}
	#hamburger{display: none;}
	
	#content{
		padding-top: 5%;
		justify-content: start;
	}
	
	#home_section{
		width: 98%;
		margin: 0 auto;
	}
	#home_section div{
		width: 85%;
		height: 32%;
		border-radius: 20px;
	}
	#advertise_section{margin-left: auto;}
	#home_section div h2{
		margin: 6% 0 5% 0;
		font-size: 4.6vw;
	}
	#home_section div div{
		width: 80%;
		font-size: 2.8vw;
	}
	
	#service_section h1{height: 10%;}
	#service_section #tabs button{font-size: 3vw;}
}

/*Mobile devices with ratio 9:18*/
@media (min-width: 720px) and (min-aspect-ratio: 18/9) and (orientation: landscape)
{
	
	#home_section{width: 99%;}
	#home_section div{
		width: 60%;
		height: 36%;
	}
	#home_section div h2{font-size: 4.2vw;}
	#home_section div div{font-size: 2.4vw;}
	
	#service_section{
	}
	#service_section h1{
		height: 12%;
		margin: 7% 0 3% 0;
	}
}

/*Tablet devices*/
@media(min-width: 1023px) and (orientation: landscape)
{
	html{height: 400%;}
	
	#landscape_nav_btn a{font-size: 2.5vw;}
	
	#content{padding-top: 15%;}
	
	#home_section{height: 25%;}
	#home_section div{
		width: 66%;
		height: 45%;
	}
	
	#service_section h1{
		margin: 12% 0 3% 0;
	}
}

/*Laptop devices*/
@media(min-width: 1366px) and (min-aspect-ratio: 16/9) and (orientation: landscape)
{
	html{height: 380%;}
	
	#nav{
		justify-content: start;
	}
	#title{
		width: 20%;
		margin-left: 3%;
	}
	#landscape_nav_btn{
		width: 20%;
		margin-left: 42%;
	}
	#landscape_nav_btn a{font-size: 1.5vw;}
	
	#content{padding-top: 8%;}
	#home_section{
		height: 15%;
		flex-direction: row;
		align-items: center;
	}
	#home_section div{
		width: 45%;
		height: 75%;
	}
	#advertise_section{margin-top: 20%;}
	#home_section div h2{
		font-size: 2.8vw;
	}
	#home_section div div{
		width: 70%;
		font-size: 1.5vw;
	}
	
	#service_section h1{
		height: 7%;
		font-size: 4.5vw;
	}
	#service_section{height: 36%;}
	#service_section #tabs{height: 8%;}
	#service_section #tabs button{font-size: 2.5vw;}
	#service_section #slide{height: 70%;}
	
}









