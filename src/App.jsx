import './App.css'
import Counter from "./Components/Counter/Counter.jsx";
import GetData from "./Components/GetData/GetData.jsx";
import Header from "./Components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Images from "./Components/Images/Images.jsx";
import OnePost from "./Components/OnePost/OnePost.jsx";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/getdata' element={<GetData/>}/>
                <Route path='/image' element={<Images/>}/>
                <Route path='/:number' element={<OnePost/>}/>
            </Routes>
        </>
    )
}

export default App
