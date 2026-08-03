import CreateCategoryForm from "@/components/dashboard/admin/categories/CreateCategoryForm";

export default function CreateCategoryPage() {
  return (
    <div className="space-y-6 p-4 lg:p-4">
      <h1 className="text-3xl font-bold">Create Category</h1>

      <CreateCategoryForm />
    </div>
  );
}
