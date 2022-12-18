import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationsBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @Length(5, 240)
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: string;
}
