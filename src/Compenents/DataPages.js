import { useState } from 'react';
import { userRows, userColumns, actionColumn } from '../Assest/Data';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";

const DataPages = () => {

    const [data, setData] = useState(userRows);

  return (
    <div>
        <div className="datatable">
             <div className="datatableTitle">
              <span>Add New User</span>
                <Link to="/new" style={{ textDecoration: "none" }}>
                <span className="link">Add New</span>
                </Link>
             </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
    </div>
    </div>
  )
}

export default DataPages
