import React from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';


interface TeamHeaderProps {
    name: string
}


export default function TeamHeader({ name }: TeamHeaderProps) {
    const t = useTranslations();

    return (
        <div className={`text-center mb-8`}>
            <Text variant='h1' as='h1' className='mb-4'>
                {t("team.header")}
            </Text>
        </div>
            )
}