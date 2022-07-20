const pages = [
  {
    id: '1',
    title: 'Page A',
    type: 'List',
    cover: '/assets/contemplative-reptile.png',
  },
  {
    id: '2',
    title: 'Page B',
    type: 'Form',
    cover: '/assets/contemplative-reptile.png',
  },
];

export const getAllPages = () => pages;
export const getPage = (id: string) => pages.find((page) => page.id === id);
