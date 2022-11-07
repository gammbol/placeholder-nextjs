import MainLayout from "../components/MainLayout";
import Post from "../components/Post";
import Router from "next/router";
import Link from "next/link";

export default function Home ({ posts, photos }) {
    const [headPost, ...restPost] = posts;
    const [headPhoto, ...restPhoto] = photos;


    return(
        <MainLayout>
            <div className="mainPost mainPost__flex">
                <div className="mainPost__photo">
                    <img className="mainPost__img" src={headPhoto.url} alt=""/>
                </div>
                <div className="mainPost__post">
                    <p className="home__id">Post {headPost.id}</p>
                    <Link href={`/posts/${headPost.id}`} className={"post__link"}>
                        <h1 className="home__title">{headPost.title}</h1>
                    </Link>
                    <p className="home__body">{headPost.body}</p>
                    <Link href={`/users/${headPost.userId}`} className={"post__link"}>
                        <p className="home__author">BY  USER {headPost.userId}</p>
                    </Link>
                </div>
            </div>
            <hr/>
            <div className="home__restPosts">
                {restPost.map(post => (
                    <Post key={post.id} post={post} image={restPhoto[post.id - 2]}></Post>
                ))}
            </div>
            <button className="view_more" onClick={() => Router.push('/posts')}>View more posts</button>
        </MainLayout>
    )
}

Home.getInitialProps = async () => {
    const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
    const posts = await resPosts.json();
    const resPhotos = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${posts.length}`)
    const photos = await resPhotos.json();
    return { posts, photos }
}