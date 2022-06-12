import ReactPlayer from 'react-player'

const VideoPlayer = ({ podcastUrl }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={`${podcastUrl}`}
        width="100%"
        height="50%"
        controls
      />
    </div>
  )
}
export default VideoPlayer
