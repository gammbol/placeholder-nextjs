import MainLayout from "../../components/MainLayout";
import {useState} from "react";
import Link from "next/link";
import classes from '../../styles/list.module.css';

export default function Posts ({ posts: data }) {
    const [posts, setPost] = useState(data);

    return (
        <MainLayout>
            <h1>Posts Page</h1>
            <ul className={classes.list}>
                {data.map(post => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    console.log(posts);
    return { posts }
}