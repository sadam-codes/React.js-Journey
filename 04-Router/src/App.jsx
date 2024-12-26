import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Github = lazy(() => import("./components/Github"));
const User = lazy(() => import("./components/User"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/github" element={<Github />} />
            <Route path="/user" element={<User />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="user/:userid" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};
