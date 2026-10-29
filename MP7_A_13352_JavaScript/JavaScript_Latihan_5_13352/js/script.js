function fn_ValForm() {
    var sMsg = "";
    if (document.getElementyById("nama").value == ""){
        sMsg += "\n* Anda belum Mengisikan nama";
        }

    if (document.getElementById("kelas").value == ""){
        sMsg += "\n* Anda belum mengisikan email";
        }

    if (document.getElementById("umur").value == ""){
        sMsg += "\n* Anda belum mengisikan Umur";
        }

    if(sMgs != ""){
        alert("Peringatan:\n" + sMgs);
            return false;
    } else {
        return true;
        }
    }

