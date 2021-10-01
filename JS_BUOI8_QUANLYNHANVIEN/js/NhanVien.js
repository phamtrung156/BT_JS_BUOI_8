function NhanVien(
    _tk,
    _tenNV,
    _email,
    _pass,
    _date,
    _luongCB,
    _chucVu,
    _gioLam
) {
    this.tk = _tk;
    this.tenNV = _tenNV;
    this.email = _email;
    this.pass = _pass;
    this.date = _date;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.luongThang = 0;
    this.xepLoai = "";

    this.tongLuong = function () {
        if (this.chucVu == "Sếp") {
            this.luongThang = this.luongCB * 3
        } else if (this.chucVu == "Trưởng phòng") {
            this.luongThang = this.luongCB * 2;
        } else {
            this.luongThang = this.luongCB;
        }
    }

    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            this.xepLoai = "Xuất sắc";
        } else if (this.gioLam >= 176) {
            this.xepLoai = "Giỏi";
        } else if (this.gioLam >= 160) {
            this.xepLoai = "Khá";
        } else {
            this.xepLoai = "Trung bình";
        }
    }


}


