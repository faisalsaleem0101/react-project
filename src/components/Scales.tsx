import Scale from "./Scale";



function Scales() {
    return (
        <>
            <div className='flex items-center justify-center mt-8'>
                <div className="lg:w-3/5 grid md:grid-cols-4 gap-4">
                    <p className="font-bold text-center">Score Scale: </p>
                    <Scale bgColor={"#FF3D43"} start={0} end={49} />
                    <Scale bgColor={"#FFE179"} start={50} end={89} />
                    <Scale bgColor={"#25C28A"} start={90} end={100} />
                </div>
            </div>

        </>
    );
}

export default Scales;
