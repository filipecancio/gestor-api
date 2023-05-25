
import * as express from 'express';
import { TransactionType } from './Transaction';

export interface TransactionQuery extends express.Request {
    type?: TransactionType;
    month?: number;
    year?: number;
    description?: string;
}