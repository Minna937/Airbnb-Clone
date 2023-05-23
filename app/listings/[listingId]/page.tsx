import getListingById from "@/app/actions/getListingById";

interface Iparams {
    listingId?: string;
}

const ListingPage = async ({ params }: { params: Iparams }) => {
    const listing = await getListingById(params);

    return (
        <div>
           {listing.title}
        </div>
    )
};

export default ListingPage;