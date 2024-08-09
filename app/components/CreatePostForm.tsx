import { v4 as uuidv4 } from "uuid";
import { revalidateTag } from "next/cache";
import { Button } from "@mui/material";

const createInvoice = async (formData: FormData) => {
  "use server";
  const rawFormData = {
    id: uuidv4(),
    title: formData.get("title"),
    text: formData.get("text"),
    imageUrl: formData.get("imageUrl"),
  };

  const res = await fetch(
    "https://my-json-server.typicode.com/AzloRog/fake-api/posts",
    {
      method: "POST",
      body: JSON.stringify(rawFormData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Error, can't post data to api");
  }
  const resData = await res.json();
  console.log(resData);

  revalidateTag("posts");
};

const CreatePostForm = () => {
  return (
    <form
      action={createInvoice}
      className="mx-auto mb-6 grid gap-4 justify-center border  border-gray-300 bg-slate-50 pt-8 pb-4  items-baseline max-w-[640px] text-xl"
    >
      <div className="flex gap-4 justify-between">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          className="border border-gray-400"
          required
        />
      </div>
      <div className="flex gap-4 justify-between">
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          className="border border-gray-400"
          required
        />
      </div>
      <div className="flex gap-4 justify-between">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="border border-gray-400"
        />
      </div>
      <Button
        type="submit"
        variant="outlined"
        className="mt-4 border-2 border-blue-300 rounded-md py-1"
      >
        Create Card
      </Button>
    </form>
  );
};

export default CreatePostForm;
