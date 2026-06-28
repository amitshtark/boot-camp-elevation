import { useEffect, useState } from "react"

function Post() {

    const [posts, setPosts] = useState([])
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700)



    useEffect(() => {
        const getData = async function(){
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        setPosts(data.slice(0,10));
        }
        getData();
    }, [])


    useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
    }, [])



  return (
    <div className={isSmallScreen ? "posts-container small" : "posts-container"}>
      {posts.map((post) => {
        return(
        <div key={post.id} className="post-box">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>

        )
        })}
    </div>
  );
}
export default Post