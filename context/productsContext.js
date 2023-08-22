import { createContext, useEffect,useState } from "react";
import { initDB,getProducts,addProducts } from '../Database';


export const productContext = createContext();



export const ProductContextProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
 
    const loadProducts = () => {
        getProducts()
          .then((result) => {
            setAllProducts(result);
            console.log(result);
          }).then(()=>{
            if (allProducts.length===0){
                addProducts()
                .then(()=>{
                    getProducts()
                    .then((result) => {
                      setAllProducts(result);
                      console.log(result);})
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
            loadProducts();
            console.log("success")
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