import MainLayout from "../../components/MainLayout";
import classes from '../../styles/list.module.css';
import Post from "../../components/Post";
import Router from "next/router";

export default function Posts ({ posts: data, page, photos }) {
    return (
        <MainLayout>
            <h1 className={classes.posts__title}>Posts Page</h1>
            <div className={classes.posts__list}>
                {data.map(post => (
                    <Post key={post.id} post={post} image={photos[post.id - 1]}></Post>
                ))}
            </div>
            <div className={classes.posts__pages}>
                <button className={`${classes.posts__prev} ${classes.posts__button}`} onClick={() => Router.push(`/posts?page=${parseInt(page) - 1}`)} disabled={page <= 1}></button>
                <button className={`${classes.posts__next} ${classes.posts__button}`} onClick={() => Router.push(`/posts?page=${parseInt(page) + 1}`)}></button>
            </div>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({ query: { page = 1 } }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`)
    const posts = await response.json()
    const resPhotos = await fetch(`https://jsonplaceholder.typicode.com/photos`)
    const photos = await resPhotos.json();
    return { posts, page, photos }
}