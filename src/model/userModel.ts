export interface IUser {
  id: number;
  name: string;
  email: string;
}

export class UserModel {
  private users: Map<number, IUser> = new Map();
  private counter = 0;

  createUser(name: string, email: string): IUser {
    this.counter++;
    const user: IUser = { id: this.counter, name, email };
    this.users.set(this.counter, user);
    return user;
  }

  getUser(id: number): IUser | null {
    return this.users.get(id) ?? null;
  }

  listUsers(): IUser[] {
    return Array.from(this.users.values());
  }
}
