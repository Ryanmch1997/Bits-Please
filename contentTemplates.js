<template name="aboutUs">
 +	<h2> The aboutUs page has loaded </h2>
 +    
 +    
 +</template>
 +
 +<template name="contactUs">
 +    <h2> The contactUs page has loaded  </h2>
 +    
 +</template>
 +
 +<template name="reviews">
 +	<h2> The reviews page has loaded </h2>
 +    {{> posts}}
 +</template>
 +
 +<template name="community">
 +	<h2> The community page has loaded </h2>
 +    
 +</template>
 +
 +<template name="hardware">
 +	<h2> The hardware page has loaded </h2>
 +    
 +</template>
 +
 +<template name="top">
 +	<h2> The top page has loaded </h2>
 +    
 +</template>
 +
 +<template name="walkthroughs">
 +	<h2> The walkthroughs page has loaded </h2>
 +    
 +</template>
 +
 +<template name="more">
 +	<h2> The more page has loaded </h2>
 +    
 +</template>
 +<template name="onlineVids">
 +	<iframe
 +          width="600"
 +          height="450"
 +          frameborder="1" style="border:2"
 +          src="https://www.youtube.com/watch?v=7ftBN1f19Hg&feature=youtu.be" allowfullscreen>
 +    </iframe>
 +    
 +</template>
 +<template name="dataTable">
 +    <h2> The data page has loaded  </h2>
 +    {{> data}}
 +    {{> addData}}
 +</template>
 +    
 +<template name="findUs">
 +	<h1> You have found us! </h1>
 +    <iframe
 +          width="600"
 +          height="450"
 +          frameborder="1" style="border:2"
 +          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC-hQXOhE3FT5JbKV0lusO7bvlaAb3e1Ck
 +            &q=Manor Street,Mountmellick,Laois" allowfullscreen>
 +    </iframe>
 +
 +</template>
 +
 +<template name="signup">
 +    <h2> The signUp page has loaded  </h2>
 +    
 +</template>
 +
 +<template name="home">
 +  <h1> You've come to the right place!</h1>
 +	
 +
 +<div class="container">
 +  <div class="jumbotron">
 +    <h1 >Welcome to our Gaming App!</h1> 
 +    <p>Bits Please would like to introduce you to our app, it is the most popular HTML, CSS, and JS framework for developing
 +    responsive, mobile-first projects on the web!</p> 
 +  </div>
 +    <div class="well well-sm">Donations welcome.</div>
 +    <div class="well well-lg">Like us on BookFace.</div>
 +  <p>text.</p> 
 +  <p>more stuff...</p> 
 +</div>
 +    
 +{{> carousel}}
 +
 +<div class="container">
 +  <h2>Basic Progress Bar</h2>
 +  <div class="progress">
 +    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">
 +      <span class="sr-only">70% Complete</span>
 +    </div>
 +  </div>
 +</div>
 +
 +<button type="button" class="btn btn-default">Default</button>
 +<button type="button" class="btn btn-primary">Primary</button>
 +<button type="button" class="btn btn-success">Success</button>
 +<button type="button" class="btn btn-info">Info</button>
 +<button type="button" class="btn btn-warning">Warning</button>
 +<button type="button" class="btn btn-danger">Danger</button>
 +<button type="button" class="btn btn-link">Link</button>
 +<button type="button">Link</button>
 +
 +    <div class="container">
 +      <h2>Alerts</h2>
 +      <div class="alert alert-success">
 +        <strong>Success!</strong> This alert box could indicate a successful or positive action.
 +      </div>
 +      <div class="alert alert-info">
 +        <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
 +      </div>
 +      <div class="alert alert-warning">
 +        <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
 +      </div>
 +      <div class="alert alert-danger">
 +        <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
 +      </div>
 +    </div>
 +</template>
 +
 +
 +<template name="nav">
 +    <nav class="navbar navbar-inverse">
 +  <div class="container-fluid">
 +    <div class="navbar-header">
 +      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
 +        <span class="icon-bar"></span>
 +        <span class="icon-bar"></span>
 +        <span class="icon-bar"></span>
 +      </button>
 +      <a class="navbar-brand" href="#">Bits Please</a>
 +    </div>
 +    <div class="collapse navbar-collapse" id="myNavbar">
 +      <ul class="nav navbar-nav">
 +        <li class="active"><a href="/">Home</a></li>
 +        <li><a href="community">Community</a></li>
 +        <li><a href="reviews">Reviews</a></li>
 +        <li><a href="hardware">Hardware</a></li>
 +        <li><a href="top">Top</a></li>
 +        <li class="dropdown">
 +          <a class="dropdown-toggle" data-toggle="dropdown" href="walkthrough">Walkthrough
 +              <span class="caret"></span></a>
 +          <ul class="dropdown-menu">
 +            <li><a href="#">PC</a></li>
 +            <li><a href="#">PS4</a></li>
 +            <li><a href="#">Xbox</a></li>
 +            <li><a href="#">#</a></li>
 +          </ul>
 +        </li>
 +        <li class="dropdown">
 +          <a class="dropdown-toggle" data-toggle="dropdown" href="more">More
 +              <span class="caret"></span></a>
 +          <ul class="dropdown-menu">
 +            <li><a href="DataTable">Data</a></li>
 +            <li><a href="aboutUs">AboutUs</a></li>
 +            <li><a href="contactUs">ContactUs</a></li>
 +            <li><a href="findUs">FindUs</a></li>
 +          </ul>
 +        </li>
 +      </ul>
 +      <ul class="nav navbar-nav navbar-right">
 +        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
 +        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
 +      </ul>
 +    </div>
 +  </div>
 +</nav>
 +
 +</template>
 +
 +<template name="data">
 +	<table class="table table-bordered">
 +		<thead>
 +		<tr>
 +		    <th>Username</th>
 +		    <th>Make</th>	
 +		    <th>Model</th>
 +		    <th>Age</th>
 +		    <th>Mileage</th>
 +		    <th>Action</th>
 +		</tr>
 +		</thead>
 +		<tbody>
 +		{{#each vehicles}}
 +		<tr>
 +		    <td>
 +			{{user}}
 +		    </td>
 +		    <td>
 +			{{make}}
 +		    </td>
 + 		    <td>
 +			{{model}}
 +		    </td>
 +		    <td>
 +			{{age}}
 +		    </td>
 + 		    <td>
 +			{{mileage}}
 +		    </td>
 +		    <td>
 +			<button id="delete" class="btn btn-danger">
 +				Delete
 +			</button>
 +		    </td>
 +		</tr>
 +		{{/each}}
 +		</tbody>
 +	</table>
 +</template>
 +
 +<template name="addData">
 +    <form class ="addDataForm">
 +	<h2> Add a new car</h2>
 +	<div class="row">
 +	    <div class="col-sm-1">
 +		<label class="form-control" for="make">Username</label>
 +	    </div>
 +	    <div class="col-sm-2">
 +		<input class="form-control required" type="text"
 +		       name="user" placeHolder="Please Enter Username"><br>
 +		
 +	    </div>
 +	</div>
 +	
 +	<div class="row">
 +	    <div class="col-sm-1">
 +		<label class="form-control" for="make">Make</label>
 +	    </div>
 +	    <div class="col-sm-2">
 +		<input class="form-control required" type="text"
 +		       name="make" placeHolder="Please Enter Make"><br>
 +		
 +	    </div>
 +	</div>
 +	<div class="row">
 +	    <div class="col-sm-1">
 +		<label class="form-control" for="model">Model</label>
 +	    </div>
 +	    <div class="col-sm-2">
 +		<input class="form-control" type="text"
 +		       name="model" placeHolder="Please Enter Model"><br>
 +		
 +	    </div>
 +	</div>
 +	<div class="row">
 +	    <div class="col-sm-1">
 +		<label class="form-control" for="age">Age</label>
 +	    </div>
 +	    <div class="col-sm-2">
 +		<input class="form-control number" type="text"
 +		       name="age" placeHolder="Please Enter Age"><br>
 +		
 +	    </div>
 +	</div>
 +	<div class="row">
 +	    <div class="col-sm-1">
 +		<label class="form-control" for="mileage">Mileage</label>
 +	    </div>
 +	    <div class="col-sm-2">
 +		<input class="form-control number" type="text"
 +		       name="mileage" placeHolder="Please Enter Mileage"><br>
 +		
 +	    </div>
 +	</div>
 +	    <input type="submit" value="save" class="btn btn-primary"> 
 +         
 +	   
 +    </form>
 +</template>
 +
 +<template name="carousel">
 +<div class="container">
 +  <br>
 +  <div id="myCarousel" class="carousel slide" data-ride="carousel">
 +    <!-- Indicators -->
 +    <ol class="carousel-indicators">
 +      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
 +      <li data-target="#myCarousel" data-slide-to="1"></li>
 +      <li data-target="#myCarousel" data-slide-to="2"></li>
 +      <li data-target="#myCarousel" data-slide-to="3"></li>
 +    </ol>
 +
 +    <!-- Wrapper for slides -->
 +    <div class="carousel-inner" role="listbox">
 +      <div class="item active">
 +        <img src="picture1.jpg" alt="Chania" width="460" height="345">
 +        <div class="carousel-caption">
 +          <h3>Gamer</h3>
 +          <p>The atmosphere in the website is fabulous.</p>
 +        </div>
 +      </div>
 +
 +      <div class="item">
 +        <img src="picture2.jpg" alt="Chania" width="460" height="345">
 +        <div class="carousel-caption">
 +          <h3>Assassins Creed</h3>
 +          <p>Member how cool this shit was! Yeah I member.</p>
 +        </div>
 +      </div>
 +    
 +      <div class="item">
 +        <img src="picture3.jpg" alt="Flower" width="460" height="345">
 +        <div class="carousel-caption">
 +          <h3>Halo</h3>
 +          <p>The demon is coming!.</p>
 +        </div>
 +      </div>
 +
 +      <div class="item">
 +        <img src="picture4.jpg" alt="Flower" width="460" height="345">
 +        <div class="carousel-caption">
 +          <h3>Fallout</h3>
 +          <p>The atmosphere in Fallout has a touch of Detroit and Radiation.</p>
 +        </div>
 +      </div>
 +    </div>
 +
 +    <!-- Left and right controls -->
 +    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
 +      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
 +      <span class="sr-only">Previous</span>
 +    </a>
 +    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
 +      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
 +      <span class="sr-only">Next</span>
 +    </a>
 +  </div>
 +</div>
 +</template>
 +
 +<template name="posts">
 +	<div class="well col-xs-6 col-xs-offset-3">
 +    <div class="row col-xs-10 col-xs-offset-1">
 +        <form class="form-horizontal" role="form" id="postForm">
 +            <div class="row">
 +            <div class="form-group">
 +                <div class="col-xs-12" id="well-post">
 +                    <textarea class="form-control required" rows="3" id="inputPost"
 +                              placeholder="Post a Comment!" maxlength="140"></textarea>
 +                    <label id="charRemaining" for="inputPost">{{charsRemaining}}</label>
 +                </div>
 +            </div>
 +            </div>
 +            <div class="form-group">
 +                
 +                <div class="col-xs-3">
 +                    <!--Camera-->
 +                   <!-- <i class="fa fa-camera-retro fa-lg" aria-hidden="true"></i> -->
 +                    <a href="#">
 +                     <span class="glyphicon glyphicon-camera"></span>
 +                    </a>
 +                </div>
 +                <div class="col-xs-3">
 +                    <!--Video-->
 +                   <!-- <i class="fa fa-camera-retro fa-lg" aria-hidden="true"></i> -->
 +                    <a href="#">
 +                        <span class="glyphicon glyphicon-facetime-video"></span>
 +                    </a>
 +                </div>
 +                <div class="col-xs-3">
 +                   <!-- <i class="fa fa-camera-retro fa-lg" aria-hidden="true"></i> -->
 +                    <a href="#">
 +                        <span class="glyphicon glyphicon-option-horizontal"></span>
 +                    </a>
 +                </div>
 +                <div class="col-xs-3">
 +                    <button type="submit" class="btn btn-primary">Post</button>
 +                </div>
 +            </div>
 +        </form>
 +    </div>
 +    </div>
 +</template>
 +
 +<template name="comments">
 +     <form class ="addDataForm">
 +	<h2> Add a new comment</h2>
 +	<div class="row">
 +	    <div class="col-sm-1">
 +		<label class="form-control" for="make">Username</label>
 +	    </div>
 +	    <div class="col-sm-2">
 +		<input class="form-control required" type="text"
 +		       name="user" placeHolder="Please Enter Username"><br>
 +		
 +	    </div>
 +	</div>
 +	
 +	<div class="row">
 +	    <div class="col-sm-1">
 +		<label class="form-control" for="make">Make</label>
 +	    </div>
 +	    <div class="col-sm-2">
 +		<input class="form-control required" type="text"
 +		       name="make" placeHolder="Please Enter Make"><br>
 +		
 +	    </div>
 +	</div>
 +	
 +	
 +
 +	    <input type="submit" value="save" class="btn btn-primary"> 
 +         
 +	   
 +    </form>
 +
 +
 +</template>