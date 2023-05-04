
$(window).on("load",function(){
	$("[data-typewriter]").each(function(){
		$(this).attr("data-typewriter",$(this).html());
		$(this).html("");
		const data=$(this).attr("data-typewriter");
		let i=0;
		const that=this;
		const duration=parseFloat(getComputedStyle(this)["transition-duration"])*1000;
		const timeout=setInterval(function(){
			if(i<data.length){
				that.innerHTML+=data.substring(i,i+1);
				i++;
			}else{
				$(that).addClass("active");
				clearInterval(timeout);
			}
		},duration);
	});
})