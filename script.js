var height = prompt("Яка довжина ялинки?")
height = Number(height)

  var message =
      height <= 0 ? "Довжина має бути додатнім числом!" :
      height = 1 ? "Довжина замала!" :
      height > 1 ? document.body.innerHTML+="</br>";
         document.body.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</br>";
         document.body.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**</br>";
         document.body.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***</br>";
         document.body.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****</br>";
         document.body.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*****</br>";
         document.body.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;******</br>";
         document.body.innerHTML+="&nbsp;&nbsp;&nbsp;*******</br>";
         document.body.innerHTML+="&nbsp;&nbsp;********</br>";
         document.body.innerHTML+="&nbsp;*********</br>";
         document.body.innerHTML+="**********</br>";

      ""
  alert(message);
