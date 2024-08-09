export interface Post {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
}
export interface Comment {
  id: number;
  postId: number;
  text: string;
}
