import { Page, PageType } from '@bigspur/api/util-interfaces';

const pages: Page[] = [
  {
    id: '1',
    title: 'Page A',
    type: PageType.List,
    cover: '/assets/contemplative-reptile.png',
  },
  {
    id: '2',
    title: 'Page B',
    type: PageType.Form,
    cover: '/assets/contemplative-reptile.png',
  },
];

export const getAllPages = () => pages;
export const getPage = (id: string) => pages.find((page) => page.id === id);
