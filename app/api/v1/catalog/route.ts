export const dynamic = 'force-static';
import {NextResponse} from 'next/server';
import items from '../../../../data/catalog.json';
export function GET(){return NextResponse.json({source:'OpenSea public collection catalog and BMverse artwork snapshot',verifiedLive:false,items});}
