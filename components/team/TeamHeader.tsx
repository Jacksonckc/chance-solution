import React from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';


interface TeamHeaderProps {
    name: string
}


export default function TeamHeader({ name }: TeamHeaderProps) {
    const t = useTranslations();

    return (
        <div>
            The Team
        </div>
    )
}