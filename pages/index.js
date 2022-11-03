import MainLayout from "../components/MainLayout";
import HomePost from "../components/HomePost";

export default function Home ({ posts }) {
    const [head, ...rest] = posts;

    return <MainLayout>
        <div className="home__mainPost">
            <p className="home__id">Post {head.id}</p>
            <h1 className="home__title">{head.title}</h1>
            <p className="home__body">{head.body}</p>
            <p className="home__author">BY  USER {head.userId}</p>
        </div>
        <hr/>
        <div className="home__restPosts">
            {rest.filter(item => item.id <= 7).map(post => (
                <HomePost key={post.id} post={post}></HomePost>
            ))}
        </div>
    </MainLayout>
}

Home.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
    return { posts }
}