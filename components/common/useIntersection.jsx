// hooks/useIntersection.ts

import { useInView } from "react-intersection-observer";

export const UseIntersection = (options) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  return { ref, isIntersecting: inView };
};
