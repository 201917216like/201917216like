window.onload=function(){
    if(document.getElementById("fo") != null){
        document.getElementById("fo").onsubmit=function(){
            var yhm = document.getElementById("user01");
            var mm = document.getElementById("password01");

            if (mm.value!=null&&yhm.value!=null) {
                alert("��¼�ɹ�");
                return true;
            }
            else{ 
            alert("��¼ʧ�ܣ�");
            return false;
                 }
        }
    }
}

