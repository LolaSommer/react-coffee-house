import heroEvents from '../assets/heroEvents.webp';

export default function EventsBlog() {
  return (
    <section className="blog-hero">
      <div
        className="blog-hero__bg"
        style={{ backgroundImage: `url(${heroEvents})` }}
      />
    </section>
  );
}

