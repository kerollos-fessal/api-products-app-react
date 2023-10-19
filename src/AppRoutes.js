import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from './pages/home/home'
import Details from "./pages/productDetails/details";
import NotFound from "./pages/notFoundPage/notFound";
import Favourites from "./pages/favourites/favourites";

function AppRoutes() {
   return (
<BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Details />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="*" element={<NotFound />} />
   </Routes>
</BrowserRouter>
   );
}
export default AppRoutes
