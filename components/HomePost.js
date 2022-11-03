import classes from '../styles/homePost.module.css'

export default function HomePost({ post }) {
    return (
        <>
            <div className={classes.container}>
                <p className={classes.post__id}>Post {post.id}</p>
                <h2 className={classes.post__title}>{post.title}</h2>
                <p className={classes.post__author}>BY USER {post.userId}</p>
            </div>
        </>
    )
}