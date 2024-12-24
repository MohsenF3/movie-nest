export default function MovieTrailerSection({ id }: { id: string }) {
  return (
    <section className="card-section">
      <h3>Trailer</h3>
      <div className="aspect-video rounded-xl">
        <iframe
          className="h-full w-full rounded-xl border-none"
          src={`https://www.youtube.com/embed/${id}`}
          allow="autoplay; encrypted-media; fullscreen;"
          title="Embedded YouTube video"
        />
      </div>
    </section>
  );
}
