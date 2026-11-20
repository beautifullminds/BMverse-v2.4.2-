export const dynamic = 'force-static';
import {NextResponse} from 'next/server';
export function GET(){return NextResponse.json({project:'BMverse',blueprintVersion:'2.4.2',stage:'frontend-prototype',networkConfigured:false,transactionsEnabled:false,modules:['explore','play','learn','marketplace','dex','community','dashboard','studio','admin']});}
