import { Moment } from 'moment';

export interface IPlayer {
    id?: number;
    userName?: string;
    nickName?: string;
    fullName?: string;
    address?: string;
    email?: string;
    mobile?: string;
    phone?: string;
    contractId?: string;
    gameAccount?: string;
    creationDate?: Moment;
}

export class Player implements IPlayer {
    constructor(
        public id?: number,
        public userName?: string,
        public nickName?: string,
        public fullName?: string,
        public address?: string,
        public email?: string,
        public mobile?: string,
        public phone?: string,
        public contractId?: string,
        public gameAccount?: string,
        public creationDate?: Moment
    ) {

    }
}
