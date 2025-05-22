function firstWord(s) {
  let result="";
	for(let i=0;i<s.length;i++){
		const char=s[i];
		if(char==' '){
			return result;
		}
		result+=char;
	}
	return result;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
