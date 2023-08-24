import { Route, Routes } from "react-router-dom"
import { AppIndex } from "../views/AppIndex"
import { StoreMain } from "../views/StoreMain"
import { StoreProduct } from "../views/StoreProduct"
import { AppNotFound } from "../views/AppNotFound"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path = "/" element = { <AppIndex /> } />
            <Route path = "store" >
              <Route index element = { <StoreMain /> } />
              <Route path = ":productID" element = { <StoreProduct /> } />
            </Route>
            <Route path = '*' element = { <AppNotFound /> } />
        </Routes>
    </>
  )
}
