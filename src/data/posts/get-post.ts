import { Data, Post } from '@/domain/posts/post';
import { fetchJason } from '@/utils/fetch-json';
import { markdowToHtml } from '@/utils/markdown-to-html';

export const getPost = async (id: string | string[]): Promise<Post> => {
    const idString = Array.isArray(id) ? id[0] : id;

    const url = `https://strapi-test-ocrw.onrender.com/api/posts/${idString}?populate=*/1`;

    const jsonPosts = await fetchJason<Data>(url);

    const postData = jsonPosts.data;

    // Transform markdown to HTML
    postData.attributes.content = await markdowToHtml(
        postData.attributes.content,
    );

    return postData;
};
