import config from "../conf/config";
import { Client, Account, ID , Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client(); //connection b/w appwrite and react
    databases;  //property
    bucket;

    constructor(){  //runs automatically when u create a Service object
        this.client  //tells client that this is my url and project
             .setEndpoint(config.appwriteUrl)
             .setProject(config.projectId);
        this.databases = new Databases(this.client);  //instance of a appwrite database
        this.bucket = new Storage(this.client);       //inst of a appwrite storage
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument
                (config.databaseId, 
                config.collectionId,
                slug,
                {title,content,featuredImage,status,userId}
               )
        } catch (error) {
            throw error;
        }
    }
    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(config.databaseId,
                config.collectionId,
                slug,
                {title,content,featuredImage,status}
            )
        } catch (error) {
            throw error;
        }
    }
    async deletePost(slug){
        try {
                 await this.databases.deleteDocument(
                 config.databaseId,
                 config.collectionId,
                 slug

            )
            return true;
        } catch (error) {
            console.log("error");
            return false;
        }
    }
    async getPost(slug){
        try {
           return await this.databases.deleteDocument(
                 config.databaseId,
                 config.collectionId,
                 slug
           )
        } catch (error) {
            console.log("error in get post");
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
       try {
          return await this.databases.listDocuments(
            config.databaseId,
            config.collectionId,
            queries,
          )
       } catch (error) {
            console.log("error in getposts")
            return false;
       }
    }

}




const service = new Service();

export default service