export enum PageType {
  List,
  Form,
}

export interface Page {
  id: string;
  title: string;
  type: PageType;
  cover: string;
}
