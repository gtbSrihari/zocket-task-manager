import { Task } from '../lib/types';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="p-2 mb-2 border-b">
          <p className="font-medium">{task.title}</p>
          <p className="text-sm">{task.status}</p>
        </div>
      ))}
    </div>
  );
}