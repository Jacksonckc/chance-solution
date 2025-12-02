import React from "react";
import TeamHeader from "./TeamHeader";
import TeamCard from "./TeamCard";


interface Team {
    name: string;
    title: string;
    bio: string;
    image?: string;
}

interface TeamMembers {
    members: Team[]
}

export default function TeamPage({members}: TeamMembers) {

    return (
        <div
            className={`p-6 transition-colors duration-200`}
            style={{ backgroundColor: 'var(--color-background)' }}>
            <div className='max-w-4xl mx-auto'>
                <TeamHeader />
                <div className='space-y-6'>
                    {members.length > 0 ? (
                        members.map((member, index) => <TeamCard key={index} member={member} description={member?.bio} />)
                    ) : (
                        <div className='card p-8 text-center'>
                            No members
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}
