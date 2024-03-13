import { Container } from './styled';

export type PostContainerProps = {
    content: string;
};

export default function PostContainer({ content }: PostContainerProps) {
    return <Container dangerouslySetInnerHTML={{ __html: content }} />;
}
