import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import LoginUsers from '../pages/LoginUsers';
import LoginCompany from '../pages/LoginCompany';
import SignUp from '../pages/SignUp';
import SignUpUsers from '../pages/SignUpUsers';
import SignUpCompany from '../pages/SignUpCompany';
import Users from '../pages/Users';
import Company from '../pages/Company';
import Requests from '../pages/Requests';
import UsersSkills from '../pages/UsersSkills';

const RouterIndex = () => {
    return(
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/login/users' element={<LoginUsers></LoginUsers>}></Route>
          <Route path='/login/companies' element={<LoginCompany></LoginCompany>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/signup/users' element={<SignUpUsers></SignUpUsers>}></Route>
          <Route path='/signup/companies' element={<SignUpCompany></SignUpCompany>}></Route>
          <Route path='/users/:id' element={<Users></Users>}></Route>
          <Route path='/company/:id' element={<Company></Company>}></Route>
          <Route path='/requests/:id' element={<Requests></Requests>}></Route>
          <Route path='/usersskills/:id' element={<UsersSkills></UsersSkills>}></Route>  
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
    )
}

export default RouterIndex;