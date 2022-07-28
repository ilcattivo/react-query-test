import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export const useDidUpdateEffect = (
  effect: EffectCallback,
  deps?: DependencyList | undefined
) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      return effect();
    }
    didMountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
