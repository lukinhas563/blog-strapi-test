import { Post } from '@/domain/posts/post';
import { Container } from './styles';
import Header from '@/components/Header';
import MainContainr from '@/components/MainContainer';

export type HomePageProps = {
    posts: Post[];
};

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Header />
            <MainContainr>
                <Container>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <h2>{post.attributes.title}</h2>
                        </div>
                    ))}
                </Container>
            </MainContainr>
        </>
    );
}
