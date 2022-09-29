import { Message } from '../utils/typeorm';
import { CreateMessageParam } from '../utils/types';

export interface IMessageService {
  createMessage(params: CreateMessageParam): Promise<Message>;
}
