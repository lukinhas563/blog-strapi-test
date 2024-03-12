import Link from 'next/link';
import Image from 'next/image';
import * as Styled from './styled';

export type PostCardProps = {
    slug: number;
    title: string;
    cover: string;
    imageWidth: number;
    imageHeight: number;
};

export function PostCard({
    slug,
    title,
    cover,
    imageWidth,
    imageHeight,
}: PostCardProps) {
    return (
        <Styled.Container>
            <Styled.PostCardCover>
                <Link href={`/post/${slug}`}>
                    <Image
                        src={cover}
                        width={imageWidth}
                        height={imageHeight}
                        alt={title}
                    />
                </Link>
            </Styled.PostCardCover>

            <Styled.PostCardHeading>
                <Link href={`/post/${slug}`}>{title}</Link>
            </Styled.PostCardHeading>
        </Styled.Container>
    );
}
