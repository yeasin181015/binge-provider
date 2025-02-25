import "plyr/dist/plyr.css";
interface VideoPlayerProps {
    videoId: number;
    _hlsStreamUrl: string;
    isActive: boolean;
    redirectPath: string;
    initialTime: number;
    onTimeUpdate: (time: number) => void;
    path: string;
}
declare const VideoJSPlayer: ({ videoId, _hlsStreamUrl, isActive, redirectPath, initialTime, onTimeUpdate, path, }: VideoPlayerProps) => import("react/jsx-runtime").JSX.Element;
export default VideoJSPlayer;
//# sourceMappingURL=VideoPlayer.d.ts.map