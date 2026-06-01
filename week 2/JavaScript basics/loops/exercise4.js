const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]
let temp = -1;
for(let i=0;i<posts.length;i++)
  {
    if(posts[i].id === 2)
    {
        temp = i;
    }
  }
for(let i=0;i<posts[temp].comments.length;i++)
  {
    if(posts[temp].comments[i].id === 3)
    {
        posts[temp].comments.splice(i, 1);
        break;
    }
  }
console.log(posts[temp].comments);