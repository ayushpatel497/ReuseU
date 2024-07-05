 import "./App.css";
 import { useEffect, useState } from "react";
 import Header from "./component/layout/Header/Header.js";
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import WebFont from "webfontloader";
 import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
 import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import H from './component/lost&found/Home'
import Admin from './component/lost&found/Admin'
// import { loadUser } from "./actions/userAction";
// import UserOptions from "./component/layout/Header/UserOptions";
// import { useSelector } from "react-redux";
// import Profile from "./component/User/Profile";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
// import UpdateProfile from "./component/User/UpdateProfile";
// import UpdatePassword from "./component/User/UpdatePassword";
// import ForgotPassword from "./component/User/ForgotPassword";
// import ResetPassword from "./component/User/ResetPassword";
// import Cart from "./component/Cart/Cart";
// import Shipping from "./component/Cart/Shipping";
// import ConfirmOrder from "./component/Cart/ConfirmOrder";
// import axios from "axios";
// import Payment from "./component/Cart/Payment";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import OrderSuccess from "./component/Cart/OrderSuccess";
// import MyOrders from "./component/Order/MyOrders";
// import OrderDetails from "./component/Order/OrderDetails";
// import Dashboard from "./component/Admin/Dashboard.js";
// import ProductList from "./component/Admin/ProductList.js";
// import NewProduct from "./component/Admin/NewProduct";
// import UpdateProduct from "./component/Admin/UpdateProduct";
// import OrderList from "./component/Admin/OrderList";
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UsersList from "./component/Admin/UsersList";
// import UpdateUser from "./component/Admin/UpdateUser";
// import ProductReviews from "./component/Admin/ProductReviews";
// import Contact from "./component/layout/Contact/Contact";
// import About from "./component/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound";

 function App(){
//   const { isAuthenticated, user } = useSelector((state) => state.user);

//   const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

//     store.dispatch(loadUser());

//     getStripeApiKey();
  }, []);

  useEffect(()=>{
    document.getElementsByClassName('menuBurger')[0].style.height = '50px'
    document.getElementsByClassName('linksReactNavbar')[0].addEventListener('click',()=>{
      document.getElementsByClassName('nav1')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav2')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav3')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav4')[0].style.transform = "translateY(-100vmax)"
      if(document.getElementsByClassName('menuBurgerItem')[0].classList.contains('menuBurgerItem1')){
        
        document.getElementsByClassName('menuBurgerItem')[0].classList.remove('menuBurgerItem1')
        document.getElementsByClassName('menuBurgerItem')[1].classList.remove('menuBurgerItem2')
        document.getElementsByClassName('menuBurgerItem')[2].classList.remove('menuBurgerItem3')
      }
    })
    document.getElementsByClassName('linksReactNavbar')[1].addEventListener('click',()=>{
      document.getElementsByClassName('nav1')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav2')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav3')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav4')[0].style.transform = "translateY(-100vmax)"
      
      document.getElementsByClassName('menuBurgerItem')[0].classList.remove('menuBurgerItem1')
      document.getElementsByClassName('menuBurgerItem')[1].classList.remove('menuBurgerItem2')
      document.getElementsByClassName('menuBurgerItem')[2].classList.remove('menuBurgerItem3')
    })
    document.getElementsByClassName('linksReactNavbar')[2].addEventListener('click',()=>{
      document.getElementsByClassName('nav1')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav2')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav3')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav4')[0].style.transform = "translateY(-100vmax)"
      
      document.getElementsByClassName('menuBurgerItem')[0].classList.remove('menuBurgerItem1')
      document.getElementsByClassName('menuBurgerItem')[1].classList.remove('menuBurgerItem2')
      document.getElementsByClassName('menuBurgerItem')[2].classList.remove('menuBurgerItem3')
    })
    document.getElementsByClassName('linksReactNavbar')[3].addEventListener('click',()=>{
      document.getElementsByClassName('nav1')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav2')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav3')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav4')[0].style.transform = "translateY(-100vmax)"
      
      document.getElementsByClassName('menuBurgerItem')[0].classList.remove('menuBurgerItem1')
      document.getElementsByClassName('menuBurgerItem')[1].classList.remove('menuBurgerItem2')
      document.getElementsByClassName('menuBurgerItem')[2].classList.remove('menuBurgerItem3')
    })
    document.getElementsByClassName('linksReactNavbar')[3].addEventListener('click',()=>{
      document.getElementsByClassName('nav1')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav2')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav3')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav4')[0].style.transform = "translateY(-100vmax)"
      
      document.getElementsByClassName('menuBurgerItem')[0].classList.remove('menuBurgerItem1')
      document.getElementsByClassName('menuBurgerItem')[1].classList.remove('menuBurgerItem2')
      document.getElementsByClassName('menuBurgerItem')[2].classList.remove('menuBurgerItem3')
    })

    document.getElementsByClassName('nav4')[0].childNodes[0].addEventListener('click',()=>{
      document.getElementsByClassName('nav1')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav2')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav3')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav4')[0].style.transform = "translateY(-100vmax)"
      
      document.getElementsByClassName('menuBurgerItem')[0].classList.remove('menuBurgerItem1')
      document.getElementsByClassName('menuBurgerItem')[1].classList.remove('menuBurgerItem2')
      document.getElementsByClassName('menuBurgerItem')[2].classList.remove('menuBurgerItem3')
    })
    document.getElementsByClassName('nav4')[0].childNodes[2].addEventListener('click',()=>{
      document.getElementsByClassName('nav1')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav2')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav3')[0].style.transform = "translateY(-100vmax)"
      document.getElementsByClassName('nav4')[0].style.transform = "translateY(-100vmax)"
      
      document.getElementsByClassName('menuBurgerItem')[0].classList.remove('menuBurgerItem1')
      document.getElementsByClassName('menuBurgerItem')[1].classList.remove('menuBurgerItem2')
      document.getElementsByClassName('menuBurgerItem')[2].classList.remove('menuBurgerItem3')
    })

  },[])

