import { useCallback, useEffect, useState } from 'react';

export function useBackToTop() {
  const [show, setShow] = useState<boolean>(false);
  const [lastScrollVertical, setLastScrollVertical] = useState<number>(0);

  const handleControlScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setShow(false);
      return;
    }

    if (window.scrollY > lastScrollVertical) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollVertical(window.scrollY);
  }, [lastScrollVertical]);

  useEffect(() => {
    window.addEventListener('scroll', handleControlScroll);

    return () => {
      window.removeEventListener('scroll', handleControlScroll);
    };
  }, [handleControlScroll, lastScrollVertical]);

  return { show };
}
