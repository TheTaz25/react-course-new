import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { animated, useSpringRef, useTransition, useChain, useSpring } from "react-spring";

const participants = [
  "Diana Vogel",
  "Adam Brune",
  "Jennifer Witzig",
  "Limock Limock",
  "Julian Wolpers",
  "Stefan Bickmann",
  "Tim Heinken",
  "Marvin Klar",
  "Varun Khambra",
  "Marcel Schramm",
  "Jonas Riedel",
  "Marlon Betz",
  "Hauke Hoffmann",
  "Mohammad Alsadi",
  "Nico Werner",
  "Nick Bertram",
  "Daniel Krüger (EXTERN)",
  "Alex Pajaron",
  "Alona Budilovska",
  "Tabea Frenzel",
  "Malek Boukhari"
];

const Animations: React.FC = () => {
  const [show, setShow] = useState(false);
  const api = useSpringRef();
  const transition = useTransition(show ? participants : [], {
    ref: api,
    trail: 1000 / participants.length,
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    }
  });

  useChain([api], [0.25]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(true);
  //   }, 250);
  // }, []);

  // useChain()
  return (
    <div style={{ width: 300 }}>
      <Button onClick={() => setShow((prev) => !prev)}>Toggle</Button>
      {/* {transition((style, item) => ( */}
      {
        transition((style, item) => (
          <animated.div style={style}>{item}</animated.div>
        ))
      }
      {/* {show && participants.map((p) => (
        <animated.div style={transition} key={p}>
          {p}
        </animated.div>
      ))} */}
      {/* ))} */}
    </div>
  );
}

export default Animations;