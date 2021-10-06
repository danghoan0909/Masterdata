import './App.css';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles'; 
import SearchBar from "./Components/SearchBar";

  const rows = [
    {   col1: '9001' , id: '1', col2: 'Tập đoàn CMC'             , col3: 'VND', },
    {   col1: '1008' , id: '2', col2: 'Tập đoàn Tiền Phong'      , col3: 'VND', },
    {   col1: '1122' , id: '3', col2: 'Tập đoàn Nhựa'            , col3: 'VND', },
    {   col1: '9003' , id: '4', col2: 'Tập đoàn Sắt'             , col3: 'VND', },
    {   col1: 'CMC'  , id: '5', col2: 'Tập đoàn CMC Young'       , col3: 'VND', },
    {   col1: 'CTEL' , id: '6', col2: 'Công ty CMC Telecom'      , col3: 'BAT', },
    {   col1: 'CORP' , id: '7', col2: 'Công ty CMC Cor-operation', col3: 'BAT', },
    {   col1: '9002' , id: '8', col2: 'Công ty Vàng'             , col3: 'BAT', },
    {   col1: 'SUN'  , id: '9', col2: 'Tập đoàn SunGroup'        , col3: 'VND', },
    {   col1: 'HONDA', id: '10', col2: 'Công ty Honda Việt Nam'  , col3: 'USD', },
    {   col1: 'VIE'  , id: '11', col2: 'Tập đoàn viễn thông quân đội Viettel', col3: 'USD', },
    {   col1: 'VNPT' , id: '12', col2: 'Tập đoàn viễn thông VNPT'            , col3: 'USD', },
    {   col1: 'FPT'  , id: '13', col2: 'Tập đoàn FPT'            , col3: 'USD', },
    {   col1: 'CMS'  , id: '14', col2: 'Công ty CMC Security'    , col3: 'USD', },
    {   col1: 'CMM'  , id: '15', col2: 'Công ty CMC Master'      , col3: 'GBP', },
    {   col1: 'CMCG' , id: '16', col2: 'Công ty CMC Global'      , col3: 'GBP', },
    {   col1: 'VIN'  , id: '17', col2: 'Tập đoàn Vin Group'      , col3: 'GBP', },
    {   col1: 'VCOM' , id: '18', col2: 'Ngân hàng thương mại'    , col3: 'GBP', },
    {   col1: 'VTIN' , id: '19', col2: 'Ngân hàng Vietinbank'    , col3: 'JPY', },
    {   col1: 'VP'   , id: '20', col2: 'Ngân hàng Việt Nam thịnh vượng'       , col3: 'JPY', },
    {   col1: 'BIDV' , id: '21', col2: 'Ngân hàng công thương'   , col3: 'JPY',},
    {   col1: 'MB'   , id: '22', col2: 'Ngân hàng quân đội'      , col3: 'JPY', },
    {   col1: '1002' , id: '23', col2: 'Công ty Bóng đá Hà Nội ' , col3: 'JPY', },
    {   col1: '1003' , id: '24', col2: 'Công ty điện lực'        , col3: 'JPY', },
    {   col1: '1004' , id: '25', col2: 'Công ty nước sạch'       , col3: 'JPY', },
    {   col1: '1005' , id: '26', col2: 'Công ty dọn vệ sinh'     , col3: 'JPY', },
    {   col1: '1006' , id: '27', col2: 'Công ty thực phẩm'       , col3: 'JPY', },
    {   col1: '1007' , id: '28', col2: 'Công ty công nghiệp chế biến sạch'     , col3: 'JPY', },
    {   col1: '1009' , id: '29', col2: 'Công ty gas'             , col3: 'JPY', },
    {   col1: '1010' , id: '30', col2: 'Công ty quản lý đất đai' , col3: 'JPY', },
  ];
  
  const columns = [
    {  field: 'col1', headerName: 'Company Code', width: 320 , headerAlign: 'center', align: 'center', headerClassName: 'super-app-theme--header'},
    {  field: 'col2', headerName: 'Name of Company Code or Company', width: 320 , headerAlign: 'center', align: 'center', headerClassName: 'super-app-theme--header'},
    {  field: 'col3', headerName: 'Local Currency Key', width: 260 , headerAlign: 'center', align: 'center', headerClassName: 'super-app-theme--header'},
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
        }
      }
    }); 
  
    function App() { 
      const classes = useStyles();
      const [pageSize, setPageSize] = React.useState(8);
      return (
        <div className="App">
          <SearchBar placeholder="Search..." data={rows} />
        <h1>COMPANY TABLE</h1>
        <div style={{ height: 600, width: '58%', marginLeft: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={classes.root} >
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
          //   // Pagination: CustomPagination, 
          // }}
          />
        </div>
        </div>
    );       
  }
  
export default App;
