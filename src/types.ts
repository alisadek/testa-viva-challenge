export type Comment = {
  id: number;
  created: Date;
  author: string;
  comment: string;
  document: string;
};

export type Document = {
  id: number;
  created: Date;
  title: string;
  content: string;
  comments: string[];
};
