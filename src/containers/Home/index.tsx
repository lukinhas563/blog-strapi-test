import Head from 'next/head';
import { Post } from '@/domain/posts/post';
import { Category, Container } from './styles';
import Header from '@/components/Header';
import MainContainr from '@/components/MainContainer';
import { PostCard } from '@/components/PostCard';
import Footer from '@/components/Footer';
import { SITE_NAME } from '@/config/app-config';

export type HomePageProps = {
    posts: Post[];
    category?: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
    return (
        <>
            <Head>
                <title>{SITE_NAME}</title>
                <meta
                    name="description"
                    content="Este é meu blog de tecnologia."
                />
            </Head>
            <Header />
            {category && <Category>Categoria: {category}</Category>}
            <MainContainr>
                <Container>
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            cover={
                                post.attributes.cover.data.attributes.formats
                                    .small.url
                            }
                            slug={post.id}
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
            <Footer />
        </>
    );
}
