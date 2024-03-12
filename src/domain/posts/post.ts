export type PostID = number;

export type PostAuthor = {
    id: PostID;
    name: string;
    created_by: number;
    updated_by: number;
    created_at: string;
    updated_at: string;
};

export type PostCategory = {
    id: PostID;
    name: string;
    created_by: number;
    updated_by: number;
    created_at: string;
    updated_at: string;
};

export type PostCreatedBy = {
    id: PostID;
    firstname: string;
    lastname: string;
    username: null;
};

export type PostCoverFormat = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
};

export type PostCover = PostCoverFormat & {
    data: {
        id: PostID;
        attributes: {
            alternativeText: string;
            caption: string;
            previewUrl: null;
            provider: string;
            created_by: number;
            updated_by: number;
            created_at: string;
            updated_at: string;
            formats: {
                thumbnail: PostCoverFormat;
                small: PostCoverFormat;
                medium: PostCoverFormat;
                large: PostCoverFormat;
            };
        };
    };
};

export type PostData = {
    title: string;
    content: string;
    slug: string;
    author: PostAuthor;
    category: PostCategory;
    created_by: PostCreatedBy;
    updated_by: PostCreatedBy;
    created_at: string;
    updated_at: string;
    cover: PostCover;
};

export type Post = {
    id: PostID;
    attributes: PostData;
};

export type MetaData = {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
};

export type Data = {
    data: Post;
    meta: MetaData;
};
