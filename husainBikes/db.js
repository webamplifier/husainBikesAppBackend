import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("users.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS users (id integer primary key not null,user_id text not null,name text not null,email text not null,token text not null,role integer not null);',
                [],
                () => {
                    resolve()
                },
                (_, err) => {
                    reject(err)
                })
        })
    })

    return promise;
};

// this below function is used to store the db information

export const insertUser = (user_id, name, email, token, role) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('Insert into users (user_id,name,email,token,role) VALUES (?,?,?,?,?);',
                [user_id, name, email, token, role],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    });

    return promise;
}