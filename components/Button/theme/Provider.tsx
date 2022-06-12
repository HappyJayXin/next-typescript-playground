import { ThemeContext } from './context'

type Props<T> = {
	theme: T;
	children: React.ReactChild;
}

const Provider = <T,>({ theme, children }: Props<T>) => (
	<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export default Provider;