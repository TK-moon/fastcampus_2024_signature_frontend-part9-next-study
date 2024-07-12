import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";

const RemoteMain: FC = () => {
  return (
    <main>
      <Image
        src="/img/image.jpg"
        width={500}
        height={750}
        alt=""
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAAF0lEQVR42mPsamj4z0AEYBxVOKqQbIUAaA0mF4jGHEQAAAAASUVORK5CYII="
        loading="eager"
      />
    </main>
  );
};

export { RemoteMain };
