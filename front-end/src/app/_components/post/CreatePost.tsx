import React from "react";
import useCreatePost from "./hook/useCreatePost";
import { X } from "lucide-react";

const CreatePost = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [{ formik }] = useCreatePost({onClose});

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={()=>onClose()}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X />
        </button>
        <h2 className="text-lg font-semibold mb-4">Create Post</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
        
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              name="content"
              rows={4}
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm resize-none"
              placeholder="What's on your mind?"
            />
            {formik.touched.content && formik.errors.content && (
              <p className="text-sm text-red-500 mt-1">
                {formik.errors.content}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-700"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
