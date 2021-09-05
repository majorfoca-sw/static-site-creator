import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

export class FirebaseManager {
    constructor(firebaseConfig) {
        this.app = initializeApp(firebaseConfig);
        this.database = getDatabase();
    }

    getData(databasePath = '/') {
        return new Promise(async (resolve, reject) => {
            const starCountRef = ref(this.database, databasePath);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                console.log(data);
                resolve(data);
            }, (error) => {
                reject(error);
            }, { onlyOnce: true });
        });
    }
}
