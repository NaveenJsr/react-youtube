import { Provider } from "react-redux";
import store from "./Utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Components
import Header from "./Components/Header"
import Body from "./Components/Body";
import MainContainer from "./Components/MainContainer";
import Watch from "./Components/Watch"
import SearchPage from "./Components/SearchPage";
import NotFound from "./Components/NotFound"

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'watch',
      element:<Watch/>
    },
    {
      path:'search',
      element:<SearchPage/>
    }
  ],
  errorElement:<NotFound/>
}])

function App() {
  return (
    <Provider store={store}>

    <div>
      <Header/>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}



export default App;
