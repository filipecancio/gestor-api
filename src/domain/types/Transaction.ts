export interface TransactionType {
    id?: number;
    description?: string;
    bank: string;
    value: number;
    timestamp: string;//Date;
    type: TransactionStatus;
}

export enum TransactionStatus {
    CREDIT = 0,
    DEBT = 1
}