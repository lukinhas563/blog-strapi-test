import { POSTS_URL } from '@/config/app-config';
import { Data, Post } from '@/domain/posts/post';
import { fetchJason } from '@/utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<Post[]> => {
    const url = `${POSTS_URL}&${query}`;
    const posts = await fetchJason<Data>(url);

    const postData = posts.data;

    return postData;
};
