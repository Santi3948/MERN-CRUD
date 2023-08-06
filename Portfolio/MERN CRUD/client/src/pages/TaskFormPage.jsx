import { useForm } from 'react-hook-form';

function TaskFormPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          autofocus
        />

        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
        ></textarea>

        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskFormPage