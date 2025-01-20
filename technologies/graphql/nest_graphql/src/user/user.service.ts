import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  create(user: Partial<User>): User {
    const newUser: User = {
      id: this.users.length + 1,
      name: user.name,
      age: user.age,
      email: user.email,
    };
    this.users.push(newUser);
    return newUser;
  }
}
