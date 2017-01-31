$("#f1-calculate").on("click", function() {
  	var num1 = $("#f1-a").val()
  	var num2 = $("#f1-b").val()
    if (typeof(parseInt(num1)) !== "number" || typeof(parseInt(num2)) !== "number"){
      $("#f1").addClass('has-error')
      $(".help-block").css("visibility","visible")
    } else  {
      var result = num1/100*num2
      $("#f1-result").val(result)
  }
})



$("#f2-calculate").on("click", function() {
	var num1 = $("#f2-a").val()
	var num2 = $("#f2-b").val()
	var result = num1/num2*100
	$("#f2-result").val(result)
})
$("#f3-calculate").on("click", function() {
	var num1 = $("#f3-a").val()
	var num2 = $("#f3-b").val()
	var result = (num1-num2)/num1*100
	$("#f3-result").val(result)
})