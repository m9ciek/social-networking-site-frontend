import { User } from './user';

export class Post{
    id: number;
    body: string;
    user: User;
    date: string;
    imageURL: string;
}