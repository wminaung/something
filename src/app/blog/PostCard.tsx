"use client";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface PostCardProps {
  username: string;
  time: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ username, time, content }) => {
  return (
    <Card style={{ margin: "16px", maxWidth: "600px" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {username}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          style={{ marginBottom: "8px" }}
        >
          {time}
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Comment</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
