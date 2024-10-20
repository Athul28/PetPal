import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";

export default function Intro() {
  return (
    <div>
      <p>Introducing Our Adorable Pets</p>
      <div className="flex flex-wrap">
        <div>
          <img src={cat1} alt="cat-img" className="h-96 rounded-3xl" />
          <p>Meet</p>
        </div>
        <div>
          <img src={cat2} alt="cat-img" className="h-96 rounded-3xl" />
          <p>Discover</p>
        </div>
        <div>
          <img src={cat3} alt="cat-img" className="h-96 rounded-3xl" />
          <p>Explore</p>
        </div>
      </div>
    </div>
  );
}
