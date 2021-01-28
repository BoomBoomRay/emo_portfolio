import React from 'react';
import styled from 'styled-components';
import { photoGaller } from './data';

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

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 400px;
  --stagger-delay: 100ms;

  @keyframes cardEntrance {
    from {
      opacity: 0;
      transform: scale(0.3);
      filter: hue-rotate(180deg);
    }
    to {
      opacity: 1;
      transform: scale(1);
      filter: hue-rotate(0deg);
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #353535;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
      rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    border-radius: 1px;
    transition: all 500ms;
    overflow: hidden;
    cursor: pointer;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: cardEntrance 700ms ease-out;
    animation-fill-mode: backwards;
  }
  .card:hover {
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
      rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
    transform: translateY(-3px) scale(1.1);
  }

  .card:nth-child(1) {
    animation-delay: calc(1 * var(--stagger-delay));
  }
  .card:nth-child(2) {
    animation-delay: calc(2 * var(--stagger-delay));
  }
  .card:nth-child(3) {
    animation-delay: calc(3 * var(--stagger-delay));
  }
  .card:nth-child(4) {
    animation-delay: calc(4 * var(--stagger-delay));
  }
  .card:nth-child(5) {
    animation-delay: calc(5 * var(--stagger-delay));
  }
  .card:nth-child(6) {
    animation-delay: calc(6 * var(--stagger-delay));
  }
  .card:nth-child(7) {
    animation-delay: calc(7 * var(--stagger-delay));
  }
  .card:nth-child(8) {
    animation-delay: calc(8 * var(--stagger-delay));
  }
  .card:nth-child(9) {
    animation-delay: calc(9 * var(--stagger-delay));
  }
  .card:nth-child(10) {
    animation-delay: calc(10 * var(--stagger-delay));
  }
  .card:nth-child(11) {
    animation-delay: calc(11 * var(--stagger-delay));
  }
  .card:nth-child(12) {
    animation-delay: calc(12 * var(--stagger-delay));
  }
  .card:last-child {
    animation-delay: calc(13 * var(--stagger-delay));
  }
  @media screen and (min-width: 1400px) {
    .class-wide {
      grid-column: span 2 / auto;
    }
    .class-tall {
      grid-row: span 2 / auto;
    }
    .class-big {
      grid-column: span 2 / auto;
      grid-row: span 2 / auto;
    }
  }
`;
