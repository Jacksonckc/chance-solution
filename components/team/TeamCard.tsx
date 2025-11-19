import React, { use } from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';

interface Team {
    Name: string,
    Title: string
}

interface TeamProps {
    member: Team,
    description?: string
}

export default function TeamCard({ member, description }: TeamProps) {
    const t = useTranslations();

    return (
        <div className={`card p-6 hover:shadow-soft transition-all duration-200`}>
            <Text variant='h2' as='h2' className='mb-3'>
                {member.Name}
            </Text>
            <div className='space-y-2 mb-4'>
                <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                    <span className='font-medium'>{t('team.title')}:</span> {member.Title}
                </Text>
            </div>
        </div>
    )
}

