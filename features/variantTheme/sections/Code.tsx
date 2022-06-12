const CodeSection = () => (
  <>
    <section className="mb-5">
      <p className="text-base dark:text-white mb-2">pages/_app.js</p>
      <div className="not-prose rounded-xl bg-slate-800/75 p-5 border-2 border-gray-700">
        <pre className="text-white whitespace-pre-wrap">{`import { createTheme, ThemeProvider } from 'Button';

const theme = createTheme({
  components: {
    Button: {
      variants: [
        {
          props: { variant: 'danger' },
          className: 'focus:outline-none text-white bg-red-700...',
        }
      ]
    }
  }
});

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp`}</pre>
      </div>
    </section>

    <section>
      <p className="text-base dark:text-white mb-2">pages/some-page.js</p>
      <div className="not-prose rounded-xl bg-slate-800/75 p-5 border-2 border-gray-700">
        <pre className="text-white whitespace-pre-wrap">{`import Button from 'Button';

const SomePage = ({ Component, pageProps }) => (
  <>
    <Button variant="default">Default</Button>
    <Button variant="danger">Danger</Button>
  </>
);

export default SomePage`}</pre>
      </div>
    </section>
  </>
);

export default CodeSection;
