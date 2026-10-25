import "./About.css";
import { Link } from "react-router-dom";
import ValueCard from "../../components/valuecard/ValueCard";
import { values } from "../../data/content";

const About = () => {
    return (
        <main className="about-page">
            {/* About Hero */}
            <section className="about-hero">
                <div className="about-hero-card">
                    <h1 className="about-hero-title">Cola Clothes</h1>
                    <p className="about-hero-desc">
                        A secondhand outdoor store for Columbia hikers, campers, and climbers. We connect local adventurers with pre-loved gear, trail-tested stories, and a community that keeps the outdoors moving.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section--story">
                <div className="story-text">
                    <h2 className="story-title">Gear That Keeps the Trail Alive</h2>
                    <p className="story-paragraph">
                        Cola Clothes started as a local gear swap between friends in Columbia. We realized that the best outdoor gear was often retired too early - still waterproof, still warm, still ready for the next ridge. So we built a secondhand store that helps hikers, campers, and climbers buy and sell gear with people who understand the value of a well-loved shell, a reliable stove, and a pack that has already seen the sunrise.
                    </p>
                    <p className="story-paragraph">
                        Today, our store is a gathering place for the local outdoor community. We host gear swaps, repair workshops, and trail meetups that keep the spirit of adventure moving. Whether you are outfitting a first backpacking trip or upgrading for a bigger objective, every purchase here supports a more circular, more local way to enjoy the outdoors.
                    </p>
                </div>
                <img
                    className="story-image"
                    src={`${process.env.PUBLIC_URL}/images/about/community-meetup.jpg`}
                    alt="Local hikers and climbers swapping gear around a picnic table in the woods"
                />
            </section>

            {/* Why We Reuse */}
            <section className="section--values">
                <div className="section-intro">
                    <h2 className="section-title">Why We Reuse</h2>
                    <p className="section-subtitle">The values that keep our gear, our trails, and our community moving.</p>
                </div>

                <div className="values-grid">
                    {values.map((value) => (
                        <ValueCard key={value.id} icon={value.icon} title={value.title} desc={value.desc} />
                    ))}
                </div>
            </section>

            {/* Join CTA */}
            <section className="section--join">
                <div className="join-card">
                    <h2 className="join-title">Join the Local Gear Loop</h2>
                    <p className="join-desc">Shop curated secondhand gear, list your own equipment, and support a community that keeps the outdoors moving in Columbia.</p>
                    <div className="join-buttons">
                        <Link className="join-btn-primary" to="/shop">Shop Secondhand Gear</Link>
                        <Link className="join-btn-secondary" to="/sell">List Your Gear</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
