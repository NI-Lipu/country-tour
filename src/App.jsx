import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

const countriesPromise = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};

function App() {
  const countries = countriesPromise();
  return (
    <>
      <Suspense fallback={<p>Loding....</p>}>
        <Countries countries={countries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
