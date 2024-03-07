import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

type UserData = {
  firstName: string
  lastName: string
  age: number
}

@Injectable()
export class CustomersService {
  private customers = [];

  addCustomer(userData: UserData) {
    const newCustomer = { id: randomUUID(), firstName: userData.firstName, lastName: userData.lastName, age: userData.age };
    this.customers.push(newCustomer);
  }

  getAll() {
    return this.customers
  }
}
