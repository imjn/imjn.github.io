import fetch from 'node-fetch';

interface User {
    id: number;
    key: string;
    name: string;
    urlname: string;
    nickname: string;
    userProfileImagePath: string;
    customDomain: string | null;
    disableSupport: boolean;
    disableGuestPurchase: boolean;
    emailConfirmedFlag: boolean;
    likeAppealText: string;
    likeAppealImage: string | null;
    purchaseAppealTextNote: string;
    twitterNickname: string;
    shareAppeal: {
        text: string | null;
        image: string | null;
    };
    magazineAddAppeal: {
        text: string | null;
        image: string | null;
    };
}

interface NotePost {
    id: number;
    type: string;
    status: string;
    name: string;
    description: string | null;
    likeCount: number;
    price: number;
    key: string;
    slug: string;
    publishAt: string;
    thumbnailExternalUrl: string;
    eyecatch: string;
    user: User;
    canRead: boolean;
    isAuthor: boolean;
    externalUrl: string | null;
    customDomain: string | null;
    body: string;
    hashtags: {
        hashtag: {
        name: string;
        };
    }[];
    noteUrl: string;
}

interface NoteApiResponse {
    data: {
        contents: NotePost[];
        isLastPage: boolean;
        totalCount: number;
    };
}

export async function getNotePostsData(): Promise<NotePost[]> {
    const res = await fetch('https://note.com/api/v2/creators/imjn/contents?kind=note&page=1');
    const data = await res.json() as NoteApiResponse;
    
    return data.data.contents.map((content: any) => ({
        id: content.id,
        type: content.type,
        status: content.status,
        name: content.name,
        description: content.description,
        likeCount: content.likeCount,
        price: content.price,
        key: content.key,
        slug: content.slug,
        publishAt: content.publishAt,
        thumbnailExternalUrl: content.thumbnailExternalUrl,
        eyecatch: content.eyecatch,
        user: content.user,
        canRead: content.canRead,
        isAuthor: content.isAuthor,
        externalUrl: content.externalUrl,
        customDomain: content.customDomain,
        body: content.body,
        hashtags: content.hashtags,
        noteUrl: content.noteUrl
    }));
}
