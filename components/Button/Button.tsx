import { useContext, useState, useEffect } from 'react';
import { find } from 'lodash';
import clsx from 'clsx';

import { ThemeContext } from './theme/context';

type Props = {
  variant: string;
  children: React.ReactChild;
};

const Button = ({ variant, children }: Props) => {
  const theme = useContext(ThemeContext);
	const buttonThemes = theme.components.Button.variants;

  const [className, setClassName] = useState('');

  useEffect(() => {
    switch (variant) {
      case 'default':
        setClassName('text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800');
        break;

      default:
        const buttonTheme = find(buttonThemes, (theme) => theme.props.variant === variant);
				if (buttonTheme) {
					setClassName(buttonTheme.className);
				} else {
					throw new Error(`The variant ${variant} you use does not exist.`);
				}
        break;
    }
  }, [variant, buttonThemes]);

  return <button className={clsx(className, 'm-1')}>{children}</button>;
};

export default Button;
