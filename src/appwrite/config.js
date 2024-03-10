import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);

        this.bucket = new Storage(this.client);
    }

    //POST SERVICES
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(    //
                conf.appwriteDatabaseId,                   // -> this are required to create a post  
                conf.appwriteCollectionId,                 //
                slug,
                {
                    title,                                //
                    content,                               // 
                    status,
                    featuredImage,
                    userId                                 //
                }
            )
        } catch (error) {
            console.log("Appwrite :: DatabaseService :: createPost", error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(   //
                conf.appwriteDatabaseId,                  // -> these are required to update the post 
                conf.appwriteCollectionId,                //
                slug,
                {
                    title,             //
                    content,            //-> these are what we are updating in the post 
                    featuredImage,      //  
                    status,
                    userId              //
                }
            )
        } catch (error) {
            console.log("Appwrite :: DatabaseService :: updatePost", error)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite :: DatabaseService :: deletePost ", error)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite :: DatabaseService :: getPost ", error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite :: DatabaseService :: getPosts ", error)
        }
    }

    //FILE SERVICES 
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite :: DatabaseService :: createFile ", error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite :: DatabaseService :: deleteFile ", error)
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        ).href
    }
}

const databaseService = new DatabaseService();

export default databaseService;