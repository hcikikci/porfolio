import YouTube from "react-youtube";
import React from "react";

const Player = ({ setHasLoaded, videoId }) => {
    // Once the YouTube package (react-youtube) has loaded
    // tell the thumbnail it is no longer needed.
    // Play the video.
    const _onReady = () => {
        setHasLoaded(true);
    };

    return (
        <YouTube loading={"lazy"} className="w-full h-full" iframeClassName="w-full h-full"
                 videoId={videoId}
                 onReady={_onReady}
        />
    );
};

export default Player;