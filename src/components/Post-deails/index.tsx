import Link from 'next/link';
import Date from '../Post-date';
import { Container } from './styled';

export type PostDetailsProps = {
    date: string;
    author: string;
    category: string;
};

export default function PostDetails({
    author,
    category,
    date,
}: PostDetailsProps) {
    return (
        <Container>
            Publicado em <Date date={date} /> por {author} |{' '}
            <Link href={`/categories/${category}`}>{category}</Link>
        </Container>
    );
}
