import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { useTodoContext } from "@/provider/ToDoProvider";

export function TodoListContainer() {
  const { todos, toggleTodo, deleteTodo } = useTodoContext();

  if (!todos || todos.length === 0) {
    return <p className="text-center text-muted-foreground">No todos yet!</p>;
  }
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-2 bg-secondary rounded-md"
        >
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
            />
            <span
              className={
                todo.completed ? "line-through text-muted-foreground" : ""
              }
            >
              {todo.text}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => deleteTodo(todo.id)}
            className="text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
}
