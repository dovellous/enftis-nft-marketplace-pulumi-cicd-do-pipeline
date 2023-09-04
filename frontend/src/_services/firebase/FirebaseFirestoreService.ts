import { initializeApp } from "firebase/app";
import { getFirestore, where } from "firebase/firestore";
import { collection, doc, addDoc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { FirebaseConfig, IFirebaseConfig } from "./config/FirebaseConfig";



class FirebaseFirestoreServiceClass {
  // Initialize Firebase

  private app: any;
  private database: any;
  private config: IFirebaseConfig;

  constructor() {
    this.config = FirebaseConfig;
    this.init();
  }

  init(): void {
    this.app = initializeApp(this.config);
    this.database = getFirestore(this.app);
    this.connectDatabase();
    return this.app;
  }

  connectDatabase(): any {
    this.database = getFirestore(this.app);
    return this.database;
  }

  getDatabase(): any {
    return this.database;
  }

  disconnectApp(): void {
    this.app.delete();
  }

  disconnectDatabase(): void {
    this.database = null;
  }

  async addItem(path: string, item: any) {
    try {
      const docRef = await addDoc(collection(this.database, path), item);
      return docRef.id;
    } catch (e: any) {
      return false;
    }

  }

  async collectionSetDocument(col: string, document: string | undefined, item: any) {

    const colRef = collection(this.database, col);

    await setDoc(doc(colRef, document), item);

  }

  async collectionGetDocument(col: string, document: string, dataConverter: any) {

    let docRef: any;

    if (dataConverter) {

      docRef = doc(this.database, col, document).withConverter(dataConverter);


    } else {

      docRef = doc(this.database, col, document);

    }

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      return docSnap.data();

    } else {

      return null;

    }

  }

  async collectionGetAllDocuments(col: string, query: any, dataConverter: any) {

    let querySnapshot: any;

    let colRef: any;

    if (dataConverter) {

      colRef = collection(this.database, col).withConverter(dataConverter);

    } else {

      colRef = collection(this.database, col);

    }

    if (query) {

      const q = query(colRef, where(query[0], query[1], query[2]));

      querySnapshot = await getDocs(q);

    } else {

      querySnapshot = await getDocs(colRef);

    }

    if (querySnapshot.exists()) {

      const docs: any = {};

      querySnapshot.forEach((doc: any) => {

        docs[doc.id] = docs.data();

      });

      return docs;

    } else {

      return null;

    }

  }

  getItem(path: string, key: string): Promise<any> {
    return this.database.ref(`${path}/${key}`).once('value');
  }

  async getItems(path: string): Promise<any> {
    const querySnapshot = await getDocs(collection(this.database, path));
    const docs: any = {};
    querySnapshot.forEach((doc: any) => {
      docs[doc.id] = docs.data();
    });
    return docs;
  }

  updateItem(path: string, key: string, updates: any): Promise<any> {
    return this.database.ref(`${path}/${key}`).update(updates);
  }

  removeItem(path: string, key: string): Promise<any> {
    return this.database.ref(`${path}/${key}`).remove();
  }

  deletePath(path: string): Promise<any> {
    return this.database.ref(path).remove();
  }

}

const FirebaseFirestoreService: any = new FirebaseFirestoreServiceClass();

export { FirebaseFirestoreService };