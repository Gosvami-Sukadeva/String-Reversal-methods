/*
* First way of  string reversal in Javascript
*/

function reverseString(str) {
// Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"

}

console.log(reverseString("hello"));

/*
* Second way of  string reversal in Javascript
*/

function reverseString1(str){
    
    var newString = "";
    for(var i= str.length -1; i>=0; i--){
        newString += str[i];
    }
  return newString;  
    
}

function reverseString2(str) {
  if (str === "") // This is the terminal case that will end the recursion
    return "";
  
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}


console.log(reverseString1("demo1"));
console.log(reverseString1("madam"));
console.log(reverseString2("palindrome"));
    
    
    
    
    
    
    
    
    
    
    




