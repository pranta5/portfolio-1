
import Image from "next/image";
import image1 from "../../../public/projectImg.png";
import image2 from "../../../public/projectImg2.png";

const Recentproject = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 m-12 text-left rounded-2xl shadow-2xl">
        <div className="rounded-lg shadow-2xl my-8 ml-8 mr-4 transition-all duration-300 hover:scale-110">
          <Image src={image1} alt="Project Image" />
          <p className="p-4 m-2 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            exercitationem quo aut a rerum accusantium molestias soluta
            repudiandae, inventore ea architecto eveniet nulla incidunt
            aperiam autem aliquid itaque, facilis nam?
          </p>
        </div>
        <div className="rounded-2xl shadow-2xl transition-all my-8 mr-8 ml-4 duration-300 hover:scale-110">
          <Image src={image2} alt="Project Image" />
          <p className="p-4 m-2 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            exercitationem quo aut a rerum accusantium molestias soluta
            repudiandae, inventore ea architecto eveniet nulla incidunt
            aperiam autem aliquid itaque, facilis nam?
          </p>
        </div>
      </div>
    
  )
}

export default Recentproject