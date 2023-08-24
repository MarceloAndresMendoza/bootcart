import { Route, Routes } from "react-router-dom"
import { AppIndex } from "../views/AppIndex"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element = { <AppIndex /> } />
        </Routes>
    </>
  )
}
