import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Post()
  addCustomer(@Body() body: any) {
    const { firstName, lastName, age } = body;
    const userData = { firstName, lastName, age};
    this.customersService.addCustomer(userData)
    return {message: "Created!"};
  }

  @Get()
  getAllCustomers() {
    return this.customersService.getAll()
  }
}
