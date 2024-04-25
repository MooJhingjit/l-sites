
export type SearchParams = { [key: string]: string };

export type Params = {
  locale: string;
  slug?: string | string[];
  routes: string[];
};

export type Meta = {
  title: string;
  description: string;
}
