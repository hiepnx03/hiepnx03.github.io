export const header = () => `

<div class="header">
  <div class="header-content__main">
    <div class="header-content__title">
      <nav class="navigation">
        <a href="#!" class="logo">Jobs For Student</a>
      </nav>
    </div>
    <div id="menu">
      <ul>
        <li><a onclick="onClickHomePage()">Trang chủ</a></li>
        <li>
          <a href="#">Việc làm</a>
          <ul class="sub-menu">
            <li><a href=""> Việc làm mới nhất</a></li>
            <li><a href=""> Tìm việc làm</a></li>
            <li><a href=""> Việc làm mới nhất</a></li>
            <li>
              <a href="">
                <span>Việc làm cho IT</span>
                <div style="position: absolute; right: 20px; top: 0">
                  <i class="arrow right"></i></div
              ></a>
              <ul class="sub-menu__child">
                <li><a href="">Tester</a></li>
                <li><a href="">Business Analyst</a></li>
                <li><a href="">Phần mềm</a></li>
                <li><a href="">Phần cứng</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a onclick="onClickCompany()"> Công ty</a></li>
        <li><a href="#"> Nghề nghiệp</a></li>
        <li><a href="#"> Liên hệ</a></li>
      </ul>
    </div>
    <div class="header-content__right">
      <div class="flex" style="position: relative">
        <div style="padding-right: 10px">
          <a onclick="onClickNhaTuyenDung()">Nhà tuyển dụng</a>
        </div>
        <div class="divider-horizontal"></div>
        <div class="pl-2">
          <a>Đăng Nhập/Đăng Ký</a>
        </div>

        <div class="pl-5 pr-[20px]">
          <a>VN</a>
          <span>|</span>
          <a style="color: var(--grayColor)">EN</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;
