"use client"

type TodoItemmProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemmProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-400">
        {title}
      </label>
    </li>
  );
}
