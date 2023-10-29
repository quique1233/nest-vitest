import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { CatsService } from 'src/cats/cats.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver, UsersService, CatsService],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
