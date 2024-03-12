import { formateDate } from '@/utils/format-date';
import { Container } from './styled';

export type DateProps = {
    date: string;
};

export default function Date({ date }: DateProps) {
    return <Container>{formateDate(date)}</Container>;
}
