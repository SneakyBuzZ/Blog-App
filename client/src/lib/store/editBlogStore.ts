import { StateCreator, create } from "zustand";
type State = {
  title: string;
  description: string;
  content: string;
  imageFile: string;
  _id: string;
};

type Actions = {
  addEditBlog: (blog: State) => void;
  reset: () => void;
};

const initialState: State = {
  title: "",
  description: "",
  content: "",
  imageFile: "",
  _id: "",
};

type editUserSliceType = State & Actions;

const editBlogSlice: StateCreator<
  editUserSliceType,
  [],
  [],
  editUserSliceType
> = (set) => ({
  ...initialState,
  addEditBlog: (blog) => {
    set((state) => ({
      ...state,
      title: blog.title,
      description: blog.description,
      content: blog.content,
      imageFile: blog.imageFile,
      _id: blog._id,
    }));
  },
  reset: () => {
    set(initialState);
  },
});

const useEditBlogStore = create(editBlogSlice);

export default useEditBlogStore;
