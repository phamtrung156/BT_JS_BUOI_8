function Dom(id) {
    return document.getElementById(id);
}

var dssv = new DanhSachSinhVien();

function layThongTinSV() {
    var _maSV = Dom("txtMaSV").value;
    var _tenSV = Dom("txtTenSV").value;
    var _email = Dom("txtEmail").value;
    var _pass = Dom("txtPass").value;
    var _date = Dom("txtNgaySinh").value;
    var _khoaHoc = Dom("khSV").value;
    var _diemToan = Dom("txtDiemToan").value;
    var _diemLy = Dom("txtDiemLy").value;
    var _diemHoa = Dom("txtDiemHoa").value;

    var sinhVien = new SinhVien(
        _maSV,
        _tenSV,
        _email,
        _pass,
        _date,
        _khoaHoc,
        _diemToan,
        _diemLy,
        _diemHoa


    );
    return sinhVien

}
function themSinhVien(event) {
    event.preventDefault();
    var sinhVien = layThongTinSV();
    if (sinhVien !== null) {
        sinhVien.tinhDTB();
        dssv.themSinhVien(sinhVien);
        console.log(dssv);
        taoBang(dssv.arr);
    }
}

function taoBang(arr) {
    Dom("tbodySinhVien").innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var tagTR = document.createElement("tr");

        var tagTD_MaSV = document.createElement("td");
        var tagTD_TenSV = document.createElement("td");
        var tagTD_Email = document.createElement("td");
        var tagTD_Date = document.createElement("td");
        var tagTD_KhoaHoc = document.createElement("td");
        var tagTD_DTB = document.createElement("td");

        tagTD_MaSV.innerHTML = arr[i].maSV;
        tagTD_TenSV.innerHTML = arr[i].tenSV;
        tagTD_Email.innerHTML = arr[i].email;
        tagTD_Date.innerHTML = arr[i].date;
        tagTD_KhoaHoc.innerHTML = arr[i].khoaHoc;
        tagTD_DTB.innerHTML = arr[i].diemTB;


        tagTR.appendChild(tagTD_MaSV);
        tagTR.appendChild(tagTD_TenSV);
        tagTR.appendChild(tagTD_Email);
        tagTR.appendChild(tagTD_Date);
        tagTR.appendChild(tagTD_KhoaHoc);
        tagTR.appendChild(tagTD_DTB);


        Dom("tbodySinhVien").appendChild(tagTR);

    }


}