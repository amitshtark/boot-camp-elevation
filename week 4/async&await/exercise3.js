async function dashboard() {
    try{
        const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/comments")
        ]);
        if (!usersResponse.ok) 
            throw new Error('Failed to fetch Users');
        if (!postsResponse.ok) 
            throw new Error('Failed to fetch posts');
        if (!commentsResponse.ok) 
            throw new Error('Failed to fetch comments');
        
        const [users, posts, comments] = await Promise.all([
            usersResponse.json(),
            postsResponse.json(),
            commentsResponse.json()
        ]);

        const summary = {
            totalUsers: users.length,
            totalPosts: posts.length,
            totalComments: comments.length,
            avgPostsPerUser: posts.length / users.length,
            avgCommentsPerPost: comments.length / posts.length
        };

        const topUsers = users.map(user => {
            const userPosts = posts.filter(post => post.userId === user.id);

            const userPostIds = userPosts.map(post => post.id);

            const userComments = comments.filter(comment =>
                userPostIds.includes(comment.postId)
            );

            return {
                name: user.name,
                postCount: userPosts.length,
                commentCount: userComments.length
            };
        })
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 3);

        const recentPosts = posts
            .sort((a, b) => b.id - a.id)
            .slice(0, 5);

        return {
            summary: summary,
            topUsers: topUsers,
            recentPosts: recentPosts
        };
    }

    catch(error){
      console.error('Error: ', error.message);
      return null;
    };
}

dashboard().then(result => {
    console.log(result);
});