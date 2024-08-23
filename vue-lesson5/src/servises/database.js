import {getDatabase, ref, set, onValue, off} from "firebase/database";

export default class User {
    #db;

    constructor() {
        this.#db = getDatabase();
    }

    addUserRole(user, isAdmin = false) {
        set(ref(this.#db, "users/" + user.uid), {
            email: user.email,
            is_admin: isAdmin
        });
    }

    watcherUserRole(userId, userStore) {
        const userRef = ref(this.#db, "users/" + userId);

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                userStore.updateIsAdmin(data.is_admin);
            }
        });

        return userRef;
    }

    watcherOffAll(watcherRef) {
        return watcherRef ? off(watcherRef) : null;
    }
}