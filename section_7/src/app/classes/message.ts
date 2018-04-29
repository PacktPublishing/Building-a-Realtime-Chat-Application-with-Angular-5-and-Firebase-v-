import { User } from '../interfaces/user';

export class Message {
    message: string;
    createdAt: Date;
    sender: User;

    constructor({message, createdAt, sender}) {
        this.message = message;
        this.createdAt = createdAt;
        this.sender = sender;
    }
}
