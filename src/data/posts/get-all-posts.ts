import { POSTS_URL } from '@/config/app-config';
import { Post } from '@/domain/posts/post';
import { fetchJason } from '@/utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<Post[]> => {
    const url = `${POSTS_URL}&${query}`;
    const posts = await fetchJason<Post[]>(url);

    return posts;
};
