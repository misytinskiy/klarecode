import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "Our launch of the StepApp ecosystem required robust, scalable, and secure smart contract development. Klarecodev delivered exactly that. Their deep understanding of blockchain intricacies was invaluable.",
    name: "Alex Volkov",
    company: "StepApp",
  },
  {
    quote: "We tasked Klarecodev with building a high-performance, secure internal trading platform. Their team delivered an incredibly robust web application that perfectly integrated with our legacy systems, enabling our traders to execute strategies with unprecedented speed and reliability.",
    name: "Philipp Wagner",
    company: "GlobalInvest AS",
  },
  {
    quote: "As a fast-growing startup, we needed a development partner who could keep pace with our innovation. Klarecodev not only built our core platform from scratch but also helped us scale rapidly, ultimately contributing to our successful acquisition by a major tech conglomerate.",
    name: "Alex Müller",
    company: "Fusion Labs",
  },
  {
    quote: "The AI-driven automation solution Klarecodev developed for our warehouse logistics has been a game-changer. We've seen a measurable 20% increase in operational efficiency and significant reductions in manual processing errors across our European distribution centers.",
    name: "Philipp Wagner",
    company: "GlobalInvest AS",
  },
  {
    quote: "The AI-driven automation solution Klarecodev developed for our warehouse logistics has been a game-changer. We've seen a measurable 20% increase in operational efficiency and significant reductions in manual processing errors across our European distribution centers.",
    name: "Philipp Wagner",
    company: "GlobalInvest AS",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.header}>
        <h2 className={styles.title}>Trusted by Founders & CTOs</h2>
        <p className={styles.subtitle}>
          Real feedback from leaders who built their core <br />
          infrastructure and scaled their products with <br />
          our engineering team.
        </p>
      </div>

      <div className={styles.cards}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar} />
              <div className={styles.rating} />
            </div>
            <p className={styles.quote}>{testimonial.quote}</p>
            <div className={styles.author}>
              <div className={styles.authorLine} />
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>{testimonial.name}</p>
                <p className={styles.authorCompany}>{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

