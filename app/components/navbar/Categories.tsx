import Container from "../Container";
import { TbBeach } from 'react-icons/tb';
import { GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "../CategoryBox";

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
    description: 'This perperty is modern'
},
]

const Categories = () => {
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
                        description={item.description}
                        icon={item.icon}
                    />
                })}


            </div>

        </Container>
    )
}

export default Categories;