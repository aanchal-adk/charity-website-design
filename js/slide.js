function Slider() {
  var that = this;
  this.marginLeft = 0;
  
  this.init = function(id){
    this.element = document.getElementById(id);
    this.slide();
    this.addEvents();
  }
  
  this.slide = function(){
    that.intervalId = setInterval(function(){
      that.element.style.marginLeft = that.marginLeft + '%';
			that.marginLeft -= 0.5;
			if(that.marginLeft < -299.5){
        that.marginLeft = 0;
      }
			var currentMargin = parseInt(that.element.style.marginLeft);
			console.log(that.element.style.marginLeft);
	  	if(parseFloat(that.element.style.marginLeft)%100.0 == 0){
				console.log(parseInt(that.element.style.marginLeft)%100.0);
				that.colorCircle(Math.floor(currentMargin/100)*(-1)+1);
	    	that.pauseSlide();
	  	}
    },1000/50);
  }

  this.addEvents = function(){
		document.getElementById('b1').addEventListener('click',function(){that.circleClick(1)});
		document.getElementById('b2').addEventListener('click',function(){that.circleClick(2)});
		document.getElementById('b3').addEventListener('click',function(){that.circleClick(3)});
	}
    	this.pauseSlide = function(){
		clearInterval(that.intervalId);console.log("pause",that.intervalId);
		that.intervalId = undefined;
		//~ that.element.removeEventListener('mouseover', that.stop);
		//~ that.element.removeEventListener('mouseleave',that.slide);
		setTimeout(function(){
		  that.slide(); 
		},3000);
	}
  
	this.pauseSlide = function(){
		clearInterval(that.intervalId);console.log("pause",that.intervalId);
		that.intervalId = undefined;
		//~ that.element.removeEventListener('mouseover', that.stop);
		//~ that.element.removeEventListener('mouseleave',that.slide);
		setTimeout(function(){
		  that.slide(); 
		},3000);
	}
  this.circleClick = function(n) {
		console.log('circle1');
    this.colorCircle(n);
		that.element.style.marginLeft=-100*(n-1)+'%';
		that.marginLeft=-100*(n-1);
	}

  this.colorCircle = function(n){
		for(var j = 1; j <= 3; j++){
		  var idName = 'b' + j;
			var element3 = document.getElementById(idName);
		  if(n == j){
		    element3.style.background = 'yellow';
		  }
		  else{
				element3.style.background = 'red';
	  	}
    }
  }
}

slider = new Slider();
slider.init('slider-id');