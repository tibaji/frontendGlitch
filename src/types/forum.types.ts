export interface Forum {
  id: number;
  name: string;
  description: string;
  slug: string;
  createdAt: string;
  _count: {
    posts: number;
  };
}

export interface Post {
  id: number;
  alias: string;
  message: string;
  forumId: number;
  createdAt: string;
}
