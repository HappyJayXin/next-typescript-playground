import Link from 'next/link';
import Center from '../components/Center';

const items = [
  {
    href: '/float-toolbar',
    name: 'Float Toolbar'
  },
  {
    href: '/variant-theme',
    name: 'Variant Theme'
  },
  {
    href: '/react-spring',
    name: 'React Spring'
  }
];

const IndexPage = () => (
  <Center>
    <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {items.map((item) => (
        <Link href={item.href}>
          <a className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  </Center>
);

export default IndexPage;