//  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
     <Header />
       <Route exact  path="/" component={Home}/>
   <Route exact path="/product/:id" component={ProductDetails}/>
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/login" component={LoginSignUp} />
        <Route exact path="/Lost&found" component={H} />
        <Route exact path="/L" component={Admin} />

     <Footer/>

{/* //       {isAuthenticated && <UserOptions user={user} />}

//       {stripeApiKey && (
//         <Elements stripe={loadStripe(stripeApiKey)}>
//           <ProtectedRoute exact path="/process/payment" component={Payment} />
//         </Elements>
//       )}

//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/products" component={Products} />
//         <Route path="/products/:keyword" component={Products} />

//         <Route exact path="/search" component={Search} />

//         <Route exact path="/contact" component={Contact} />

//         <Route exact path="/about" component={About} />

//         <ProtectedRoute exact path="/account" component={Profile} />

//         <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

//         <ProtectedRoute
//           exact
//           path="/password/update"
//           component={UpdatePassword}
//         />

//         <Route exact path="/password/forgot" component={ForgotPassword} />

//         <Route exact path="/password/reset/:token" component={ResetPassword} />

//         <Route exact path="/login" component={LoginSignUp} />

//         <Route exact path="/cart" component={Cart} />

//         <ProtectedRoute exact path="/shipping" component={Shipping} />

//         <ProtectedRoute exact path="/success" component={OrderSuccess} />

//         <ProtectedRoute exact path="/orders" component={MyOrders} />

//         <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

//         <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

//         <ProtectedRoute
//           isAdmin={true}
//           exact
//           path="/admin/dashboard"
//           component={Dashboard}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/products"
//           isAdmin={true}
//           component={ProductList}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/product"
//           isAdmin={true}
//           component={NewProduct}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/product/:id"
//           isAdmin={true}
//           component={UpdateProduct}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/orders"
//           isAdmin={true}
//           component={OrderList}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/order/:id"
//           isAdmin={true}
//           component={ProcessOrder}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/users"
//           isAdmin={true}
//           component={UsersList}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/user/:id"
//           isAdmin={true}
//           component={UpdateUser}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/reviews"
//           isAdmin={true}
//           component={ProductReviews}
//         />

//         <Route
//           component={
//             window.location.pathname === "/process/payment" ? null : NotFound
//           }
//         />
//       </Switch>

//       <Footer /> */}
     </Router>
   );
}

 export default App;
