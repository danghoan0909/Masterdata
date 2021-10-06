import './App.css';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles'; 
import SearchBar from "./Components/SearchBar";

  const rows = [
    {  id: '1' , col1: '9001', col2: 'hoandh',  col3: 'hoandh1',  col4: 'hoandh.cmc@gmail.com', col5: 'Dang Huu Hoan', col6: 'NVVP'},
    {  id: '2' , col1: '1008', col2: 'hungnm',  col3: 'hungnm1',  col4: 'hungnm.tp@gmail.com', col5: 'Mai Ngoc Hung', col6: 'TL'},
    {  id: '3' , col1: '1122', col2: 'trungtp', col3: 'trungtp1', col4: 'trungtp.nhua@gmail.com', col5: 'Trinh Phuc Trung', col6: 'NVVP'},
    {  id: '4' , col1: '9003', col2: 'thanhlt', col3: 'thanhlt1', col4: 'thanhlt.sat@gmail.com', col5: 'Le Tien Thanh', col6: 'MANA'},
    {  id: '5' , col1: 'CMC' , col2: 'toannk',  col3: 'toannk1',  col4: 'toannk.cmcy@gamil.com', col5: 'Nguyen Khanh Toan', col6: 'TL'},
    {  id: '6' , col1: 'CTEL', col2: 'phuongdk', col3: 'phuongdk1', col4: 'phuongdk.cmctel@gmail.com', col5: 'Dinh Khai Phuong', col6: 'NVVP'},
    {  id: '7' , col1: 'CORP', col2: 'huyhd',    col3: 'huyhd1',    col4: 'huyhd.cmccorp@gmail.com', col5: 'Ha Duc Huy', col6: 'HO'},
    {  id: '8' , col1: '9002', col2: 'minhph',   col3: 'minhph1',   col4: 'minhph.vang@gmail.com', col5: 'Pham Hai Minh', col6: 'CTO'},
    {  id: '9' , col1: 'SUN' , col2: 'sontp',    col3: 'sontp1',    col4: 'sontp.sun@gmail.com', col5: 'Phan Thanh Son', col6: 'MANA'},
    {  id: '10' , col1: 'HONDA' , col2: 'hungts',  col3: 'hungts1', col4: 'hungts.honda@gmail.com', col5: 'Tran Son Hong', col6: 'CTO'},
    {  id: '11' , col1: 'VIE'   , col2: 'manhnh',  col3: 'manhnh1', col4: 'manhnh.viettel@gmail.com', col5: 'Nguyen Huu Manh', col6: 'NVVP'},
    {  id: '12' , col1: 'VNPT'  , col2: 'nhungts', col3: 'nhungts1', col4: 'nhungts.vnpt@gmail.com', col5: 'Tran San Nhung', col6: 'CTO'},
    {  id: '13' , col1: 'FPT'   , col2: 'vynt',    col3: 'vynt1',    col4: 'vynt.fpt@gmail.com', col5: 'Nguyen Thi Vy', col6: 'CTO'},
    {  id: '14' , col1: 'CMS'   , col2: 'namnh',   col3: 'namnh1',   col4: 'namnh.cms@gmail.com', col5: 'Nguyen Hai Nam', col6: 'CSO'},
    {  id: '15' , col1: 'CMM'   , col2: 'luongdk', col3: 'luongdk1', col4: 'luongdk.cmm@gmail.com', col5: 'Dinh Khac Luong', col6: 'HO'},
    {  id: '16' , col1: 'CMCG'  , col2: 'ngoclt',  col3: 'ngoclt1',  col4: 'ngoclt.cmcg@gmail.com', col5: 'La Thanh Ngoc', col6: 'CTO'},
    {  id: '17' , col1: 'VIN'   , col2: 'thanhnq', col3: 'thanhnq1', col4: 'thanhnq.vin@gmail.com', col5: 'Nguyen Quang Thanh', col6: 'CTO'},
    {  id: '18' , col1: 'VCOM'  , col2: 'chipm',   col3: 'chipm1',   col4: 'chipm.vcom@gmail.com', col5: 'Phung Minh Chi', col6: 'CSO'},
    {  id: '19' , col1: 'VTIN'  , col2: 'huongpt', col3: 'huongpt1', col4: 'huongpt.vtin@gmail.com', col5: 'Phan Thanh Huong', col6: 'HO'},
    {  id: '20' , col1: 'VP'    , col2: 'tuyenbt', col3: 'tuyenbt1', col4: 'tuyenbt.vp@gmail.com', col5: 'Bui Trung Tuyen', col6: 'NVVP'},
    {  id: '21' , col1: 'BIDV'  , col2: 'ducnt',   col3: 'ducnt1', col4: 'ducnt.bidv@gmail.com', col5: 'Nguyen Tuan Duc', col6: 'CMO'},
    {  id: '22' , col1: 'MB'    , col2: 'ducnv',   col3: 'ducnv1', col4: 'ducnv.mb@gmail.com', col5: 'Nguyen Van Duc', col6: 'CMO'},
    {  id: '23' , col1: '1002'  , col2: 'datht',   col3: 'datht1', col4: 'datht.bdhn@gmail.com', col5: 'Hoang Thai Dat', col6: 'CMO'},
    {  id: '24' , col1: '1003'  , col2: 'lynt',    col3: 'lynt1',  col4: 'lynt.dl@gmail.com', col5: 'Nguyen Thai Ly', col6: 'Store', col6: 'CMO'},
    {  id: '25' , col1: '1004'  , col2: 'bangnv',  col3: 'bangnv1', col4: 'bangnv.ns@gmail.com', col5: 'Nguyen Van Bang', col6: 'CMO'},
    {  id: '26' , col1: '1005'  , col2: 'ngocdt',  col3: 'ngocdt1', col4: 'ngocdt.dvs@gmail.com', col5: 'Dinh Tuan Ngoc', col6: 'CMO'},
    {  id: '27' , col1: '1006'  , col2: 'xuanhh',  col3: 'xuanhh1', col4: 'xuanhh.thph@gmail.com', col5: 'Hoang Huu Xuan', col6: 'CMO'},
    {  id: '28' , col1: '1007'  , col2: 'minhdk',  col3: 'minhdk1', col4: 'minhdk.cncbs@gmail.com', col5: 'Dong Khai Minh', col6: 'CMO'},
    {  id: '29' , col1: '1009'  , col2: 'sonnv',   col3: 'sonnv1',  col4: 'sonvn.gas@gmail.com', col5: 'Nguyen Van Son', col6: 'CMO'},
    {  id: '30' , col1: '1010'  , col2: 'cuongtv',   col3: 'cuongtv1',  col4: 'cuongtv.qldd@gmail.com', col5: 'Tran Van Cuong', col6: 'CMO'},
  ];
  
  const columns  = [
    {  field: 'col1', headerName: 'Company Code', width: 253 , headerAlign: 'center', headerClassName: 'super-app-theme--header', align: 'center', 
   }, 
    {  field: 'col2', headerName: 'User', width: 253, headerAlign: 'center', headerClassName: 'super-app-theme--header',align:'center',},
    {  field: 'col3', headerName: 'Password', width: 253, headerAlign: 'center', headerClassName: 'super-app-theme--header', align:'center', },
    {  field: 'col4', headerName: 'Email', width: 253, headerAlign: 'center',headerClassName: 'super-app-theme--header', align:'center', },
    {  field: 'col5', headerName: 'Name', width: 253, headerAlign: 'center',headerClassName: 'super-app-theme--header', align:'center', },
    {  field: 'col6', headerName: 'Position Code', width: 251 , headerAlign: 'center',headerClassName: 'super-app-theme--header', align:'center', 
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
      <h1>USER TABLE</h1>
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
