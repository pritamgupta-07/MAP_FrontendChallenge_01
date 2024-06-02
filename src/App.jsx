import Carousel from "./components/Carousel";

function App() {
  return (
    <main>
      <section className="bg-slate-800 min-h-screen max-h-full w-full flex justify-center pb-4">
        <div className="max-w-5xl w-full h-full flex flex-col gap-6 px-8 mx-10">
          <div>
            <h1 className="text-green-500 text-2xl font-bold flex justify-center pt-3">
              Project Map
            </h1>
          </div>
          <div className="main">
            <Carousel />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
