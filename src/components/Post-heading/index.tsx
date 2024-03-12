import { Conainer } from './styled';

export type PostHeadingProps = {
    children: React.ReactNode;
};

export default function Heading({ children }: PostHeadingProps) {
    return <Conainer>{children}</Conainer>;
}
