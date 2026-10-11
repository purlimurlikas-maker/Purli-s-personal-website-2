import travelPhoto from "./E332C295-CC31-4B7B-A8EA-9A65D97F9291_1_105_c.jpeg";

export default function Hero() {
  return (
    <section>
         <div className="hobbies">
         <h2>My hobbies</h2>
         <p>My hobbies are swimming, cooking, eating, coding and travelling. I also listen to lots of music (ESPECIALLY Beyoncé).</p>
         </div>
          <p>
         <img className="travel" src={travelPhoto} alt="Travel" />
         </p>
       </section>
  );
}