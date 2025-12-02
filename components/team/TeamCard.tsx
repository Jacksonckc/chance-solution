import React, { use } from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';
import Team from '@/pages/team';

interface Team {
    name: string;
    title: string;
    image?: string;
}

interface TeamProps {
    member: Team,
    description?: string
}

export default function TeamCard({ member, description }: TeamProps) {
    const t = useTranslations();

    return (
        <div className={`card p-6 hover:shadow-soft transition-all duration-200`}>
            {member.image && (
                <div className="mb-4 -mx-6 -mt-6">
                    <img
                        src={member.image}
                        alt={member.title}
                        className="w-full h-64 object-contain bg-gray-100 rounded-t-lg"
                    />
                </div>
            )}
            <Text variant='h2' as='h2' className='mb-3'>
                {member.name}
            </Text>
            <div className='space-y-2 mb-4'>
                <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                    <span className='font-medium'>{t('team.title')}:</span> {member.title}
                </Text>
                <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                    <span className='font-medium'>{t('team.bio')}:</span> {description}
                </Text>
            </div>
        </div>
    )
}

