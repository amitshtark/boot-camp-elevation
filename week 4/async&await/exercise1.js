async function getUserById(userId) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const user = await response.json();
        console.log(`Found user: ${user.name} (${user.email})`);
        return user;
    }

    catch(error){
      console.log('Error fetching user:', error.message);
      return null;
    }
}
// Expected: logs "Found user: Leanne Graham (...)" and returns the user object
getUserById(1).then(user => {
    console.log("Valid test result:", user);
});


// Expected: logs "Found user: ..." and returns the user object
getUserById(5).then(user => {
    console.log("Valid test result:", user);
});


// Expected: logs "Error fetching user: User not found" and returns null
getUserById(999).then(user => {
    console.log("Invalid test result:", user);
});
