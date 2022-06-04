import { useState, useEffect, memo } from 'react';
import clsx from 'clsx';
import { remove } from 'lodash';

import data from './data';
import useHotkeys from '../../hooks/useHotkey';

export type Action = 'bold' | 'italic' | 'underline';

type Props = {
  isShow: boolean;
  top: number;
  left: number;
};

const FloatToolbar = ({ isShow, top, left }: Props) => {
  useEffect(() => {
    const selection = document.getSelection();
    if (isShow) {
      updateActionStatus(selection);
    }
  }, [isShow]);

  const updateActionStatus = (selection: Selection) => {
    const actions: Action[] = ['bold', 'underline', 'italic'];
    const cssText = getCssText(selection);

    actions.forEach((action) => {
      const isActive = cssText.includes(action);
      toggleActionState(action, isActive);
    });
  };

  const getCssText = (selection: Selection) => {
    const parentEl = selection.anchorNode.parentElement;
    const extentEl = selection.focusNode.parentElement;
    return parentEl.style.cssText + extentEl.style.cssText;
  };

  const handleActionClick = (action: Action, isActive: boolean) => {
    toggleActionState(action, !isActive);
    exec(action);
  };

  const [activeActions, setActiveActions] = useState<Action[]>([]);

  const toggleActionState = (action: Action, isActive: boolean) => {
    if (isActive) {
      setActiveActions((prev) => [...prev, action]);
    } else {
      setActiveActions((prev) => remove(prev, (n) => n !== action));
    }
  };

  const exec = (cmd: Action, param = null) => {
    document.execCommand('styleWithCSS', false);
    document.execCommand(cmd, false, param);
  };

  const { pushHotkey } = useHotkeys();

  useEffect(() => {
    pushHotkey('ctrl+b', () => {
			onHotKey('bold');
    });
    pushHotkey('ctrl+i', () => {
			onHotKey('italic');
    });
    pushHotkey('ctrl+u', () => {
			onHotKey('underline');
    });
  }, [activeActions]);

  const onHotKey = (action: Action) => {
    const isActive = activeActions.includes(action);
		handleActionClick(action, isActive)
  };

  return (
    <div
      className={clsx(
        'bg-gradient-to-r from-slate-900 to-slate-700 absolute rounded px-2 pt-2 -translate-y-full -translate-x-2/4	',
        [isShow ? 'block' : 'hidden']
      )}
      style={{
        top: top + 'px',
        left: left + 'px',
      }}
    >
      {data.map((item) => {
        const action = item.action as Action;
        const isActive = activeActions.includes(action);
        return (
          <button
            type="button"
            className={clsx('bg-transparent px-1 hover:opacity-100', [
              isActive ? 'opacity-100' : 'opacity-50',
            ])}
            key={item.action}
            onClick={() => handleActionClick(action, isActive)}
          >
            {item.icon}
          </button>
        );
      })}
    </div>
  );
};

export default memo(FloatToolbar);
