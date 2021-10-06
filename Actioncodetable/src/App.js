import './App.css';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles'; 
import SearchBar from "./Components/SearchBar";

  const rows = [
    {   col1: '001' , id: '1', col2: 'Tập đoàn CMC'             , col3: 'Procurement', col4: 'https://www.sap.com/' },
    {   col1: '002' , id: '2', col2: 'Tập đoàn Tiền Phong'      , col3: 'Order', col4:  'https://www.google.com.vn/'},
    {   col1: '003' , id: '3', col2: 'Tập đoàn Nhựa'            , col3: 'Procurement', col4:  'https://www.sap.com/'},
    {   col1: '004' , id: '4', col2: 'Tập đoàn Sắt'             , col3: 'Procurement', col4:  'https://www.sap.com/' },
    {   col1: '005' , id: '5', col2: 'Tập đoàn CMC Young'       , col3: 'Procurement', col4:  'https://www.sap.com/'},
    {   col1: '006' , id: '6', col2: 'Công ty CMC Telecom'      , col3: 'Order', col4:  'https://www.google.com.vn/'},
    {   col1: '007' , id: '7', col2: 'Công ty CMC Cor-operation', col3: 'Order', col4:  'https://www.google.com.vn/'},
    {   col1: '008' , id: '8', col2: 'Công ty Vàng'             , col3: 'Order', col4:  'https://www.google.com.vn/'},
    {   col1: '100' , id: '9', col2: 'Tập đoàn SunGroup'        , col3: 'Procurement', col4:  'https://www.sap.com/'},
    {   col1: '111' , id: '10', col2: 'Công ty Honda Việt Nam'  , col3: 'Production' , col4:  'https://vi.wikipedia.org/wiki/ABAP'},
    {   col1: '112' , id: '11', col2: 'Tập đoàn viễn thông quân đội Viettel', col3: 'Production' ,  col4:  'https://vi.wikipedia.org/wiki/ABAP'},
    {   col1: '113' , id: '12', col2: 'Tập đoàn viễn thông VNPT'            , col3: 'Production',   col4:  'https://vi.wikipedia.org/wiki/ABAP'},
    {   col1: '114' , id: '13', col2: 'Tập đoàn FPT'            , col3: 'Production', col4:  'https://vi.wikipedia.org/wiki/ABAP'},
    {   col1: '115' , id: '14', col2: 'Công ty CMC Security'    , col3: 'Production', col4:  'https://vi.wikipedia.org/wiki/ABAP'},
    {   col1: '116' , id: '15', col2: 'Công ty CMC Master'      , col3: 'Manager', col4:  'https://reactjs.org/'},
    {   col1: '120' , id: '16', col2: 'Công ty CMC Global'      , col3: 'Manager', col4:  'https://reactjs.org/'},
    {   col1: '131' , id: '17', col2: 'Tập đoàn Vin Group'      , col3: 'Manager', col4:  'https://reactjs.org/'},
    {   col1: '132' , id: '18', col2: 'Ngân hàng thương mại'    , col3: 'Manager', col4:  'https://reactjs.org/'},
    {   col1: '133' , id: '19', col2: 'Ngân hàng Vietinbank'    , col3: 'Officer', col4:  'https://www.java.com/en/'},
    {   col1: '134' , id: '20', col2: 'Ngân hàng Việt Nam thịnh vượng'       , col3: 'Officer', col4:  'https://www.java.com/en/'},
    {   col1: '231' , id: '21', col2: 'Ngân hàng công thương'   , col3: 'Officer', col4:  'https://www.java.com/en/'},
    {   col1: '232' , id: '22', col2: 'Ngân hàng quân đội'      , col3: 'Officer', col4:  'https://www.java.com/en/'},
    {   col1: '233' , id: '23', col2: 'Công ty Bóng đá Hà Nội ' , col3: 'Officer', col4:  'https://www.java.com/en/'},
    {   col1: '234' , id: '24', col2: 'Công ty điện lực'        , col3: 'Officer', col4:  'https://www.java.com/en/'},
    {   col1: '235' , id: '25', col2: 'Công ty nước sạch'       , col3: 'Deployer',   col4:  'https://www.java.com/en/'},
    {   col1: '236' , id: '26', col2: 'Công ty dọn vệ sinh'     , col3: 'Deployer',   col4:  'https://www.java.com/en/'},
    {   col1: '237' , id: '27', col2: 'Công ty thực phẩm'       , col3: 'Deployer',   col4:  'https://www.java.com/en/'},
    {   col1: '238' , id: '28', col2: 'Công ty công nghiệp chế biến sạch'     , col3: 'Deployer',   col4:  'https://www.java.com/en/'},
    {   col1: '239' , id: '29', col2: 'Công ty gas'             , col3: 'Deployer'              ,   col4:  'https://www.java.com/en/'},
    {   col1: '240' , id: '30', col2: 'Công ty quản lý đất đai' , col3: 'Deployer',   col4:  'https://www.java.com/en/'},

  ];
  
  const columns = [
    {  field: 'col1', headerName: 'Action Code', width: 225 , headerAlign: 'center', align: 'center',  headerClassName: 'super-app-theme--header'},
    {  field: 'col2', headerName: 'Name of Company Code or Company', width: 270 , headerAlign: 'center', align: 'center',  headerClassName: 'super-app-theme--header'},
    {  field: 'col3', headerName: 'Class Processing Action', width: 270 , headerAlign: 'center', align: 'center',  headerClassName: 'super-app-theme--header'},
    {  field: 'col4', headerName: 'Link Services', width: 300 , headerAlign: 'center', align: 'center',  headerClassName: 'super-app-theme--header'},
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
    const [pageSize, setPageSize] = React.useState(8);
    const classes = useStyles();
    return (
      <div className="App">
        <SearchBar placeholder="Search..." data={rows} />
      <h1>ACTION CODE TABLE</h1>
      <div style={{ height: 600, width: '69%', marginLeft: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={classes.root} >
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
