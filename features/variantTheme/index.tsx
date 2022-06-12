import { createTheme, ThemeProvider } from '../../components/Button';
import VariantTheme from './VariantTheme';

const theme = createTheme({
  components: {
    Button: {
      variants: [
        {
          props: { variant: 'danger' },
          className:
            'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
        },
        {
          props: { variant: 'gradient' },
          className:
            'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-bold',
        },
        {
          props: { variant: 'colored-shadows' },
          className:
            'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
        },
        {
          props: { variant: 'outline' },
          className:
            'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
        },
      ],
    },
  },
});

const VariantThemePage = () => (
  <ThemeProvider theme={theme}>
    <VariantTheme />
  </ThemeProvider>
);

export default VariantThemePage;
