export interface Post {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
}
export interface Comment {
  id: number;
  postId: number;
  text: string;
}
