import React from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';



export default function TeamHeader() {
    const t = useTranslations();

    return (
        <div className={`text-center mb-8`}>
            <Text variant='h1' as='h1' className='mb-4'>
                {t("team.header")}
            </Text>
        </div>
            )
}