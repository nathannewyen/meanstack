// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.

// HINT: Keep in mind that you may use arrays and objects to keep your information organized!

// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

function bracesValid(braces) {
    var openParensCount = 0;
    var closeParensCount = 0;
    for (var i = 0; i < braces.length; i++) {
        if (braces[i] == "(" || braces[i] == "[" || braces[i] == "{") {
            openParensCount++;
        } else if (braces[i] == ")" || braces[i] == "]" || braces[i] == "}") {
            closeParensCount++;
        }
        if (closeParensCount > openParensCount) {
            return false;
        }
    }
    if (closeParensCount != openParensCount) {
        return false;
    } else {
        return true
    }
}
console.log(bracesValid('{}{}{(())}'))
console.log(bracesValid('{{()}}'))