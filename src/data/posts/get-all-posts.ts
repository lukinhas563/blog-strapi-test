import { POSTS_URL } from '@/config/app-config';
import { Post } from '@/domain/posts/post';
import { fetchJason } from '@/utils/fetch-json';

export const getAllPosts = async (): Promise<Post[]> => {
    const posts = await fetchJason<Post[]>(POSTS_URL);

    return posts;
};
