import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        }, 
        {
            path: "/browse",
            element: <Browse />,
        }
    ])
    // for user sign in or sign out - onAuthStateChanged from firebase.
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({
                uid: uid, 
                email: email, 
                displayName: displayName,
                photoURL: photoURL
              }))
            //   navigate("/browser") // navigate to browser
              // ...
            } else {
              dispatch(removeUser())  // when user sign out
            //   navigate("/")   // navigate to main page
            }
          });
    }, [])

    return ( 
        <div>
            <RouterProvider router={appRouter}>
            <Login />
            <Browse />   
            </RouterProvider>
        </div>
     );
}
 
export default Body;