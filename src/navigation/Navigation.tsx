import { Routes, Route } from "react-router-dom";
import Error404 from '../screens/Error404';
import Login from '../screens/auth/Login';
import Register from "../screens/auth/Register";
import Home from '../screens/home/Home';
import RequireAuth from '../screens/RequireAuth';
import Layaut from '../screens/Layaut';

export default function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Layaut />}>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route
                    path='home'
                    element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    }
                />
               
            </Route>

            <Route path='*' element={<Error404 />} />
        </Routes>
    );
};

