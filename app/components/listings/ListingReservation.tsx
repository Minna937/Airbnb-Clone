'use client';

import { Range } from 'react-date-range';

interface ListingReservationProps {
    price: number;
    dateRange: Range;
    totalPrice: number;
    onChange: (value: Range) => void;
    onSubmit: () => void;
    disabled ?: boolean;
    disabledDates: Date[]
}

const ListingReservation:React.FC<ListingReservationProps> = ({
    price,
    dateRange,
    totalPrice,
    onChange,
    onSubmit,
    disabled,
    disabledDates
}) => {
    return (
        <div>

        </div>
    )
};

export default ListingReservation;