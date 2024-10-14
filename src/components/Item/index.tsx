import "./style.css";

type ItemProps = {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

const Item: React.FC<ItemProps> = ({ title, completed, onToggle, onDelete }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />
        <span >
          {title}
        </span>
      </label>
      <button className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Item;
