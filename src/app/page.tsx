import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n/config';

export default function RootRedirect() {
    redirect(`/${defaultLocale}`);
}
