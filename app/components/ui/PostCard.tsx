import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
}
const PostCard = ({ id, title, text, imageUrl }: Props) => {
  return (
    <Card className="pt-8 pb-4 px-8">
      <CardContent>
        <Typography className="text-2xl " component="h5">
          {title}
        </Typography>
        <Typography className="pl-6 pt-4" variant="body2">
          {text}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-end pt-3">
        <Link
          href={{ pathname: `/post/${id}`, query: { title, text, imageUrl } }}
        >
          Подробнее
        </Link>
      </CardActions>
    </Card>
  );
};

export default PostCard;
