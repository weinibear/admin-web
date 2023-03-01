export interface AddTag {
  name: string;
  createdBy: string;
  state?: number;
}

export interface EditTag {
  id: number;
  name: string;
  modifiedBy: string;
  state?: number;
}

export interface AddArticle {
  tagId: number;
  title: string;
  desc: string;
  content: string;
  createdBy: string;
  coverImageUrl: string;
  state?: number;
}

export interface EditArticle {
  id: number;
  tagId: number;
  title: string;
  desc: string;
  content: string;
  modifiedBy: string;
  coverImageUrl: string;
  state?: number;
}
