import classes from '../styles/post.module.css'
import Link from "next/link";

export default function Post({ post }) {
    return (
        <>
            <div className={classes.container}>
                <p className={classes.post__id}>Post {post.id}</p>
                <Link href={`/posts/${post.id}`} className={"post__link"}>
                    <h2 className={classes.post__title}>{post.title}</h2>
                </Link>
                <Link href={`/users/${post.userId}`} class={"post__link"}>
                    <p className={classes.post__author}>BY USER {post.userId}</p>
                </Link>
            </div>
        </>
    )
}