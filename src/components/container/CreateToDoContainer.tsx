import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTodoContext } from "@/provider/ToDoProvider";

export function CreateTodoContainer() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = inputRef.current?.value.trim();
    if (newTodo) {
      addTodo(newTodo);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <Input
        type="text"
        placeholder="Add a new task"
        ref={inputRef}
        className="flex-grow"
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
