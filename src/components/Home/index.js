import React from 'react';
import { photoGaller } from './data';
import { Section } from './indexElement';

export default function Home() {
  return (
    <>
      <Section>
        {photoGaller.map((i, _) => (
          <div
            key={_}
            className={i.class}
            style={{
              backgroundImage: `url(${i.image})`,
            }}
          ></div>
        ))}
      </Section>
    </>
  );
}
