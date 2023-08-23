
import { ProductContextProvider } from './context/productsContext';
import { UserContextProvider } from './context/userContext';
import Routes from './Routes';



function App() {

  return (
    <>
    <ProductContextProvider>
      <UserContextProvider>
      <Routes/>
    </UserContextProvider>
    </ProductContextProvider>
    </>
  );
}


export default App;