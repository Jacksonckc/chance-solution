import React from "react";
import team from '@/MockData/team.json';
import TeamPage from "@/components/team/TeamPage";


export default function Team() {
    return <TeamPage members={team}/>
}