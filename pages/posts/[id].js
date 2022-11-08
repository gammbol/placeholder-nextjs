import Router from "next/router";
import MainLayout from "../../components/MainLayout";

export default function Post ({ data: post, photo }) {
    return (
        <MainLayout>
            <div className="mainPost posts__main">
                <h1 className="home__title center">{post.title}</h1>
                <div className="posts__photo">
                    <img className="posts__img" src={photo.url} alt=""/>
                </div>
                <p className="home__body">{post.body}</p>
                <button onClick={() => Router.push('/posts')} className="view_more">Go Back</button>
            </div>
        </MainLayout>
    )
}

Post.getInitialProps = async ({ query }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    const data = await response.json();
    const resPhotos = await fetch(`https://jsonplaceholder.typicode.com/photos/${query.id}`)
    const photo = await resPhotos.json();
    return { data, photo }
}