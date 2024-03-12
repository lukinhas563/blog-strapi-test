import Link from 'next/link';
import { Container } from './styled';
import { SITE_NAME } from '@/config/app-config';

export default function Header() {
    return (
        <Container>
            <Link href={'/'}>{SITE_NAME}</Link>
        </Container>
    );
}
