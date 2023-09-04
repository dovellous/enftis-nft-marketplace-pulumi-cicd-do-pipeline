
export interface IFirebaseUser {
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
    uid: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerData: any;
}

export class UserItemClass {

    private id: any;
    private uid: any;
    private firstName: any;
    private lastName: any;
    private displayName: any;
    private email: any;
    private phoneNumber: any;
    private photoURL: any;
    private emailVerified: any;
    private providerData: any;

    constructor(
        id: any,
        uid: any,
        firstName: any,
        lastName: any,
        displayName: any,
        email: any,
        phoneNumber: any,
        photoURL: any,
        emailVerified: any,
        providerData: any
    ) {
        this.id = id;
        this.uid = uid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.displayName = displayName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.photoURL = photoURL;
        this.emailVerified = emailVerified;
        this.providerData = providerData;
    }
    toString() {
        return this.firstName + ', ' + this.lastName;
    }
    toObject() {
        return {
            id: this.id,
            uid: this.uid,
            firstName: this.firstName,
            lastName: this.lastName,
            displayName: this.displayName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            photoURL: this.photoURL,
            emailVerified: this.emailVerified,
            providerData: this.providerData,
        }
    }
}

// Firestore data converter
export const UserItemConverter = {
    toFirestore: (user: {
        id: any,
        uid: any,
        firstName: any,
        lastName: any,
        displayName: any,
        email: any,
        phoneNumber: any,
        photoURL: any,
        emailVerified: any,
        providerData: any
    }) => {
        return {
            id: user.id,
            uid: user.uid,
            firstName: user.firstName,
            lastName: user.lastName,
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            providerData: user.providerData,
        };
    },
    fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
        const data = snapshot.data(options);
        return new UserItemClass(
            data.id,
            data.uid,
            data.firstName,
            data.lastName,
            data.displayName,
            data.email,
            data.phoneNumber,
            data.photoURL,
            data.emailVerified,
            data.providerData
        );
    }
};