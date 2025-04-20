import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WishlistPage from "./pages/WishlistPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import FAQPage from "./pages/FAQPage";
import ShippingReturnsPage from "./pages/ShippingReturnsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import PaymentMethodsPage from "./pages/PaymentMethodsPage";
import CustomerServicePage from "./pages/CustomerServicePage";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import UserProfilePage from "./pages/profile/UserProfilePage";
import ProductDetail from "./components/products/ProductDetail";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import OrderSuccess from "./components/checkout/OrderSuccess";
import { WishlistProvider } from "./context/WishlistContext";
import { products } from "./data/products";

function App() {
   return (
      <WishlistProvider>
         <Header />
         <main className='min-h-screen'>
            <Routes>
               <Route path='/' element={<HomePage products={products} />} />
               <Route path='/shop' element={<ShopPage products={products} />} />
               <Route path='/about' element={<AboutPage />} />
               <Route path='/contact' element={<ContactPage />} />
               <Route path='/wishlist' element={<WishlistPage />} />
               <Route path='/blog' element={<BlogPage />} />
               <Route path='/blog/:id' element={<BlogPostPage />} />
               <Route path='/track-order' element={<TrackOrderPage />} />
               <Route path='/faq' element={<FAQPage />} />
               <Route path='/shipping-returns' element={<ShippingReturnsPage />} />
               <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
               <Route path='/terms-conditions' element={<TermsConditionsPage />} />
               <Route path='/payment-methods' element={<PaymentMethodsPage />} />
               <Route path='/customer-service' element={<CustomerServicePage />} />
               <Route path='/signin' element={<SignInPage />} />
               <Route path='/register' element={<RegisterPage />} />
               <Route path='/forgot-password' element={<ForgotPasswordPage />} />
               <Route path='/otp-verification' element={<OTPVerificationPage />} />
               <Route path='/profile' element={<UserProfilePage />} />
               <Route path='/profile/:tab' element={<UserProfilePage />} />
               <Route path='/product/:id' element={<ProductDetail products={products} />} />
               <Route path='/cart' element={<Cart />} />
               <Route path='/checkout' element={<Checkout />} />
               <Route path='/order-success' element={<OrderSuccess />} />
            </Routes>
         </main>
         <Footer />
      </WishlistProvider>
   );
}

export default App;
