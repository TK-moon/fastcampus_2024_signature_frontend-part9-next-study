import { FC } from "react";
import dog from "./image.jpg";
import Image from "next/image";

const LocalMain: FC = () => {
  console.log(dog);

  return (
    <main>
      <Image src={dog} width={500} placeholder="empty" quality={100} priority />
    </main>
  );
};

export { LocalMain };
