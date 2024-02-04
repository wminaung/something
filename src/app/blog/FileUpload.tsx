"use client";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FileUpload() {
  const [value, setValue] = useState<FileList | null>(null);
  const [fd, setFd] = useState<FormData>(new FormData());
  console.log(value);

  const fetchPostImage = async (formData: FormData) => {
    const res = await fetch("http://localhost:3000/api/image", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput
        onChange={async (e) => {
          console.count("onchange");
          if (e.target.files && e.target.files[0]) {
            fd.set("fileUpload", e.target.files[0]);
            console.log(fd);
            await fetchPostImage(fd);
          }
        }}
        type="file"
        accept="image/*"
      />
    </Button>
  );
}
