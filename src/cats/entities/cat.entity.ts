import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
