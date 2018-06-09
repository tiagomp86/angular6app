export interface Message {
    id: number;
    senderId: number;
    senderKnownAs: number;
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnownAs: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dataRead: Date;
    messageSent: Date;
}
