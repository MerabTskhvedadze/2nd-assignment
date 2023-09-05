import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";

const Landing = lazy(() => import("./pages/Landing"));
const Post = lazy(() => import("./pages/Post"));
const EditPost = lazy(() => import("./pages/EditPost"));
const AddPost = lazy(() => import("./pages/AddPost"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/editpost/:postId" element={<EditPost />} />
          <Route path="/addpost" element={<AddPost />} />

          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
