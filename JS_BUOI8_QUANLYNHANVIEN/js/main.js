function Dom(id) {
    return document.getElementById(id);
}

var dsnv = new DanhSachNhanVien();

function thongTinNhanVien() {
    var _tk = Dom("tknv").value;
    var _tenNV = Dom("name").value;
    var _email = Dom("email").value;
    var _pass = Dom("password").value;
    var _date = Dom("datepicker").value;
    var _luongCB = Dom("luongCB").value;
    var _chucVu = Dom("chucvu").value;
    var _gioLam = Dom("gioLam").value;

    var nhanVien = new NhanVien(
        _tk,
        _tenNV,
        _email,
        _pass,
        _date,
        _luongCB,
        _chucVu,
        _gioLam
    );
    return nhanVien

}

function themNguoiDung(event) {
    event.preventDefault();

    var nhanVien = thongTinNhanVien();

    if (nhanVien !== null) {
        nhanVien.tongLuong();
        nhanVien.xepLoai();
        dsnv.themNV(nhanVien);
        console.log(dsnv);
        taoBang(dsnv.arr);
    }
}


function taoBang(arr) {
    Dom("tableDanhSach").innerHTML = "";
    for (var i = 0; i < arr.length; i++) {

        var tagTR = document.createElement("tr");

        var tagTD_tk = document.createElement("td");
        var tagTD_tenNV = document.createElement("td");
        var tagTD_email = document.createElement("td");
        var tagTD_date = document.createElement("td");
        var tagTD_chucVu = document.createElement("td");
        var tagTD_tongLuong = document.createElement("td");
        var tagTD_xepLoai = document.createElement("td");

        tagTD_tk.innerHTML = arr[i].tk;
        tagTD_tenNV.innerHTML = arr[i].tenNV;
        tagTD_email.innerHTML = arr[i].email;
        tagTD_date.innerHTML = arr[i].date;
        tagTD_chucVu.innerHTML = arr[i].chucVu;
        tagTD_tongLuong.innerHTML = arr[i].luongThang;
        tagTD_xepLoai.innerHTML = arr[i].xepLoai;

        tagTR.appendChild(tagTD_tk);
        tagTR.appendChild(tagTD_tenNV);
        tagTR.appendChild(tagTD_email);
        tagTR.appendChild(tagTD_date);
        tagTR.appendChild(tagTD_chucVu);
        tagTR.appendChild(tagTD_tongLuong);
        tagTR.appendChild(tagTD_xepLoai);

        Dom("tableDanhSach").appendChild(tagTR);
    }
}