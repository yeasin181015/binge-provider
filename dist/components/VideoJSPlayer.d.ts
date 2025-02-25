import "video.js/dist/video-js.css";
declare const VideoJSPlayer: ({ videoId, _hlsStreamUrl, isActive, redirectPath, initialTime, onTimeUpdate, path, }: {
    initialTime: number;
    onTimeUpdate: (time: any) => void;
    videoId: number;
    _hlsStreamUrl: string;
    isActive: boolean;
    redirectPath: string;
    path: string;
}) => import("react/jsx-runtime").JSX.Element;
export default VideoJSPlayer;
//# sourceMappingURL=VideoJSPlayer.d.ts.map