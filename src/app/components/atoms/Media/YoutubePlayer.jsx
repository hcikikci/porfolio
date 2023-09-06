"use client";
import {lazy, useState, useTransition} from 'react';
import Image from "next/image";
const Player = lazy(() => import("./Player.jsx"));

const YouTubePlayer = ({ videoId }) => {

    const [, startTransition] = useTransition();

    const [showVideo, setShowVideo] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    return (
        <>
            {(!showVideo || !hasLoaded) && (
                <button
                    className="relative inset-0 bg-transparent border-0 cursor-pointer block p-0"
                    onClick={() => {
                        startTransition(() => {
                            setShowVideo(true);
                        });
                    }}
                >
                    <div className="relative overflow-hidden w-full pb-[56.25%]">
                        <div className="absolute inset-0">
                            <Image
                                alt="Bilgisayar'ın Temel Çalışma Mantığı ve İşletim Sistemleri"
                                src="/maxresdefault.webp"
                                className="w-full"
                                loading="lazy"
                                height={360}
                                width={642}
                            />
                            <Image
                                alt="Play Video"
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg"
                                loading="lazy"
                                className="absolute w-14 h-[42px] top-[calc(50%-21px)] left-[calc(50%-30px)] transition-all ease-in-out duration-300"
                                height={512}
                                width={360}
                            />
                        </div>
                    </div>
                </button>
            )}
            {showVideo && (
                <Player videoId={videoId} setHasLoaded={setHasLoaded}/>
            )}
        </>
    );
};

export default YouTubePlayer;