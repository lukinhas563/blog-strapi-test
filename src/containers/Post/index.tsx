import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainContainr from '@/components/MainContainer';
import PostCover from '@/components/Post-cover';
import Heading from '@/components/Post-heading';
import { Post } from '@/domain/posts/post';
import PostDetails from '@/components/Post-deails';
import PostContainer from '@/components/Post-container';
import Comments from '@/coments';
import Head from 'next/head';
import { SITE_NAME } from '@/config/app-config';
import { removeHtml } from '@/utils/remove-html';

export type PostProps = {
    post: Post;
};

export default function PostPage({ post }: PostProps) {
    return (
        <>
            <Head>
                <title>
                    {post.attributes.title} - {SITE_NAME}
                </title>
                <meta
                    name="description"
                    content={removeHtml(post.attributes.content).slice(0, 150)}
                />
            </Head>
            <Header />
            <MainContainr>
                <Heading>{post.attributes.title}</Heading>
                <PostCover
                    coverUrl={
                        post.attributes.cover.data.attributes.formats.large.url
                    }
                    alt={post.attributes.slug}
                />
                <PostDetails
                    author={post.attributes.author.data.attributes.name}
                    category={post.attributes.category.data.attributes.name}
                    date={post.attributes.createdAt}
                />
                <PostContainer content={post.attributes.content} />
                <Comments
                    slug={post.id.toString()}
                    title={post.attributes.title}
                />
            </MainContainr>
            <Footer />
        </>
    );
}
