let owner = 'Awaldeen';
let ownerRole = 'Admin';
let ownerStatus = 'Active';
let action = 'Create';


let username = 'Zack';
let userRole = 'Viewer';
let userStatus = 'Inactive';
let userAction = 'View';

// Logic Flow
// Step 1: Guard clause with if

if (owner === 0) {
    console.log('Owner needed');
} else {
    console.log('Owner has been provided!')
}

// Step 2: if / else for account status

if (ownerStatus === 'Active' ) {
    console.log('the account is Active Proceeding...');
} else {
    console.log('the account is not active please activate the account!')
}

if (userStatus === 'Inactive') {
    console.log('User is not active, please activate the account!')
} else {
    console.log('The account is active proceeding...');
}

if (ownerRole === 'Admin') {
    console.log('Full Access granted');
} else if (userRole === 'Viewer') {
    console.log('You can only view the system');
} else {
    console.log('First of all register as a member!!');
}

// Step 4: Nested ifs (controlled nesting)

if (ownerStatus === 'Active' && owner.length > 5) {
    console.log('Premium Admin previlages enabled');
} else {
    console.log('Basic Admin previlages');
}

// Step 5: switch statement for actions

switch (action.toLowerCase()) { // toLowerCase() so it works even if you type "Create"
  case 'create':
  case 'edit':
    console.log("Modifying data...");
    if (action.toLowerCase() === 'create') {
      console.log("Creating new record...");
    } else {
      console.log("Editing record...");
    }
    break;

  case 'delete':
    console.log("Deleting record...");
    break;

  case 'view':
    console.log("Viewing record...");
    break;

  default:
    console.log("Action not recognized");
}


// Step 6: ternary operator for quick UI-like decisions

// if (owner === 0) {
//     console.log('Owner needed');
// } else {
//     console.log('Owner has been provided!')
// }

let ternary = (owner === 0) ? 'Owner needed' : 'Owner has been provided';

console.log(ternary);

