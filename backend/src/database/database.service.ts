import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongoClient, Db, Collection, Document } from 'mongodb';

@Injectable()
export class DatabaseService {
  private client: MongoClient;
  private db: Db;

  constructor(private configService: ConfigService) {
    const dbName = this.configService.get<string>('DB_NAME');
    if (!dbName) {
      throw new Error(' Database name (DB_NAME) is missing in .env file');
    }

    this.client = new MongoClient(this.configService.get<string>('MONGO_URI') || 'mongodb://localhost:27017');
    this.db = this.client.db(dbName);
  }

  async connect() {
    await this.client.connect();
    console.log(` Connected to MongoDB: ${this.db.databaseName}`);
    return this.db;
  }

  getCollection<T extends Document>(collectionName: string): Collection<T> {
    return this.db.collection<T>(collectionName);
  }
}
