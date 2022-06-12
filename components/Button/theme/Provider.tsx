import { ThemeContext } from './context';
import type { Theme } from './context';

type Props = {
	theme: Theme;
	children: React.ReactChild;
}

const Provider = ({ theme, children }: Props) => (
	<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export default Provider;