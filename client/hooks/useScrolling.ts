import {  useCallback } from "react";
export function useScrolling() {
  /**
   * @disc when use that hook you will hiddn scrollbar page
   */
  const hiddenScrollbar = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);
  /**
   * @disc when use that hook you will show scrollbar page
   */
  const showScrollbar = useCallback(() => {
    document.body.style.overflow = "auto";
  }, []);

  return {
    hiddenScrollbar,
    showScrollbar,
  };
}
