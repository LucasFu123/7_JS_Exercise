var name = "jAKE"

// only change code below this line

var firstChar = name.slice(0, 1); //get the first character of the name

var upperCaseFirstChar = firstChar.toUpperCase(); //change firstChar to upper case

var restOfName = name.slice(1, 4).toLowerCase(); //change the rest of the name to lower case

var capitalizedName = upperCaseFirstChar + restOfName; //concatenate two variables together: upperCaseChar + lowerCaseChars

// only change code above this line


module.exports = {
    firstChar,
    upperCaseFirstChar,
    restOfName,
    capitalizedName
}