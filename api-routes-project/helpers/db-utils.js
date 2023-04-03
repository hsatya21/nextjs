import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const url =
    'mongodb+srv://hsatya:oLZMwWC7YzDjeQhk@cluster0.fjfu2zg.mongodb.net/events?retryWrites=true&w=majority';
  const client = await MongoClient.connect(url);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort, filter) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return documents;
}