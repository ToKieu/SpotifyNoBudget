<div class="sidePanel" style="background: #1b1b1b">
    <div class="sideIconContainer">
        <svg id="icon-user" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 1024 1024"><title>user</title>
            <path d="m730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084q-29.747 19.159-51.175 57.729t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z"></path>
        </svg>
    </div>
    <ul>
        <?php
        function isActive($name, $data): string
        {
            if (!isset($data["Page"]))
                return "";
            return $data["Page"] == $name ? 'data-active="true"' : '';
        }?>

        <li class="homeIcon"
            <?php
            $data = $data ?? [];
            echo isActive("Overview", $data) ?>
        ><a href="/User/Overview" style="all: unset">Tổng quan về tài khoản</a></li>
        <li class="editIcon" <?php echo isActive("Profile", $data) ?>>
            <a href="/User/Profile" style="all: unset">Chỉnh sửa hồ sơ</a></li>
        <li class="lockIcon"<?php echo isActive("ChangePassword", $data) ?>>
            <a href="/User/ChangePassword" style="all: unset">Đổi mật khẩu</a>
        </li>
        <li class="reloadIcon"
            <?php echo isActive("Restore", $data) ?>
        >Khôi phục danh sách phát
        </li>
        <li class="clockRotateLeftIcon"
            <?php echo isActive("Receipt", $data) ?>
        >Biên nhận
        </li>
        <li class="giftIcon"
            <?php echo isActive("Gift", $data) ?>
        >Đổi
        </li>
    </ul>
</div>