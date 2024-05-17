// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

/*function capitalize(str){
    return str.split(' ').map(A => A.charAt(0).toUpperCase() + A.slice(1)).join(' ');
}
let str = "this is javascript";
let upperstr = capitalize(str);
console.log(upperstr);*/



// Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]


/*let array = ["javascript", "react", "node"];
let result = [];

for(let i=0; i < array.length; i++ ){
    result.push(array[i].includes("javascript"));
}
console.log(result);*/

// Given a string which contains an email address, return true if the given email is valid, else return false.
// input - puran@navgurukul.org
// output - true

// input - puran@navgurukul
// output - false

// input - puran@gmail.com
// output - true

/*function emailValid(email) {
    return email.endsWith('.org') || email.endsWith('.com');
}
// var val = emailValid("puran@navgurukul.org");
// var val = emailValid("puran@navgurukul");
var val = emailValid("puran@gmail.com");
console.log(val);*/

// Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i


/*function reverse(A){
    return A.split('').reverse().join('');
}
let input = "i am learning javascript";
let output = reverse(input);
console.log(output);*/

//Reveres the given string word by word then return the reversed string.
	// input - Success comes to those who work hard
	// output - hard work who those to comes Success

    /*function reverse(A){
        return A.split(' ').reverse().join(' ');
    }
    let B = "Success comes to those who work hard";
    let C = reverse(B);
    B = reverse(B);
    console.log(B);*/

    
    

