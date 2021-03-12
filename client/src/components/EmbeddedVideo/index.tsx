import sm from "./styles.module.scss";

export default function EmbeddedVideo({ embedId }: { embedId: string }) {
  return (
    <div className={sm.VideoResponsive}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube"
      />
    </div>
  );
}
