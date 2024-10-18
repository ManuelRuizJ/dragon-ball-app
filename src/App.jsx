import { Gallery } from './components/Gallery';

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-orange-400">
        <h1 className="text-3xl font-bold text-center mb-4">
          Dragon Ball
        </h1>
        <Gallery />
      </div>
    </>
  );
}

export default App;
