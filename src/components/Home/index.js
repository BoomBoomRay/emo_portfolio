import React, { useState } from 'react';
import { photoGaller } from './data';
import { Section } from './indexElement';
import { Modal } from '../index';

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null);

  const enlargeImg = (img) => {
    setSelectedImg(img);
  };

  return (
    <>
      <Section>
        {photoGaller.map((i, _) => (
          <div
            onClick={() => enlargeImg(i.image)}
            key={_}
            className={i.class}
            style={{
              backgroundImage: `url(${i.image})`,
            }}
          ></div>
        ))}
      </Section>
      <Modal selectedImg={selectedImg} />
    </>
  );
}
