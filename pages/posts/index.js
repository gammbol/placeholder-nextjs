import MainLayout from "../../components/MainLayout";
import classes from '../../styles/list.module.css';
import Post from "../../components/Post";

export default function Posts ({ posts: data }) {
    return (
        <MainLayout>
            <h1 className={classes.posts__title}>Posts Page</h1>
            <div className={classes.posts__list}>
                {data.map(post => (
                    <Post key={post.id} post={post}></Post>
                ))}
            </div>
        </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12?')
    const posts = await response.json()
    return { posts }
}