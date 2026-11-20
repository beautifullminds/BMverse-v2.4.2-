export type NFT={id:string;name:string;imageUrl:string|null;chainId:number|null;contractAddress:string|null;tokenId:string|null;listingPrice:string|null;status:'awaiting_metadata'|'indexed'|'listed'};
export const bmMega={slug:'bm-mega',name:'BM MEGA Collection',ecosystem:'ANTVERSE / BMverse',description:'A featured collection awaiting verified NFT metadata and artwork.',assets:[] as NFT[]};
// Populate assets only from actual owner-provided media/metadata or independently verified on-chain records.
