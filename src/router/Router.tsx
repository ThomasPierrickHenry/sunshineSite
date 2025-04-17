import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './Protected';
import ROUTES from './routes';
import { Suspense, ReactElement, useState } from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import GlobalStyle, { dark, light, ThemeProvider } from 'theme'




const Router = () => {
    return (
        <BrowserRouter>
           <Header/>
            <Routes>
                {Object.values(ROUTES).map((route) => (
                    <Route key={route.id} path={route.path} element={
                        route.private ? (
                            <ProtectedRoutes><Suspense fallback={null}> {route.component}</Suspense></ProtectedRoutes>
                        ) :(
                            <Suspense fallback={null}> {route.component}</Suspense>
                        )

                }>

                    </Route>
                ))}

            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}


export default function AppRouter():ReactElement {
    const [theme] = useState<"light"|"dark">("light")
    const getTheme = () => theme === "light" ? light : dark
    
    return (
      <ThemeProvider theme={getTheme()}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
  
    )
  }


