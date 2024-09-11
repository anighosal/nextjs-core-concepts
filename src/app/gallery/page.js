import nextImage from "@/assets/nextjs.png";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl">Image Gallery page</h1>
      <h1 className="text-center text-2xl">Regular image</h1>

      <img
        className="mx-auto"
        src="https://notes.webutvikling.org/images/nextjs.png"
        alt="next image"
        width={500}
        height={500}
      ></img>

      <h2 className="text-center text-2xl">next js image components</h2>
      <Image
        src="https://notes.webutvikling.org/images/nextjs.png"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      ></Image>
      <h2 className="text-center text-2xl">Local image</h2>
      <Image
        src={nextImage}
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      ></Image>
    </div>
  );
};

export default GalleryPage;
