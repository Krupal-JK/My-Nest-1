import { Injectable, Query } from "@nestjs/common";
import { User } from "./data/user.dto";

@Injectable()
export class UserService {

    public users: User[] = [
        {
            id: "1",
            username: "User1",
            email: "User1@example.com",
            password: "1234",
            verified: true
        },
        {
            id: "2",
            username: "User2",
            email: "User2@example.com",
            password: "1234",
            verified: true
        },
        {
            id: "3",
            username: "User3",
            email: "User3@example.com",
            password: "1234",
            verified: true
        },
        {
            id: "4",
            username: "User4",
            email: "User4@example.com",
            password: "1234",
            verified: true
        },
    ]

    getUserByUsername(username: String) : User {
        return this.users.find((u) => u.username === username)
    }

    addUsers(user: User): any {
        let existUser = this.users.find(userData => userData.email === user.email)
        let existId = this.users.find(userData => userData.id === user.id)
        if (existUser || existId) {
            return {
                status: 400,
                message: "User already exists"
            }
        } else {
            this.users.push(user);
            return this.users;
        }
    }
    getUsers(): User[] {
        return this.users;
    }
    getOneUser(userId: string): object {
        let data = this.users.find(user => user.id.toString() === userId.toString())
        if (!data) {
            return {
                status: 404,
                message: "User not found"
            }
        } else {
            return data
        }
    }
    updateUsers(user: User): any {
        let Index = this.users.findIndex(userData => userData.id === user.id)
        let existUser = this.users.find(userData => userData.email === user.email)
        console.log(this.users[Index])
        if (this.users[Index]?.id != existUser?.id) {
            return {
                status: 400,
                message: "Email is already in use"
            }
        }
        this.users[Index] = user
        return this.users
    }
    deleteUsers(userId: string): any {
        console.log(userId, "delete")
        this.users = this.users.filter((user) => user.id.toString() != userId.toString())
        return this.users
    }
}