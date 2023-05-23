import prisma from '@/app/libs/prismadb';

interface Iparams {
    listingId?: string;
}

export async function getListingById(
    params: Iparams
) {
    try {
        const { listingId } = params;

        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId
            },

            include: {
                user: true
            }
        });

        if (!listingId) {
            return null
        }

        return listing;
    }
    catch (error: any) {
        throw new Error(error);
    }
}