import Scale from "./components/Scale";
import ScoreCard from "./components/ScoreCard";

function App() {
  return (

    <div className="">
      <h1 className='title text-center mt-5 text-2xl sm:text-5xl font-bold color-[#1D1D1D] font-luckiest-guy'>
        Lorem ipsum
      </h1>
      <div className="flex items-center justify-center mt-3">
        <p className='lg:w-1/3 text-center text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='flex items-center justify-center mt-8'>
        <button className="bg-gray-100 text-black text-sm px-8 py-4 border border-black rounded-full flex items-center mr-1">
          <div className={`w-5 h-5 rounded-full border-2 border-black mr-2`} style={{ 'backgroundColor': `#25C28A` }}></div>
          Lorem Ipsum 1
        </button>
        <button className="bg-white text-black text-sm px-8 py-4 border border-black rounded-full flex items-center ml-1" disabled>
          <div className={`w-5 h-5 rounded-full border-2 border-black mr-2`} style={{ 'backgroundColor': `white` }}></div>
          Lorem Ipsum 2
        </button>
      </div>
      <div className='flex items-center justify-center mt-8'>
        <div className='flex items-center justify-evenly lg:w-1/2'>
          <p className="font-bold">Score Scale: </p>
          <Scale bgColor={"#FF3D43"} start={0} end={49} />
          <Scale bgColor={"#FFE179"} start={50} end={89} />
          <Scale bgColor={"#25C28A"} start={90} end={100} />
        </div>
      </div>

      <div className='flex justify-center my-4 mx-2'>
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
