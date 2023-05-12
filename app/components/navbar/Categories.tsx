'use client';

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { IoDiamond } from 'react-icons/io5';
import { BsSnow } from 'react-icons/bs';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [{
    label: 'Beach',
    icon: TbBeach,
    description: 'This perperty is close to the beach!'
},
{
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This perperty has windmills!'
},
{
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This perperty is modern!'
},
{
    label: 'Countryside',
    icon: TbMountain,
    description: 'This perperty is in the countryside!'
},
{
    label: 'Pools',
    icon: TbPool,
    description: 'This perperty has a pool!'
},
{
    label: 'Island',
    icon: GiIsland,
    description: 'This perperty is on an island!'
},
{
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This perperty is close to a lake!'
},
{
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This perperty has skiing activities!'
},
{
    label: 'Castle',
    icon: GiCastle,
    description: 'This perperty is in a castle!'
},
{
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This perperty has camping activities!'
},
{
    label: 'Arctic',
    icon: BsSnow,
    description: 'This perperty is in arctic!'
},
{
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This perperty is in a cave!'
},
{
    label: 'Desert',
    icon: GiCactus,
    description: 'This perperty is in the desert!'
},
{
    label: 'Barns',
    icon: GiBarn,
    description: 'This perperty is in the Barn!'
},
{
    label: 'Lux',
    icon: IoDiamond,
    description: 'This perperty is luxurious!'
},
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto">

                {categories.map((item) => {
                    return <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                })}


            </div>

        </Container>
    )
}

export default Categories;