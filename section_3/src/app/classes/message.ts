import { User } from './user';

export class Message {
    message: string;
    createAt: Date;
    sender: User;

    constructor({message, createdAt, sender}) {
        this.message = message;
        this.createAt = createdAt;
        this.sender = new User(sender);
    }
}
