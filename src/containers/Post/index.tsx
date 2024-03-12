import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainContainr from '@/components/MainContainer';
import PostCover from '@/components/Post-cover';
import Image from 'next/image';
import Heading from '@/components/Post-heading';
import { Post } from '@/domain/posts/post';

export type PostProps = {
    post: Post;
};

export default function PostPage({ post }: PostProps) {
    return (
        <>
            <Header />
            <MainContainr>
                <Heading>{post.attributes.title}</Heading>
                <PostCover
                    coverUrl={
                        post.attributes.cover.data.attributes.formats.large.url
                    }
                    alt={post.attributes.slug}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: post.attributes.content,
                    }}
                />
            </MainContainr>
            <Footer />
        </>
    );
}
