import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { IMessageService } from './message';
import { CreateMessageDto } from './dto/create-message.dto';
import { AuthUser } from '../utils/decorators';
import { User } from '../utils/typeorm';

@Controller(Routes.MESSAGES)
export class MessagesController {
  constructor(
    @Inject(Services.MESSAGES)
    private readonly messagesService: IMessageService,
  ) {}

  @Post()
  createMessage(
    @AuthUser() user: User,
    @Body() createMessageDto: CreateMessageDto,
  ) {
    console.log(createMessageDto);
    return this.messagesService.createMessage({ ...createMessageDto, user });
  }
}
