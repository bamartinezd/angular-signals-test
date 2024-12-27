import {User} from "./add-user-dialog.models";
import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";

type State = {
  isLoading: boolean
  users: User[]
};

const initialState: State = {
  isLoading: false,
  users: []
};

//@Injectable({providedIn: 'root'})
export const ManageUserStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods((store) => ({

    addUser(user: User) {
      patchState(store, {isLoading: true, users: []});
      let users = this.loadUsers();
      users.push(user);
      console.log(`User ${user.firstName} just added.`);
      patchState(store, {isLoading: false, users});
    },

    loadUsers(): User[] {
      return [{
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        passportNumber: '1234567890',
        dateOfBirth: new Date('1990-01-01')
      },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Smith',
          passportNumber: '0987654321',
          dateOfBirth: new Date('1995-05-15')
        }];
    }
  }))
)
