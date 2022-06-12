import { createContext } from 'react';

export type Theme = {
	components: {
		Button: {
			variants: {
				props: {
					variant: string;
				},
				className: string;
			}[]
		}
	}
}

export const ThemeContext = createContext<Theme | null>(null);
