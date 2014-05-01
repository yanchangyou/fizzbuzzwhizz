

/**

	计算报数结果
	
	参数
	student_numbers ： 学生个数
	diffNumbers ： 多个不同的个位数
	fizzbuzzwhizz_set : 替换位置
	
	返回报数结果数组
*/
function countOff(student_numbers, diffNumbers, fizzbuzzwhizz_set) {
	var result = null;	
	
	if(!check_student_numbers(student_numbers)) {
		alert("输入正确的学生个数，录入的学生个数为：" + student_numbers);
		return result;
	}
	
	var errMsg = checkDiffNumbers(diffNumbers);
	
	if (errMsg) {
		alert(errMsg);
		return result;
	}
	
	
	result = [];
	for(var i=0; i<student_numbers; i++) {		
		result[i] = countOffAt(i+1, diffNumbers, fizzbuzzwhizz_set);
	}
	return result;
	
}
/**
	检查各不相同的数组
*/
function checkDiffNumbers(diffNumbers) {
	var errMsg = "";
	if (!diffNumbers || typeof(diffNumbers.length) !== 'number') {
		errMsg = "参数必须为数组";
		return errMsg;
	}
	for(var i=0; i<diffNumbers.length; i++) {
		if(!checkNum(diffNumbers[i])) {
			errMsg += "第" + i + "个(" +diffNumbers[i] + ")必须是个位数\r\n";
		}
	}
	for(var i=0; i<diffNumbers.length-1; i++) {
		for(var j=i+1; j<diffNumbers.length; j++) {
			if(diffNumbers[i] === diffNumbers[j]) {				
				errMsg += "数字不能相同，第" + i + "个和第" + j + "个相同\r\n";
			}
		}
	}
	return errMsg;
}

/**
	检查录入的个位数
**/
function checkNum(num) {
	return num && !isNaN(num) && (1<num && num < 10);
}
/**
	检查学生人数
*/
function check_student_numbers(student_numbers) {
	return student_numbers && !isNaN(student_numbers) && (0 < student_numbers);
}
/**
	第i个人报数
*/
function countOffAt(index, diffNumbers, fizzbuzzwhizz_set) {
	
	var result = index;
	
	//规则5
	for(var i=0; i<diffNumbers.length; i++) {		
		if((""+index).indexOf(diffNumbers[i]) > -1) {
			result = fizzbuzzwhizz_set[i];
			break;
		}
	}
	
	if (result === index) {
		result = "";
		//规则3,4
		for(var i=0; i<diffNumbers.length; i++) {		
			if(index % diffNumbers[i] === 0) {
				result += fizzbuzzwhizz_set[i];
			}
		}
		if (result === "") {
			result = index;
		}
	}
	return result;
}