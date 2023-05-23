'use client';

import { SafeUser } from "@/app/types";

interface ListingHeadProps {
    title: string;
    locationValue: string;
    imageSrc: string;
    id: string;
    currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    locationValue,
    imageSrc,
    id,
    currentUser
}) => {
    
    return (
        <div></div>
    )
}

export default ListingHead;