export interface Transaction {
    id?: number;
    description?: string;
    bank: string;
    value: number;
    timestamp: string;
    type: TransactionType;
}

export enum TransactionType {
    CREDIT = 0,
    DEBT = 1
}