"use client";

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import ReactMarkdown from "react-markdown";

const BlogCard = ({ username, time, content }: any) => {
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
        <ReactMarkdown>{content}</ReactMarkdown>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Comment</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
