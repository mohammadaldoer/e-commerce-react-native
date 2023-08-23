import { createContext, useEffect,useState } from "react";
import { initDB,getProducts,addProducts,deleteProducts,createUserTable,createOrdersTable } from '../Database';


export const productContext = createContext();



export const ProductContextProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
 
    const loadProducts = () => {
        getProducts()
          .then((result) => {
            setAllProducts(result);
          }).then(()=>{
            if (allProducts.length===0){
              deleteProducts().then(()=>{
                initDB()
              })
              .then(()=>{
                addProducts()

              })
                .then(()=>{
                    getProducts()
                    .then((result) => {
                      setAllProducts(result);
                      ;})
                })
            }

          })
          .catch((error) => {
            console.log('Error loading todos:', error);
          });
      };
    
    
      useEffect(()=>{
        initDB()
        .then(()=>{
          createUserTable();
          console.log("Products");
          console.log("Users");

        }).then(()=>{
          createOrdersTable()
          console.log("Orders");

        })
 .then(()=>{
            loadProducts();
            })
        .catch((err)=>{
          console.log(err)
        })
    
      },[]);
  
    return (
       <productContext.Provider value={{ allProducts, setAllProducts }}>
          {children}
       </productContext.Provider>
    );
 };