import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('E_commerce.db');

export const initDB = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `
        Drop table Product;

        CREATE TABLE IF NOT EXISTS Products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_name TEXT NOT NULL,product_description TEXT NOT NULL,
            Price FLOAT NOT NULL,Colors TEXT NOT NULL,Rating FLOAT NOT NULL,Image TEXT NOT NULL,Category TEXT NOT NULL);

        
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
             username TEXT NOT NULL,password TEXT NOT NULL,
             email TEXT NOT NULL UNIQUE);


        CREATE TABLE IF NOT EXISTS Orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_name TEXT NOT NULL,
            Amount INTEGER NOT NULL,
            Price FLOAT NOT NULL,
            TOTAL_PRICE FLOAT AS (Price * Amount) NOT NULL,
            Color TEXT NOT NULL,
            user_id INTEGER,
            product_id INTEGER,
            
            FOREIGN KEY (user_id) REFERENCES Users(id),
            FOREIGN KEY (product_id) REFERENCES Products(id)
            );
        `,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};



export const getProducts = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Products',
        [],
        (_, result) => {
          resolve(result.rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const addProduct = () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `INSERT INTO Products (product_name, product_description, Price, Rating, Colors, Category)
            VALUES (?, ?, ?, ?, ?, ?);`,
            ['Wireless Headphones', 'Premium wireless headphones with noise cancellation', 149.99, 4.5, 'Black', 'Electronics'],
            (_, result) => {
              resolve(result.rowsAffected);
            },
            (_, error) => {
              reject(error);
            }
          );
        },
        (error) => {
          reject(error);
        }
      );
    });
  };
  