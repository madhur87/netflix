const VideoTitle = (props) => {
    const {title, overview} = props;
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-linear-to-r from-black">
            <h1 className="text-6xl font-bold ">{title}</h1>
            <p className="text-lg py-6 w-1/2 ">{overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-white/80">Play</button>
                <button className="mx-2 bg-gray-500/70 text-white p-4 px-12 text-xl rounded-lg">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;