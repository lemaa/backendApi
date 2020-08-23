export class CreateMessageDTO {
    readonly message: string;
    readonly isMessagePrivate: boolean;
    readonly createdAt: Date;
}