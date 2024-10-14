type FooterProps = {
  total: number;
  completedCount: number;
  onDeleteCompleted: () => void;
  onToggleAll: (checked: boolean) => void; 
};

const Footer: React.FC<FooterProps> = ({
  total,
  completedCount,
  onDeleteCompleted,
  onToggleAll
}) => {
  const allCompleted = total > 0 && total === completedCount;

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggleAll(e.target.checked);
  };

  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={allCompleted}
          onChange={handleCheckAll}
        />
      </label>
      <span>
        <span>Finished {completedCount}</span> / Total {total}
      </span>
      <button className="btn btn-danger" onClick={onDeleteCompleted}>
        Delete Finished Tasks
      </button>
    </div>
  );
};

export default Footer;
