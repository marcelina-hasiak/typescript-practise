export type User = {
  name: string;
  id: number;
};

export class UserModule {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(userId: number): void {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        this.users.splice(i, 1);
        break;
      }
    }
  }

  getUser(userId: number): User | null {
    for (let user of this.users) {
      if (user.id == userId) {
        return user;
      }
    }
    return null;
  }

  filterUsers(filterFn: (user: User) => { isValid: boolean }): User[] {
    return this.users.filter((user) => filterFn(user).isValid);
  }
}

const userModule = new UserModule();
export const { addUser, removeUser, getUser, filterUsers } = userModule;
