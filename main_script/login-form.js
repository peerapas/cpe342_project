document.getElementById("login").addEventListener('click',(e) => e.preventDefault());

$("#id01").html(`<form class="modal-content animate">
<div class="imgcontainer">
  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
</div>

<div class="container">
  <label for="uname"><b>Username</b></label>
  <input type="text" placeholder="Enter Username" name="uname" id="uname_field" required>

  <label for="psw"><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="psw" id="psw_field" required>
    
  <button type="submit" id="login-button">Login</button>
  <label>
    <input type="checkbox" checked="checked" name="remember"> Remember me
  </label>
</div>

<div class="container" style="background-color:#f1f1f1">
  <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
  <span class="psw">Don't have account yet? <a href="/register">Register now</a></span>
</div>
</form>`);

var modal = document.getElementById("id01");

window.onclick = (e) => {
  if(e.target == modal)modal.style.display = 'none';
}

$("#login-button").click((e) => {
  e.preventDefault();
  // const user = {username : document.getElementById("uname_field").value, password: document.getElementById("psw_field").value}
  const user = {username: $("#uname_field").val(), password: $("#psw_field").val()}
  // console.log(user.username);
  $.ajax({
    url: 'database/login/'+ user.username,
    type: 'GET',
    datatype: 'json',
    success: (data) => {
      if(data!=""){
        // console.log(data);
        $.ajax({
          url: 'database/login/' + user.password,
          type: 'GET',
          datatype: 'json',
          success: (data2) => {
            console.log(data2);
          }
        })
      }
    }
  })
});