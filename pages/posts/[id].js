import Router from "next/router";
import MainLayout from "../../components/MainLayout";

export default function Post ({ data: post }) {
    return (
        <MainLayout>
            <div className="mainPost">
                <h1 className="home__title center">{post.title}</h1>
                <p className="home__body">{post.body}</p>
                <button onClick={() => Router.push('/posts')} className="view_more">Go Back</button>
            </div>
        </MainLayout>
    )
}

Post.getInitialProps = async ({ query }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    const data = await response.json();
    return { data }
}