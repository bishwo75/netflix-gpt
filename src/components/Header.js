import netflix_logo_jpg from "../img/netflix_logo.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store =>store.user);

    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate("/")
           
          }).catch((error) => {
            navigate("/error");
          });
    }
    return ( 
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img src={netflix_logo_jpg} alt="logo" className="w-20" />
           { user && <div className="flex p-2">
                <img alt="usericon" className="w-12 h-12"
                src={user?.photoURL} 
                />
                <button onClick={handleSignout} className="font-bold text-white">Sign out</button>
            </div>}
        </div>
     );
}
 
export default Header;

// Mins 3:24:11 samma padhe 5/17/2024 espachi sign out gardai cha 