import netflix_logo_jpg from "../img/netflix_logo.jpg";
const Header = () => {
    return ( 
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
            <img src={netflix_logo_jpg} alt="logo" className="w-20" />
        </div>
     );
}
 
export default Header;