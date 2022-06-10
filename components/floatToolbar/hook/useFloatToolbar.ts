import { useState, useCallback } from 'react';

const TYPE_RANGE = 'Range';

const useFloatToolbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [rects, setRects] = useState({ top: 0, left: 0 });

  const moveToolbar = useCallback(
    () => {
      const selection = document.getSelection();
      const coordinates = getSelectionCoordinates(selection);

      if (coordinates && selection.type === TYPE_RANGE) {
        setRects({
          top: coordinates.y - 5,
          left: coordinates.x + coordinates.width / 2,
        });
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    },
    [],
  );

  const getSelectionCoordinates = (selection: Selection) => {
    const r = selection.getRangeAt(0);
    const clip = r.getClientRects();

    if (!clip.length) return false;

    const { x, y, width } = clip[0];
    return { x, y, width };
  };

  return { moveToolbar, isShow, rects };
}

export default useFloatToolbar;
