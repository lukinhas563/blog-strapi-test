import { Post, PostData } from '@/domain/posts/post';
import { useEffect, useState } from 'react';

export type HomeProps = {
    posts: Post[];
};

const getPosts = async (): Promise<Post[]> => {
    const posts = await fetch(
        'https://strapi-test-ocrw.onrender.com/api/posts?populate=*',
    );
    const jsonPosts = await posts.json();

    return jsonPosts.data;
};

export default function Home({ posts }: HomeProps) {
    return (
        <>
            <h1>Hello World</h1>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.attributes.title}</h2>
                    </div>
                ))}
            </div>
        </>
    );
}

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: { posts },
    };
}
