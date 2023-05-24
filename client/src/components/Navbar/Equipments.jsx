import { Link } from 'react-router-dom';

const Equipments = ({ menuRef }) => {
  return (
    <div ref={menuRef} className="drop-equipments ">
      <ul>
        <li>
          <Link to="#">Ploughs</Link>
        </li>
        <li>
          <Link to="#">Seeders</Link>
        </li>
        <li>
          <Link to="#">Cultivators</Link>
        </li>
      </ul>
    </div>
  );
};

export default Equipments;
