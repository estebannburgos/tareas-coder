import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import List from "./components/List";

import data from "./products.json";

function App() {
  const {mensClothing, jewelery, electronics, womensClothing} = data;
   const Alldata = mensClothing.concat(jewelery).concat(electronics).concat(womensClothing);
  return (
    <>
      <Navbar/>
      <div class="row" style={{ padding: '15px' }}>
        <Routes>
          <Route
          path="/"
          element={ <List list={Alldata} /> }
          />
          <Route path="/:id" element={ <ItemListContainer data={data} /> }/>
          <Route path="/mensClothing" element={<List list={mensClothing} />} />
          <Route path="/mensClothing/:id" element={<ItemListContainer data={data} />} />
          <Route path="/jewelery" element={<List list={jewelery} />} />
          <Route path="/jewelery/:id" element={<ItemListContainer data={data} />} />
          <Route path="/electronics" element={<List list={electronics} />} />
          <Route path="/electronics/:id" element={<ItemListContainer data={data} />} />
          <Route path="/womensClothing" element={<List list={womensClothing} />} />
          <Route path="/womensClothing/:id" element={<ItemListContainer data={data} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
