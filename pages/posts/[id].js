import Router from "next/router";
import MainLayout from "../../components/MainLayout";

export default function Post ({ data: post }) {
    return (
        <MainLayout>
            <h1>Post {post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => Router.push('/posts')}>GO BACK I WANT TO BE MONKEY</button>
        </MainLayout>
    )
}

Post.getInitialProps = async ({ query }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    const data = await response.json();
    return { data }
}