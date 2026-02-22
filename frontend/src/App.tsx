import Lightning from "./components/Lightning";

function App() {
  return (
    
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      <Lightning hue={260} xOffset={0} speed={1} intensity={1} size={1} />
    </div>
  );
}

export default App;
