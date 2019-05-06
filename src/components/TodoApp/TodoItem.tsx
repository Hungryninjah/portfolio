import React from 'react';

interface Props {
  item: {
    completed: boolean;
    id: number;
    text: string;
  };
  onCheckBox(id: number): void;
  onDeleteItem(item: object): void;
}

const TodoItem: React.FC<Props> = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _renderedStyle = (isBoxChecked: boolean): any => {
    if (isBoxChecked) {
      return {
        fontStyle: 'italic',
        color: 'grey',
        textDecoration: 'line-through',
      };
    } else {
      return null;
    }
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} onChange={(): void => props.onCheckBox(props.item.id)} />
      <p style={_renderedStyle(props.item.completed)}>{props.item.text}</p>
      <button className="delete-button" onClick={(): void => props.onDeleteItem(props.item)}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
