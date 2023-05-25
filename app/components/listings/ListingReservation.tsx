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

const ListingReservation = () => {
    return (
        <div>

        </div>
    )
};

export default ListingReservation;