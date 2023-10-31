import firebase, { initializeApp } from 'firebase/app';
import 'firebase/database';
import { FirebaseConfig, IFirebaseConfig } from './config/FirebaseConfig';
import { Database, getDatabase } from 'firebase/database';

class FirebaseDatabaseServiceClass {
  private app: any;
  private database:any;

  constructor() {
    // Initialize Firebase config
    const firebaseConfig: IFirebaseConfig = FirebaseConfig;

    // Create the app instance
    this.app = initializeApp(firebaseConfig);

    // Create the database instance
    this.database = getDatabase(this.app);

    // Initialize the database
    //this.database.goOnline();
  }

  public async getData(path: string): Promise<any> {
    const snapshot = await this.database.ref(path).once('value');
    return snapshot.val();
  }

  public async getAllData(path: string): Promise<any[]> {
    const snapshot = await this.database.ref(path).once('value');
    const data = snapshot.val();
    return data ? Object.values(data) : [];
  }

  public async addItem(path: string, item: any): Promise<void> {
    await this.database.ref(path).push(item);
  }

  public async addItems(path: string, items: any[]): Promise<void> {
    const updates:any = {};
    items.forEach((item) => {
      const newKey = this.database.ref(path).push().key;
      updates[`${path}/${newKey}`] = item;
    });
    await this.database.ref().update(updates);
  }

  public async updateItem(path: string, key: string, updates: any): Promise<void> {
    await this.database.ref(`${path}/${key}`).update(updates);
  }

  public async deleteItem(path: string, key: string): Promise<void> {
    await this.database.ref(`${path}/${key}`).remove();
  }

  public disconnect(): void {
    //this.database.goOffline();
  }
}

const FirebaseDatabaseService:any = new FirebaseDatabaseServiceClass();

export { FirebaseDatabaseService }