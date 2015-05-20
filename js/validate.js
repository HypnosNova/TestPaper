function checkMobile(str) {
	var re = /^1\d{10}$/
	return re.test(str);
	
}

function checkPhone(str) {
	var re = /^0\d{2,3}-?\d{7,8}$/;
	var re2 = /\d{7,8}$/;
	return re.test(str)||re2.test(str);
}

function checkNumber(str) { 
　　var reg = new RegExp("^[0-9]*$");  
	return reg.test(str);
}

function isNotEmpty(str){
	return str!=null&&str.length>0;
}
