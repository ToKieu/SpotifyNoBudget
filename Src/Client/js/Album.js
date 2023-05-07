let addAlbum = document.getElementById("addAlbum");
if (addAlbum) {
    addAlbum.onclick = function (e) {
        e.stopPropagation();
        let AlbumName = document.getElementById("AlbumName").value;
        if (AlbumName.trim() === "") {
            alert("Không được bỏ trống tên Album");
            return;
        }

        // Lấy ra tên file
        let AlbumAvatar = document.getElementById("AlbumAvatar").value;
        if (AlbumAvatar.trim() === "") {
            AlbumAvatar = "NA";
        }

        let AlbumDescriptions = document.getElementById("AlbumDescriptions").value;
        if (AlbumDescriptions.trim() === "") {
            AlbumAvatar = "không có nhận xét nào";
        }
        
        let AlbumListener = document.getElementById("AlbumListener").value;

        if (AlbumListener === "") {
            AlbumListener = 0;
        }

        let AlbumTime = document.getElementById("AlbumTime").value;
        if (/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(AlbumTime)||AlbumTime==="") {
            alert("thời gian không đúng đinh dạng");
            return;
        }
        let AlbumDate = document.getElementById("AlbumDate").value;
        if (/[0-9]{4}:[0-9]{2}:[0-9]{2}/.test(AlbumDate)||AlbumDate==="") {
            alert("Ngàytaoj không đúng đinh dạng");
            return;
        }
        // 2 cái let dưới chưa xong
        let AlbumCreated = document.getElementById("AlbumCreated").value;
        let AlbumSong = document.getElementById("AlbumSong").value;

        // còn phần  ca sĩ + người lập

        let fetchFrom = "/Admin/AddAlbum/Add";

        let data = {
            AlbumName: AlbumName,
            AlbumAvatar: AlbumAvatar,
            AlbumType: AlbumType,
            AlbumListener: AlbumListener,
            AlbumDate: AlbumDate, 
            AlbumTime: AlbumTime,
            AlbumSong: AlbumSong,
            AlbumCreated: AlbumCreated

        };

        fetch(fetchFrom, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        })
            .then(data => console.log(data))
            .then(() => alert("Thêm Album thành công"))
            .catch(data => console.log(data));
    };
}

// Sự kiện dùng để sửa nghệ sĩ
let editAlbum = document.getElementById("editAlbum");
if (editAlbum) {
    editAlbum.onclick = function (e) {
        e.stopPropagation();
        let AlbumID = document.getElementById("AlbumID").innerText.split(" ").pop();

        let AlbumName = document.getElementById("AlbumName").value;
        if (AlbumName.trim() === "") {
            alert("Không được bỏ trống tên Album");
            return;
        }

        // Lấy ra tên file
        let AlbumAvatar = document.getElementById("AlbumAvatar").value;
        if (AlbumAvatar.trim() === "") {
            AlbumAvatar = "NA";
        }

        let AlbumDescriptions = document.getElementById("AlbumDescriptions").value;
        if (AlbumDescriptions.trim() === "") {
            AlbumAvatar = "không có nhận xét nào";
        }
        
        let AlbumListener = document.getElementById("AlbumListener").value;

        if (AlbumListener === "") {
            AlbumListener = 0;
        }

        let AlbumTime = document.getElementById("AlbumTime").value;
        let AlbumDate = document.getElementById("AlbumDate").value;

        // 2 cái let dưới chưa xong
        let Created = document.getElementById("AlbumCreated");
        let AlbumCreated =[];
        for(const x of Created ){
            AlbumCreated.push(x.value);
        }

        let AlSong = document.getElementById("AlbumSong").value;
        let AlbumSong =[];
        for(const x of AlSong ){
            AlbumSong.push(x.value);
        }
        // còn phần  ca sĩ + người lập

        let fetchFrom = "/Admin/AddAlbum/Add";

        let data = {
            AlbumID: AlbumID,
            AlbumName: AlbumName,
            AlbumAvatar: AlbumAvatar,
            AlbumType: AlbumType,
            AlbumListener: AlbumListener,
            AlbumDate: AlbumDate, 
            AlbumTime: AlbumTime,
            AlbumSong: AlbumSong,
            AlbumCreated: AlbumCreated

        };

        fetch(fetchFrom, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        })
            .then(data => console.log(data))
            .then(() => alert("sửa Album thành công"))
            .catch(data => console.log(data));
    };
}

function adduserAl(qq=""){
    const div = document.createElement('div');
    div.setAttribute("class", "d-flex gap-2");
    div.innerHTML += `
        <input list="userAs" class="AlbumCreated form-control value=`+qq+`">
        <button class="btn btn-outline-danger">Xóa</button>
    `;


    let user = document.getElementById("addAluser");
    user.appendChild(div);

    for (const SectionElemElement of user.children) {
        const delBtn = SectionElemElement.querySelector("button");
        if (delBtn === null) {
            throw Error("OK???");
        }
        delBtn.addEventListener("click", () => {
            SectionElemElement.remove();
        });
    }

}

function addSongAl(qq=""){
    const div = document.createElement('div');
    div.setAttribute("class", "d-flex gap-2");
    div.innerHTML += `
        <input list="SongAl" class="AlbumSong form-control" value=`+qq+`>
        <button class="btn btn-outline-danger">Xóa</button>
    `;


    let user = document.getElementById("addAluser");
    user.appendChild(div);

    for (const SectionElemElement of user.children) {
        const delBtn = SectionElemElement.querySelector("button");
        if (delBtn === null) {
            throw Error("OK???");
        }
        delBtn.addEventListener("click", () => {
            SectionElemElement.remove();
        });
    }

}


AddUserBtn = document.getElementsByName("AddUserBtn");
AddUserBtn.addEventListener("click", () => {
    adduserAl();
});

AddUserBtn = document.getElementsByName("AddSongBtn");
AddUserBtn.addEventListener("click", () => {
    addSongAl();
});
