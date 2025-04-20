import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course1 from "./pages/coureses/Course1.jsx";
import Course2 from "./pages/coureses/Course2.jsx";
import Course3 from "./pages/coureses/Course3.jsx";
import Testimonial from "./Component/Testimonial.jsx";
import Navgallary from "./Component/Navgallary.jsx";
import Teacher from "./Component/Teacher.jsx";
import Layout from "./layout/Layout.jsx";
import Dashboard from "./admin_page/components/Dashboard.jsx";
import Index from "./layout/Index.jsx";
import ContactPage from "./Component/Contact.jsx";
import BlogPosts from "./Component/Blogpage/Blog_home_page.jsx";
import AllBlogPosts from "./Component/Blogpage/All_Blog_page.jsx";
import AboutPage from "./component/Aboutpage.jsx";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* < Public Routes ></Public> */}
        <Route path="/" element={<Layout />}>
        <Route path="/courses/1" element={<Course1 />} />
        <Route path="/courses/2" element={<Course2 />} />
        <Route path="/courses/3" element={<Course3 />} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/navgallary" element={<Navgallary/>} /> 
        <Route path="teacher" element={<Teacher/>} />
       
        <Route index element={<Index />} />
         <Route path="/about" element={<AboutPage />} /> 
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/allblog" element={<AllBlogPosts />} />
        </Route>

        Admin Routes 
          
          <Route index element={<Dashboard />} />
         
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
