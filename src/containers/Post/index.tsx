import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainContainr from '@/components/MainContainer';
import { Post } from '@/domain/posts/post';

export type PostProps = {
    post: Post;
};

export default function PostPage({ post }: PostProps) {
    return (
        <>
            <Header />
            <MainContainr>
                <h2>{post.attributes.title}</h2>
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
