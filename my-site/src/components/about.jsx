import mePhoto from "./58BA9159-B516-400A-827B-976F935B1133_1_105_c.jpeg";

export default function Hero() {
  return (
   <section>
         <div className="about">
         <h2>Who am I?</h2>
         <p>My name is Purli. I am a thirteen year old girl from Estonia. I am a Christian and feminist.</p>
         </div>
         <p>
         <img className="Bey2" src="https://i.pinimg.com/736x/ce/6f/14/ce6f145b4336ca44aa8181c9d87231bd.jpg"/>
         <img className="me" src={mePhoto} alt="Purli" />
         </p>
       </section>
  );
}