import HomePage from '@/containers/Home';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { Post } from '@/domain/posts/post';
import { GetStaticProps } from 'next';

export type HomeProps = {
    posts: Post[];
};

export default function Home({ posts }: HomeProps) {
    return (
        <>
            <HomePage posts={posts} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts('sort[0]=id:desc&pagination[pageSize]=10');

    return {
        props: { posts },
    };
};
