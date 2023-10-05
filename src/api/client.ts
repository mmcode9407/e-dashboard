import { LeadDto } from '../data/leads/dto';
import { UserDto } from '../data/user/dto';

abstract class Client {
   abstract async findManyLeads(params: { take: number }): Promise<LeadDto[]>;
   abstract async signIn(): Promise<UserDto>;
}

export class ApiClient implements Client {
   async findManyLeads(): Promise<LeadDto[]> {
      return Promise.resolve([]);
   }

   async signIn(): Promise<UserDto> {
      return Promise.resolve({ id: 'unique-id' });
   }
}
