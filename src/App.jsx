import { Gallery } from './components/Gallery';

function App() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-orange-400 pb-6">
                <h1 className="text-5xl font-bold text-center mb-10 pt-9">
                    Dragon Ball
                </h1>
                <Gallery />
            </div>
        </>
    );
}

export default App;