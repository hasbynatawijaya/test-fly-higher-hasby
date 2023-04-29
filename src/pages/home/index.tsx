import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    console.log("im rendered");
  }, []);

  return <Navigate to="/auth" replace />;
};

export default Home;
