import './App.css';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles'; 
import SearchBar from "./Components/SearchBar";

  const rows = [
    {  id: '1' , col1: '10001', col2: 'int', col3: 'Tech', col4: 'kg', col5: 'for Technical', col6: 'FT'},
    {  id: '2' , col1: '10002', col2: 'int', col3: 'Pantry', col4: 'kg', col5: 'for Pantry', col6: 'FP'},
    {  id: '3' , col1: '10003', col2: 'int', col3: 'Tech', col4: 'kg', col5: 'for Technical', col6: 'FT'},
    {  id: '4' , col1: '10004', col2: 'int', col3: 'BS', col4: 'kg', col5: 'for Business', col6: 'FBS'},
    {  id: '5' , col1: '10005', col2: 'int', col3: 'Pantry', col4: 'kg', col5: 'for Pantry', col6: 'FP'},
    {  id: '6' , col1: '10006', col2: 'int', col3: 'Tech', col4: 'kg', col5: 'for Technical', col6: 'FT'},
    {  id: '7' , col1: '10007', col2: 'int', col3: 'Building', col4: 'kg', col5: 'for Building', col6: 'FBU'},
    {  id: '8' , col1: '10008', col2: 'double', col3: 'Coding', col4: 'kg', col5: 'for Coding', col6: 'FC'},
    {  id: '9' , col1: '10010', col2: 'double', col3: 'BS', col4: 'kg', col5: 'for Business', col6: 'FBS'},
    {  id: '10' , col1: '10012', col2: 'double', col3: 'Coding', col4: 'kg', col5: 'for Coding', col6: 'FC'},
    {  id: '11' , col1: '10024', col2: 'double', col3: 'Tech', col4: 'kg', col5: 'for Technical', col6: 'FT'},
    {  id: '12' , col1: '10034', col2: 'double', col3: 'SF', col4: 'kg', col5: 'for SuccessFactor', col6: 'FS'},
    {  id: '13' , col1: '11002', col2: 'double', col3: 'Guard', col4: 'kg', col5: 'for Guarding', col6: 'FG'},
    {  id: '14' , col1: '11200', col2: 'double', col3: 'Computer', col4: 'kg', col5: 'for Computer Research', col6: 'FCR'},
    {  id: '15' , col1: '12302', col2: 'char', col3: 'Table', col4: 'kg', col5: 'for Office', col6: 'FO'},
    {  id: '16' , col1: '13001', col2: 'char', col3: 'Chair', col4: 'kg', col5: 'for Chair', col6: 'FC'},
    {  id: '17' , col1: '10009', col2: 'char', col3: 'HVN', col4: 'kg', col5: 'for Chair', col6: 'FC'},
    {  id: '18' , col1: '10007', col2: 'char', col3: 'PC', col4: 'kg', col5: 'for HVN', col6: 'FH'},
    {  id: '19' , col1: '10015', col2: 'char ', col3: 'Laptop', col4: 'kg', col5: 'for Office', col6: 'FO'},
    {  id: '21' , col1: '10029', col2: 'char', col3: 'Leaf', col4: 'kg', col5: 'for Tree', col6: 'FT'},
    {  id: '22' , col1: '10038', col2: 'char', col3: 'Gold', col4: 'kg', col5: 'for Store', col6: 'FST'},
    {  id: '23' , col1: '12110', col2: 'char', col3: 'Silver', col4: 'gam', col5: 'for Store', col6: 'FST'},
    {  id: '24' , col1: '13000', col2: 'float', col3: 'Gold', col4: 'gam', col5: 'for store', col6: 'FST'},
    {  id: '25' , col1: '13002', col2: 'float', col3: 'Diamond', col4: 'gam', col5: 'for Store', col6: 'FST'},
    {  id: '26' , col1: '14003', col2: 'float', col3: 'Diamond', col4: 'dmg', col5: 'for Store', col6: 'FST'},
    {  id: '27' , col1: '15004', col2: 'float', col3: 'Gold', col4: 'dmg', col5: 'for Store', col6: 'FST'},
    {  id: '28' , col1: '16001', col2: 'float', col3: 'Silver', col4: 'gam', col5: 'for Store', col6: 'FST'},
    {  id: '29' , col1: '17001', col2: 'float', col3: 'Diamond', col4: 'hec', col5: 'for Store', col6: 'FST'},
    {  id: '30' , col1: '19201', col2: 'float', col3: 'Diamond', col4: 'hec', col5: 'for Store', col6: 'FST'},
  ];
  
  const columns  = [
    {  field: 'col1', headerName: 'Material Number', width: 253 , headerAlign: 'center', headerClassName: 'super-app-theme--header', align: 'center', 
   }, 
    {  field: 'col2', headerName: 'Material Type', width: 253, headerAlign: 'center', headerClassName: 'super-app-theme--header',align:'center',},
    {  field: 'col3', headerName: 'Material Group', width: 253, headerAlign: 'center', headerClassName: 'super-app-theme--header', align:'center', },
    {  field: 'col4', headerName: 'Base Unit of Measure', width: 253, headerAlign: 'center',headerClassName: 'super-app-theme--header', align:'center', },
    {  field: 'col5', headerName: 'Material Description', width: 253, headerAlign: 'center',headerClassName: 'super-app-theme--header', align:'center', },
    {  field: 'col6', headerName: 'Material Description in Uppercase for Matchcodes', width: 251 , headerAlign: 'center',headerClassName: 'super-app-theme--header', align:'center', 
    // renderHeader : () =>  (
    //   <div className ="example-warper" >
    //               <Popup
    //                   trigger={<strong style={{ color: 'white' }} >
    //                       {'Material Description in Uppercase for Matchcodes'}
    //                   </strong>}
    //                   position="top center"
    //                   on="hover"
    //               >
    //                   <Card title = 'Material Description in Uppercase for Matchcodes' />
    //               </Popup>
    //           </div> 
    //   ) 
  },
  ];
   
  const useStyles = makeStyles({
    root: {
      '& .super-app-theme--header': {
        backgroundColor: 'rgba(47, 85, 142)',
        color : 'white' 

      },
    },
    menu: {
      '& .MuiDataGrid-menuIconButton' : {
        color : 'white' 
      },
    }, 
   border: {
      '& .MuiDataGrid-withBorder' : {
        border  : '1px solid'
      },
    },
    cell: {
      ' & .MuiDataGrid-cell' : {
        border : '1px solid', 
        borderbottom : '1px solid #000000', 
      }
    }
  }); 

  function App() { 
    const classes = useStyles();
    const [pageSize, setPageSize] = React.useState(8);
    return (
      <div className="App">
        <SearchBar placeholder="Search..." data={rows} />
      <h1>MATERIAL TABLE</h1>
      <div style={{ height: 600, width: '95%', marginLeft: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={classes.root} >
        <DataGrid 
        className={[classes.menu , classes.border, classes.cell]}
        justify="center" 
        rows={rows} 
        columns={columns} 
        maxColumns={6}
        minWidth={150}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[8,16,24,32,40]}
        pagination
        rowCount={40}
        spacing={2} 
        showColumnRightBorder={true}
        // components={{
        //   Toolbar: GridToolbar,
        // }}
        />
      </div>
      </div>
  );       
}

export default App;
