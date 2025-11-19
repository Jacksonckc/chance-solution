import React from "react";
import Text from "@/components/atoms/Text";
import TeamHeader from "./TeamHeader";
import { useTranslations } from "@/hooks/useTranslations";
import TeamCard from "./TeamCard";


interface Team {
    Name: string,
    Title: string
}

interface TeamMembers {
    members: Team[]
}

export default function TeamPage({
    members
}: TeamMembers) {
    const t = useTranslations();

    return (
        <div>
            <TeamHeader name="TEAM" />
            <div>
                {members.length > 0 ? (
                    members.map((member, index) => <TeamCard key={index} member={member} />)
                ) : (
                    <div className='card p-8 text-center'>
                        No members
                    </div>
                )}
            </div>
        </div>
    )
}
