import { Post } from '@/domain/posts/post';
import { Container } from './styles';
import Header from '@/components/Header';
import MainContainr from '@/components/MainContainer';
import { PostCard } from '@/components/PostCard';

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
                        <PostCard
                            key={post.id}
                            cover={
                                post.attributes.cover.data.attributes.formats
                                    .small.url
                            }
                            slug={post.attributes.slug}
                            title={post.attributes.title}
                            imageWidth={
                                post.attributes.cover.data.attributes.formats
                                    .small.width
                            }
                            imageHeight={
                                post.attributes.cover.data.attributes.formats
                                    .small.height
                            }
                        />
                    ))}
                </Container>
            </MainContainr>
        </>
    );
}
