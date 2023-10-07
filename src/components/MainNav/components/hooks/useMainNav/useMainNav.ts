import { useCallback, useState } from 'react';

export function useMainNav() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleToggleMenu = useCallback(() => {
    setIsOpenMenu((prevState) => !prevState);
  }, []);

  return {
    isOpenMenu,
    handleToggleMenu
  };
}
