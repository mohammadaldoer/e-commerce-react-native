import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('E_commerce.db');



export const initDB = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `
          CREATE TABLE IF NOT EXISTS Products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_name TEXT NOT NULL,product_description TEXT NOT NULL,
            Price FLOAT NOT NULL,Colors TEXT NOT NULL,Rating FLOAT NOT NULL,Image TEXT NOT NULL,Category TEXT NOT NULL);

          `,
          [],
          () => {
            resolve();
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





export const createUserTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `
          CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
             username TEXT NOT NULL,password TEXT NOT NULL,phone INTEGER NOT NULL,
             email TEXT NOT NULL UNIQUE);
          `,
          [],
          () => {
            resolve("users");
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


export const createOrdersTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `
          CREATE TABLE IF NOT EXISTS Orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_name TEXT NOT NULL,
            Amount INTEGER NOT NULL,
            Price FLOAT NOT NULL,
            Color TEXT NOT NULL,
            user_id INTEGER,
            product_id INTEGER,
            
            FOREIGN KEY (user_id) REFERENCES Users(id),
            FOREIGN KEY (product_id) REFERENCES Products(id)
            );
          `,
          [],
          () => {
            resolve("orders");
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

export const deleteProducts = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'drop table IF EXISTS Products',
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

export const addProducts = () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `
            INSERT INTO Products (product_name, product_description, Price, Colors, Rating, Image, Category)
            VALUES
                ('Elegant Armchair', 'A comfortable and stylish armchair for your home. Its ergonomic design provides excellent support. Available in blue and green colors.', 199.99, 'green,blue', 4.5, 'aesthetic-chair.png', 'Chair'),
                ('Modern Lounge Chair', 'Add elegance to your living space with this modern lounge chair. Its sleek design and quality materials ensure lasting comfort. Available in green and white colors.', 299.99, 'green,white', 3.8, 'chair.jpg', 'Chair'),
                ('Classic Wooden Chair', 'Enhance your room with this versatile wooden chair. Its classic design and affordability make it a popular choice. Available in natural wood, white, and yellow colors.', 149.99, 'blue,yellow', 3.2, 'istockphoto.jpg', 'Sofa'),
                ('Solid Wood Dining Table', 'Upgrade your dining area with this sturdy dining table. Its timeless design and solid wood construction ensure durability. Available in brown color.', 249.99, 'brown', 4.1, 'comdina.jpg', 'Drawers'),
                ('Compact Sofa Chair', 'Create a cozy corner with this compact sofa chair. Its plush cushioning and neutral colors make it a perfect addition to any room.', 99.99, 'gray,white', 2.7, 'sofa.jpg', 'Sofa'),
                ('Versatile Workspace Table', 'Maximize your workspace with this practical table. Its simple design and lightweight structure make it ideal for various uses.', 49.99, 'brown,black', 4.2, 'table.png', 'Dinner'),
                ('Chic Lounge Armchair', 'Relax in style with this chic lounge armchair. Its modern design and soft upholstery provide a comfortable seating experience.', 149.99, 'blue,pink', 3.9, 'sofa2.jpg', 'Chair'),
                ('Adjustable Ergonomic Chair', 'Experience comfort and support with this ergonomic chair. Its adjustable features and sleek design make it suitable for long work hours.', 189.99, 'black,gray,green', 4.2, 'krsi.jpg', 'Chair'),
                ('Functional Office Desk', 'Create an organized workspace with this functional office desk. Its spacious surface and multiple storage options help you stay productive.', 79.99, 'white,brown,black', 4.7, 'images.jpg', 'Drawers'),
                ('Vibrant Accent Chair', 'Add a pop of color to your space with this vibrant accent chair. Its contemporary design and sturdy construction offer both style and comfort.', 79.99, 'blue,yellow', 3.5, 'stock.jpg', 'Chair');
            `,
            [],
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
  


  export const getUsers = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM Users',
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

  export const deleteUsers = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `DELETE FROM Users;
          `,
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


  export const register = (username,password,email,phone) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT into Users (username,password,email,phone) values (?,?,?,?);',
          [username,password,email,phone],
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

  export const login = (email,password) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT username,email,id,phone FROM Users where email = (?) AND password = (?)',
          [email,password],
          (_, result) => {
            if (result.rows._array.length === 0) {
              resolve("email or password is wrong");
            }else{
              resolve(result.rows._array[0]);
            }
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  };

  export const addOrder = (product_name,Amount,Price,Color,user_id,product_id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `
          insert into Orders (product_name,Amount,Price,Color,user_id,product_id) values (?,?,?,?,?,?);
          `,
          [product_name,Amount,Price,Color,user_id,product_id],
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


  export const getOrders = (user_id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT id,product_name,Amount,Price,Color,product_id FROM Orders where user_id = (?)',
          [user_id],
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

  export const deleteOrder = (order_id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'delete from Orders where id = (?);',
          [order_id],
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