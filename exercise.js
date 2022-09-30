/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    let separatewhenthereisnospace = str.replace(/([a-z])([A-Z])/g, "$1 $2")
    let twobigcasestogether = separatewhenthereisnospace.replace(/([A-Z])([A-Z])/g, "$1 $2")
    let spaceforadash = twobigcasestogether.replace(/\s/g, "-")
    
    // This take every work and change it to lowercase
    return spaceforadash.toLowerCase();

    /* Only make changes below this comment */
}

let A = spinal('ThisIsATest');
console.log(A);



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;