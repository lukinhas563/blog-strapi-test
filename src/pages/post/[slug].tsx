import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { Post } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import PostPage from '@/containers/Post';
import { notFound } from 'next/navigation';

export type DynamicPostProps = {
    post: Post;
};

export default function DynamicPost({ post }: DynamicPostProps) {
    return <PostPage post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.id.toString(),
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const postId = ctx.params?.slug;

    if (!postId) return { notFound: true };

    const posts = await getPost(postId);

    return {
        props: { post: posts },
    };
};
