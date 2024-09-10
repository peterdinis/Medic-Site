export interface CalendarButtonProps {
    icon: JSX.Element;
    text: string;
}

export type ShareButtonProps = Pick<CalendarButtonProps, 'icon'>;
