import Header from "./components/Header";
import Scale from "./components/Scale";
import Scales from "./components/Scales";
import ScoreCard from "./components/ScoreCard";

function App() {
  return (

    <div className="mx-2">

      <Header />

      {/* Tabs */}
      <div className='flex items-center justify-center mt-8'>
        <button className="bg-gray-100 text-black text-sm font-bold px-2 py-3 md:px-8 md:py-4 border border-black rounded-full flex items-center mr-1">
          <div className="w-5 h-5 rounded-full border-2 border-black mr-2" style={{ 'backgroundColor': `#25C28A` }}></div>
          Lorem Ipsum 1
        </button>
        <button className="bg-white text-black text-sm font-bold px-2 py-3 md:px-8 md:py-4 border border-black rounded-full flex items-center ml-1" disabled>
          <div className="w-5 h-5 rounded-full border-2 border-black mr-2" style={{ 'backgroundColor': `white` }}></div>
          Lorem Ipsum 2
        </button>
      </div>

      {/* Scaling */}
      <Scales />

      {/* Score Cards */}
      <div className='flex justify-center my-4'>
        <div className="lg:w-3/5 grid md:grid-cols-2 gap-4">

          <ScoreCard
            title="Lorem"
            description="Lorem ipsum dolor sit  dui  ipsum sit amet ipsum dolor sit  dui  ipsum sit amet lorem"
            score={100}
            color={"#25C28A"}
          />
          <ScoreCard
            title="Lorem"
            description="Lorem ipsum dolor sit  dui  ipsum sit amet ipsum dolor sit  dui  ipsum sit amet lorem"
            score={80}
            color={"#FFE179"}
          />
          <ScoreCard
            title="Lorem"
            description="Lorem ipsum dolor sit  dui  ipsum sit amet ipsum dolor sit  dui  ipsum sit amet lorem"
            score={27}
            color={"#FF3D43"}
          />
          <ScoreCard
            title="Lorem"
            description="Lorem ipsum dolor sit  dui  ipsum sit amet ipsum dolor sit  dui  ipsum sit amet lorem"
            score={92}
            color={"#25C28A"}
          />
          <ScoreCard
            title="Lorem"
            description="Lorem ipsum dolor sit  dui  ipsum sit amet ipsum dolor sit  dui  ipsum sit amet lorem"
            score={96}
            color={"#25C28A"}
          />
          <ScoreCard
            title="Lorem"
            description="Lorem ipsum dolor sit  dui  ipsum sit amet ipsum dolor sit  dui  ipsum sit amet lorem"
            score={0}
            color={"#FF3D43"}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
