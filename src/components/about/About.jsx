import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/ptofile.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Burger Dukan</h4>
          <p>
            We are Burger Dukan. The place for most tasty burgers on the enitre
            earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu. Burgers are truly a culinary marvel, celebrated worldwide for
            their irresistible combination of flavors and textures. With each
            juicy, perfectly-grilled patty, they offer a satisfying symphony of
            taste that transcends the boundaries of fast food. The succulent
            meat, whether it's beef, chicken, or a delectable plant-based
            option, forms the heart of the burger, cooked to perfection and
            seasoned with an artful blend of spices. Nestled within a soft,
            toasted bun, it's a comforting embrace that cradles the savory
            treasure within. Toppings range from crisp lettuce, ripe tomatoes,
            and melted cheese to tangy sauces and pickles, elevating the burger
            to a harmonious medley of sensations. The first bite, an explosion
            of flavors and textures, is a moment of pure culinary bliss. Whether
            enjoyed at a humble food truck or a gourmet
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Muhammad Afaq</h3>
            </div>

            <p>
              I am Muhammad Afaq, the proud founder of Burger Dukan, a culinary
              haven that pays homage to the timeless joy of savoring a great
              burger. Our journey began with a simple yet profound vision - to
              create a place where every burger lover could indulge in a
              symphony of flavors. With a heart brimming with passion and a
              palate tuned to perfection, Burger Dukan was born. Our affiliation
              with "God Taste" is no coincidence; it represents our unwavering
              commitment to crafting burgers that are truly divine in taste.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
