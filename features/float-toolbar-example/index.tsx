import { useState, useEffect } from 'react';
import { remove } from 'lodash';
import FloatToolbar from '../../components/float-toolbar';
import type { Action } from '../../components/float-toolbar';

const TYPE_RANGE = 'Range';

const FloatToolbarExample = () => {
  const [isShow, setIsShow] = useState(false);
  const [rects, setRects] = useState({ top: 0, left: 0 });

  const getSelectionCoordinates = (selection: Selection) => {
    const r = selection.getRangeAt(0);
    const clip = r.getClientRects();

    if (!clip.length) return false;

    const { x, y, width } = clip[0];
    return { x, y, width };
  };

  const moveToolbar = () => {
    const selection = document.getSelection();
    const coordinates = getSelectionCoordinates(selection);

    if (coordinates && selection.type === TYPE_RANGE) {
      setRects({
        top: coordinates.y - 5,
        left: coordinates.x + coordinates.width / 2,
      });
      setIsShow(true);
      updateActionStatus(selection);
    } else {
      setIsShow(false);
    }
  };

  const getCssText = (selection: Selection) => {
    const parentEl = selection.anchorNode.parentElement;
    const extentEl = selection.focusNode.parentElement;
    return parentEl.style.cssText + extentEl.style.cssText;
  };

  const [activeActions, setActiveActions] = useState<Action[]>([]);

  const updateActionStatus = (selection: Selection) => {
    const actions: Action[] = ['bold', 'underline', 'italic'];
    const cssText = getCssText(selection);

    actions.forEach((action) => {
      const isActive = cssText.includes(action);
      toggleActionState(action, isActive);
    });
  };

  const toggleActionState = (action: Action, isActive: boolean) => {
    if (isActive) {
      setActiveActions((prev) => [...prev, action]);
    } else {
      setActiveActions((prev) => remove(prev, (n) => n !== action));
    }
  };

  const handleActionClick = (action: Action, isActive: boolean) => {
    toggleActionState(action, !isActive);
    exec(action);
  };

  const exec = (cmd: Action, param = null) => {
    document.execCommand('styleWithCSS', false);
    document.execCommand(cmd, false, param);
  };

  return (
    <>
      <div
        id="editor"
        contentEditable="true"
        spellCheck="false"
        className="bg-slate-100 p-8 max-w-lg my-8 mx-auto"
        onSelect={moveToolbar}
        onMouseUp={moveToolbar}
      >
        <div>
          Try to select some text and mark as <span style={{ fontWeight: 'bold' }}>bold</span>,{' '}
          <span style={{ textDecorationLine: 'underline' }}>underline</span>,{' '}
          <span style={{ fontStyle: 'italic' }}>italic</span>.
        </div>
        <hr className="my-3" />
        <p className="mb-6">
          <span>
            階層樣式表 (Cascading Stylesheets；CSS)
            可用以塑造網站的特殊風格。例如這段文字要用一般的黑色，或是改用紅色標明重點？某段重要內容應該置於畫面的何處？想用什麼背景圖片及顏色裝飾你的網站？〈CSS
            基本概念〉帶你入門。
          </span>
        </p>

        <p>
          <span>
            跟 HTML 一樣，CSS 既非標準程式語言，也不是標記語言, 而是一種風格頁面語言（style sheet
            language）：它能讓你在 HTML 文件中的元素（element）上套用不同的頁面樣式（style）。例如,
            當想要將 HTML 頁面上所有段落元素（paragraph
            elements）裡的文字全部轉換成紅色，你會在CSS裡寫:
          </span>
        </p>
      </div>
      <FloatToolbar
        isShow={isShow}
        top={rects.top}
        left={rects.left}
        activeActions={activeActions}
        handleActionClick={handleActionClick}
      />
    </>
  );
};

export default FloatToolbarExample;
