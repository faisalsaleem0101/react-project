interface ScoreCardInterface {
    title: string;
    description: string,
    score: number,
    color: string
}

function ScoreCard(props: ScoreCardInterface) {
    return (
        <div className="bg-gray-100 rounded-lg p-4 border-2">
            <div className="bg-white rounded-lg p-1 border-2 flex items-center justify-between px-4 py-2">
                <h1 className="font-bold">{props.title}</h1>
                <p className="font-bold">|</p>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center p-6`} style={{ borderColor: `${props.color}` }}>
                    <p className="font-bold" style={{ color: `${props.color}` }}>{props.score}</p>
                </div>
            </div>
            <p>{props.description}</p>
        </div>
    );
}

export default ScoreCard;
