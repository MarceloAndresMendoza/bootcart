import { Route, Routes } from "react-router-dom"
import { AppIndex } from "../views/AppIndex"
import { StoreIndex } from "../views/StoreIndex"
import { StoreSingleProduct } from "../views/StoreSingleProduct"
import { AppNotFound } from "../views/AppNotFound"
import { StoreCart } from "../views/StoreCart"
import { StoreCategories } from "../views/StoreCategories"
import { StoreCategory } from "../views/StoreCategory"
import { AccountSignUp } from "../views/AccountSignUp"
import { AccountMy } from "../views/AccountMy"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path = "/" element = { <AppIndex /> } />
            <Route path = "store" >
              <Route index element = { <StoreIndex /> } />
              <Route path = ":productID" element = { <StoreSingleProduct /> } />
            </Route>
            <Route path = "cart" element = { <StoreCart /> } />
            <Route path = "categories"  >
              <Route index element = { <StoreCategories /> } />
              <Route path = ":categoryID" element = { <StoreCategory /> } />
            </Route>
            <Route path = "signup" element = { <AccountSignUp /> } />
            <Route path = "account" element = { <AccountMy /> } />
            <Route path = '*' element = { <AppNotFound /> } />
        </Routes>
    </>
  )
}
