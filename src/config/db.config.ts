import {connect, connection} from 'mongoose';

export function dbConnect() {
    const connectionString: string = process.env.MONGO_URL || '';
    connect(connectionString);

    const database = connection;
    database.on('error', error => {
        console.log(error);
    });

    database.once('connected', () => {
        console.log('database connected');
    });
}