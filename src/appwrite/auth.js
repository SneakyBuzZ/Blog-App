import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf"


export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.loginAccount({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
        }
    }

    async loginAccount({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: loginAccount :: error", error);
        }
    }

    async getAccount() {
        try {
            const currentAccount = await this.account.get();
            return currentAccount;
        } catch (error) {
            console.log(error);
        }
    }

    async getCurrentUser() {
        try {

            return await this.getAccount();
        } catch (error) {
            console.log("Appwrite service :: gertCurrenUser :: error", error);
        }

        return null;
    }

    async logoutAccount() {
        try {
            await this.account.deleteSession('current');
        } catch (error) {
            console.log("Appwrite service :: logoutAccount :: error", error)
        }
    }
}

const authService = new AuthService();

export default authService
