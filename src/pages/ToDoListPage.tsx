import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TodoProvider } from "@/provider/ToDoProvider";
import { CreateTodoContainer } from "@/components/container/CreateToDoContainer";
import { TodoListContainer } from "@/components/container/ToDoListContainer";

export function TodoListPage() {
  return (
    <TodoProvider>
      <div className="container mx-auto p-4">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              To-Do List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CreateTodoContainer />
            <TodoListContainer />
          </CardContent>
        </Card>
      </div>
    </TodoProvider>
  );
}
