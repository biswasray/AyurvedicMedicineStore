
import Home,{Layout,SignIn,SignUp,Product,About,Career,Contact,MyOrder,AddMedicine,ListMedicine,SignOut} from './components';

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="myorder" element={<MyOrder/>}/>
          <Route path="myorder/:userId" element={<MyOrder/>}/>
          <Route path="medicines" element={<ListMedicine/>}/>
          <Route path="addmedicine" element={<AddMedicine/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="career" element={<Career/>}/>
          <Route path='/product/:id' element={<Product/>} />
        </Route>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signout" element={<SignOut/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
