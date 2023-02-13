export type Document = {
  '@context': string;
  '@id': string;
  '@type': string;
  id: number;
  created: Date;
  title: string;
  content: string;
  comments: string[];
};

export type Documents = {
  'hydra:member': Document[];
  'hydra:totalItems': number;
};
