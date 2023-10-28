import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  imports: [CatsModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
