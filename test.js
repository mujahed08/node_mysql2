const roles = ["ROLE_BUYER", "ROLE_SELLER", "ROLE_BROKER", "ROLE_USER", "ROLE_ADMIN", "ROLE_SA"];

let role_request = ["ROLE_OWNER", "ROLE_ADMIN", "ROLE_SELLER", "ROLE_BUYER"];



// Function to check if each requested role exists and return found roles
function findRequestedRoles(roles, role_request) {
    let foundRoles = [];
    for (let i = 0; i < role_request.length; i++) {
        if (roles.includes(role_request[i])) {
            foundRoles.push(role_request[i]);
        }
    }
    return foundRoles;
}

// Find requested roles that exist
const foundRoles = findRequestedRoles(roles, role_request);

if (foundRoles.length > 0) {
    console.log("Requested roles found:", foundRoles.join(", "));
} else {
    console.log("No requested roles were found.");
}


// function extractMatchingElements(mainArray, matchingArray) {
//     return mainArray.filter(element => matchingArray.includes(element));
// }

// // Example usage:
// const mainArray = [1, 2, 3, 4, 5];
// const matchingArray = [2, 4, 6];
// const matchingElements = extractMatchingElements(mainArray, matchingArray);
// console.log(matchingElements); // Output: [2, 4]
