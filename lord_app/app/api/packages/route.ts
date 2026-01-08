import {NextResponse} from 'next/server';
import {fetchLabPackages} from '@/app/lib/oddo';

export async function GET(){
    try {
        const packages = await fetchLabPackages();
        // console.log('Fetched lab packages:', packages);

        return NextResponse.json({
            success: true,
            data: packages,
        });
    } catch (error) {
        console.error('API /packages error:', error);   
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch lab packages',
            },
            {status: 500}
        );          
    }

}