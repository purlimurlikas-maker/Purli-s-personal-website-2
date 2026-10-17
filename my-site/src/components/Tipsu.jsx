import Tipsu1 from "./Tipsu1.jpeg";
import Tipsu2 from "./Tipsu2.jpeg";
import Tipsu3 from "./Tipsu3.jpeg";
import Tipsu4 from "./Tipsu4.jpeg"

export default function Hero() {
  return (
   <section>
         <div className="Tipsu">
         <h2>Tipsu</h2>
         <p>This is Tipsu, she is my cat. I got her for my 12th birthday and she is such a cutieeeee.</p>
         </div>
         <p>
         <img className="Tipsu1" src={Tipsu1}/>
         <img className="Tipsu2" src={Tipsu2}/>
         <img className="Tipsu3" src={Tipsu3}/>
         <img className="Tipsu4" src={Tipsu4}/>
         </p>
       </section>
  );
}