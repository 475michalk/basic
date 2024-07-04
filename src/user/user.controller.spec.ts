import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('UserController', () => {
  let app: INestApplication;
  let userService: UserService;

  const mockUserService = {
    getUserById: jest.fn((id: number) => {
      const users: UserDto[] = [
        { id: 1, nameUser: 'Tami', email: 'tami96910@gmail.com', phone: '0504196910' },
        { id: 2, nameUser: 'Gili', email: 'gili000@gmail.com', phone: '0528794556' },
      ];
      return users.find(user => user.id === id) || null;
    }),
    updateUser: jest.fn((id: number, user: UserDto) => {
      const users: UserDto[] = [
        { id: 1, nameUser: 'Tami', email: 'tami96910@gmail.com', phone: '0504196910' },
        { id: 2, nameUser: 'Gili', email: 'gili000@gmail.com', phone: '0528794556' },
      ];
      const index = users.findIndex(u => u.id === id);
      if (index >= 0) {
        users[index] = user;
        return users[index];
      }
      return null;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
    userService = module.get<UserService>(UserService);
  });

  it('should return a user by id', async () => {
    await request(app.getHttpServer())
      .get('/user/1')
      .expect(200)
      .expect({
        id: 1,
        nameUser: 'Tami',
        email: 'tami96910@gmail.com',
        phone: '0504196910',
      });
  });

  it('should return 404 when user is not found', async () => {
    await request(app.getHttpServer())
      .get('/user/999')
      .expect(404)
      .expect({
        message: 'User not found',
      });
  });

  it('should return 400 when invalid id is provided for getUserById', async () => {
    await request(app.getHttpServer())
      .get('/user/invalid')
      .expect(400)
      .expect({
        message: 'Invalid user ID',
      });
  });

  it('should update a user', async () => {
    const updatedUser: UserDto = { id: 2, nameUser: 'Updated Gili', email: 'updated_gili@gmail.com', phone: '0528794556' };
    await request(app.getHttpServer())
      .put('/user/2')
      .send(updatedUser)
      .expect(200)
      .expect({
        message: 'User updated',
        user: updatedUser,
      });
  });

  it('should return 404 when updating a user that does not exist', async () => {
    const updatedUser: UserDto = { id: 999, nameUser: 'Nonexistent User', email: 'nonexistent_user@gmail.com', phone: '0000000000' };
    await request(app.getHttpServer())
      .put('/user/999')
      .send(updatedUser)
      .expect(404)
      .expect({
        message: 'User not found',
      });
  });

  it('should return 400 when invalid id is provided for updateUser', async () => {
    const updatedUser: UserDto = { id: 2, nameUser: 'Invalid User', email: 'invalid_user@gmail.com', phone: '1234567890' };
    await request(app.getHttpServer())
      .put('/user/invalid')
      .send(updatedUser)
      .expect(400)
      .expect({
        message: 'Invalid user ID',
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
