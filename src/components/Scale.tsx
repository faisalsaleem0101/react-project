interface ScaleInterface {
    bgColor : string;
    start : number,
    end : number
}

function Scale(props:ScaleInterface) {
  return (
    <div className='flex items-center justify-center'>
        <div className={`w-5 h-5 rounded-full border-2 border-black mr-1`} style={{'backgroundColor' : `${props.bgColor}`}}></div>
        <p className='ml-1 font-bold'>{props.start} - {props.end}</p>
    </div>
  );
}

export default Scale;
