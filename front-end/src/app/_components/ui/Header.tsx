"use client"
import { useState } from "react";
import CreatePost from "../post/CreatePost";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm p-4 flex justify-between items-center w-[calc(100%-1rem)] rounded my-4">
      <h1 className="text-lg font-bold">MySocial</h1>
      <button className="text-sm text-blue-500" onClick={() => setOpen(true)}>
        + Post
      </button>
      <CreatePost  isOpen={open} onClose={() => setOpen(false)} />
    </header>
  );
};
export default Header