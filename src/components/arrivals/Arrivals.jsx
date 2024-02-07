import Card from "../card/Card";
import "./arrivals.css";
import cat01Img from "./../../img/arrivals/01.jpg";
import cat02Img from "./../../img/arrivals/02.jpg";
import cat03Img from "./../../img/arrivals/03.jpg";

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title-2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals__cards">
          <Card title="Hoodies & Sweetshirt" img={cat01Img} />
          <Card title="Coats & Parkas" img={cat02Img} />
          <Card title="Tees & T-Shirt" img={cat03Img} />
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
