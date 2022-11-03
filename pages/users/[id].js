import MainLayout from "../../components/MainLayout";
import classes from '../../styles/list.module.css';
import Post from "../../components/Post";
import Router from "next/router";

export default function User({ data, userId }) {
    return (
        <MainLayout>
            <div className={"mainPost"}>
                <h1 className={classes.posts__title}>User {userId}</h1>
                <p className={"home__body"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className={classes.posts__list}>
                {data.map(post => (
                    <Post key={post.id} post={post}></Post>
                ))}
            </div>
            <button className="view_more" onClick={() => Router.push('/')}>Go Home</button>
        </MainLayout>
    )
}

User.getInitialProps = async ({ query }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${query.id}`)
    const data = await res.json()
    return { data, userId: query.id }
}