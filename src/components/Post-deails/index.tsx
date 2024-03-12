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
            Publicado por <Date date={date} />
        </Container>
    );
}
