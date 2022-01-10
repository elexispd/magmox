// $(document).ready(function(){
	$("button[type='button']").click(function(){
		
		var num1 = $("input[name='num1']").val();
		var num2 = $("input[name='num2']").val();
		var num3 = $("input[name='num3']").val();
		var num4 = $("input[name='num4']").val();
		var num5 = $("input[name='num5']").val();
		var num6 = $("input[name='num6']").val();

		/*-------------login verification------------------*/

		
			if (isNaN(num1) || num1 == "" || isNaN(num2) || num2 == "" ||
			 	isNaN(num3) || num3 == "" || isNaN(num4) || num4 == "" ||
			  	isNaN(num5) || num5 == "" || isNaN(num6) || num6 == "" ||
			  	num1.length > 1 || num2.length > 1 || num3.length > 1 || num4.length > 1|| num5.length > 1|| num6.length > 1
			  	) {
				$($(".num")).addClass("error");

				$(".error").text("Check the code");
			} else{
				$(".error").text("");
				$($(".num")).removeClass("error");
					Swal.fire({
				 	'title': 'Email Confirmed',
				 	'type': 'success'
				 	}).then(function(){
				// window.location.href="index"
		 		})
			}
		

		

	})
// })