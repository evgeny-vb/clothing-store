import {RefObject, useEffect, useState} from "react";


export default function useOnScreen(ref: RefObject<HTMLElement>, threshold?: number) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
    {threshold: threshold}
  )

  useEffect(() => {
    observer.observe(ref.current!)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}
