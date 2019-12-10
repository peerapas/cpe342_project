document.getElementById("login").addEventListener('click', (e) => e.preventDefault());

$("#id01").html(`<form class="login_modal-content animate">
<div class="login_imgcontainer">
  <span onclick="document.getElementById('id01').style.display='none'" class="login_close" title="Close Modal">&times;</span>
</div>

<div class="login_container">
  <label for="uname"><b>Username</b></label>
  <input type="text" placeholder="Enter Username" name="uname" id="uname_field" required>

  <label for="psw"><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="psw" id="psw_field" required>
    
  <button type="submit" id="login-button">Login</button>
  <label>
    <input type="checkbox" checked="checked" name="remember"> Remember me
  </label>
</div>

<div class="login_container" style="background-color:#f1f1f1">
  <button type="button" onclick="document.getElementById('id01').style.display='none'" class="login_cancelbtn">Cancel</button>
  <span class="login_psw">Don't have account yet? <a href="/register">Register now</a></span>
</div>
</form>`);

var modal = document.getElementById("id01");

window.onclick = (e) => {
    if (e.target == modal) modal.style.display = 'none';
}

$("#login-button").click((e) => {
    e.preventDefault();
    // const user = {username : document.getElementById("uname_field").value, password: document.getElementById("psw_field").value}
    const user = { username: $("#uname_field").val(), password: $("#psw_field").val() }
        // console.log(user);
    $.post('/employees/login', { username: user.username, password: user.password }, d => {
        if (d == 'done') {
            $.post('/session', { username: user.username });
            window.location.href = "/employee_index";
        } else document.getElementsByClassName("login_container").innerHTML += `<label style="color: red, display: none">
        username or password incorrect
      </label>;`
    });
});