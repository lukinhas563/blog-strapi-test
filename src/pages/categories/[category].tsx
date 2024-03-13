import HomePage from '@/containers/Home';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { Post } from '@/domain/posts/post';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
    posts: Post[];
    category: string;
};

export default function Category({ posts, category }: CategoryProps) {
    return (
        <>
            <HomePage posts={posts} category={category} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const urlQuery = `sort[0]=id:desc&filters[$and][0][category][name][$eq]=${ctx.query.category}`;
    const posts = await getAllPosts(urlQuery);

    return {
        props: { posts, category: ctx.query.category },
    };
};
