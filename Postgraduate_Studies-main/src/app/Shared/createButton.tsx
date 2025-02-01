import{ FC } from "react";
import AddIcon from '@mui/icons-material/Add';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreateButton: FC<{ title: string;[key: string]: any }> = (props) => {
  return (
    <button
      style={{ width: 'max-content', fontSize:'20px', backgroundColor:'#426AC4', border:'none' }}
      className="d-flex btn btn-sm btn-primary rounded px-2 styleButton align-items-center"  {...props}>
        <AddIcon/>
      {props.title}
    </button>
  );
};
export default CreateButton;
