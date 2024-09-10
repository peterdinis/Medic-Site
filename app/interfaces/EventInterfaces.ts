import { ReactNode } from 'react';

export interface EventDetailsProps {
    title: string;
    type: string;
    organizer: string;
    date: string;
    location: {
        name: string;
        address: string;
    };
    language: string;
    website: string;
}

export interface InfoItemProps {
    iconSrc: ReactNode;
    label: string;
    value: string;
    subValue?: string;
    isLink?: boolean;
}
