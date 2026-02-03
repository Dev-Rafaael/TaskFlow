import  express  from 'express';
import { UserController } from '../controller/user.controller';
import request from "supertest";
import { describe, it, expect, vi } from 'vitest'

    describe('UserController', () => {
        const app = express()
        app.use(express.json())

        const FakeUserService = {
        getMe: vi.fn(),
        update: vi.fn(),
        changePassword: vi.fn(),
        }


        const controller = new UserController(FakeUserService as any)

        app.post('/list/',(req,res)=> controller.list(req,res))
        app.patch('/update/',(req,res)=> controller.update(req,res))
        app.patch('/update/password/',(req,res)=> controller.updatePassword(req,res))
        it('should  show 200 in list', async() => {
           FakeUserService.getMe.mockResolvedValue({
            userId: '1',
            name: 'Rafael',
            email: 'rafael123@gmail.com',
            })

            const response = await request(app)
            .post('/list/')
            .send({  userId: '1',
                name:'Rafael',
                email:'rafael123@gmail.com',})
            expect(response.body.name).toBe('Rafael')
            expect(response.body).toHaveProperty('userId')
            expect(response.status).toBe(200)
        });

           it('should  show 400 in list', async() => {
              FakeUserService.getMe.mockRejectedValue(
                new Error('User não encontrado')
              )

              const response = await  request(app)
              .post('/list/')
              .send({})
              expect(response.status).toBe(400)
              expect(response.body).toBeDefined()

        });

          it('should  show 200 in update',async () => {
            FakeUserService.update.mockResolvedValue({
                userId: '1',
                name:'Rafael',
                email:'rafael1327@gmail.com',
            })

            const response = await request(app)
            .patch('/update/')
            .send({
                userId: '1',
                email:'rafael13@gmail.com',
            })

            expect(response.status).toBe(200)
            expect(response.body).toBeDefined()
            expect(response.body.email).toBe('rafael1327@gmail.com')
        });

           it('should  show 400 in update',async () => {
                FakeUserService.update.mockRejectedValue(
                    new Error('User não atualizado')
                )

                const response = await request(app)
                .patch('/update/')
                .send({
                     userId: '2',
                email:'rafael123@gmail.com',
                })

                expect(response.status).toBe(400)
                expect(response.body).toBeDefined()

        });

          it('should  show 200 in update Password',async () => {
            FakeUserService.changePassword.mockResolvedValue({
                userId: '1',
                newPassword:'12345678',
            })

            const response = await  request(app)
            .patch('/update/password/')
            .send({ userId: '1',
                oldPassword:'123425',
                newPassword:'12345678',})


                expect(response.body).toBeDefined()
                expect(response.status).toBe(200)
                expect(response.body.newPassword).toBe('12345678')
        });

           it('should  show 400 in update Password',async () => {
            FakeUserService.changePassword.mockRejectedValue(
                new Error('Password não atualizado')

            )

            const response = await  request(app)
            .patch('/update/password/')
            .send({ userId: '2',
                oldPassword:'123425',
                newPassword:'12345678',
            })

            expect(response.body).toBeDefined()
            expect(response.status).toBe(400)

        });
    });