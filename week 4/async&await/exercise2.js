async function getUserWithPosts(userId) {
    try{
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(!user.ok)
            throw new Error('User not found');

        const userData = await user.json();

        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        if(!posts.ok)
            throw new Error('Failed to fetch posts');
        const postsData = await posts.json();
        return {user: userData, posts: postsData};
    }
    catch(error){
        console.log('Error: ', error.message);
        return null;
    }
}
// Test with valid user ID
// Expected: returns an object with user info and an array of posts
getUserWithPosts(1).then(result => {
    console.log("Valid user with posts:", result);
});


// Test with another valid user ID
// Expected: returns an object with user info and that user's posts
getUserWithPosts(5).then(result => {
    console.log("Another valid user with posts:", result);
});


// Test with invalid user ID
// Expected: logs "Error: User not found" and returns null
getUserWithPosts(999).then(result => {
    console.log("Invalid user result:", result);
});