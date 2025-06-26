import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
