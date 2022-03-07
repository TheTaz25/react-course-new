import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { animated, useSpring, useSpringRef, useTransition, useChain } from "react-spring";

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

const AnimationPage: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  // const springTransition = useSpring({ opacity: show ? 1 : 0 });

  const api = useSpringRef();
  const springTransition = useTransition(show ? participants : [], {
    ref: api,
    trail: 250 / participants.length,
    from: {
      opacity: 0,
      transform: 'translateX(-20px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
    leave: {
      opacity: 0,
      transform: 'translateX(20px)',
    },
  });

  useChain([api], [0.1]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 250);
  }, []);

  return (
    <div style={{ width: 300 }}>
      <Button variant="outlined" onClick={() => setShow((prev) => !prev)}>Toggle List</Button>
      { springTransition((style, item) => (
        <animated.div style={style}>{item}</animated.div>
      ))}
    </div>
  );
};

export default AnimationPage;