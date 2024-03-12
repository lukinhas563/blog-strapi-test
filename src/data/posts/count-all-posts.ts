import { POSTS_URL } from '@/config/app-config';
import { Data } from '@/domain/posts/post';
import { fetchJason } from '@/utils/fetch-json';

export const countAllPost = async (query = ''): Promise<number> => {
    const url = `${POSTS_URL}&${query}`;
    const posts = await fetchJason<Data>(url);

    const numberOfPosts = posts.meta.pagination.total;

    return numberOfPosts;
};
