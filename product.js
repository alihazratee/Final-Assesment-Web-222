<!DOCTYPE html>
<html>
<head>
<title>Product</title>
<style>
body{
padding: 25px;
}
table{
padding:100px;
}
td {
padding-top: 20px;
padding-bottom: 20px;
padding-left: 30px;
padding-right: 30px;
}
.title {
   color: #5C6AC4;
}
</style>
</head>
<body>
  <form action="/action_page.php">
   <form name="signup" onsubmit="return checkForm()" id="sectionForm"  method="post">
  <table>
       <input type="hidden" name="lastName" id="lastName" value="Hazrati">
      <input type="hidden" name="studentId" id="studentId" value="114016207">
   <tbody><tr>
   <td style="text-align:right;">Product Id :</td>
   <td> <input placeholder="8-digit number" oninput="this.setCustomValidity('')" type="text" pattern="\d{8}" oninvalid="this.setCustomValidity('Should be 8-digit number')" required="" name="name"></td>
      </tr>
   <tr>
      <td style="text-align:right;">Product Details : </td>
      <td><textarea placeholder="description - Min 20 chars" minlength="20" pattern="[A-Z]{1,}" oninput="this.setCustomValidity('')" oninvalid="this.setCustomValidity('Should start with uppercase letter and should have atleast 20 characters')" required=""></textarea></td>
      </tr>
      <tr>
      <td style="text-align:right;">Price : </td>
      <td><input placeholder="price(less than 1000)" minlength="1" pattern="\d{,3}" oninput="this.setCustomValidity('')" oninvalid="this.setCustomValidity('Should be number less than 1000')" type="text" name="name"></td>
      </tr>
   <tr>
   <td style="text-align:right;">Supplier username :</td>
   <td> <input id="sname" placeholder="name of supplier (atleast 6 char)" type="text" required="" name="name"><span id="error">Must start with alphabet</span></td>
      </tr>
   <tr>
      </tr><tr>
      <td style="text-align:right;"> Supplier status : </td>
      <td><input type="checkbox" name="section" value="newsupplier">New Supplier
   <input type="checkbox" name="section" value="contractsigned">Contract Signed
   <input type="checkbox" name="section" value="qualitytested">Quality Tested</td>
   </tr>
   <tr><td style="text-align:right;">Supplier e-mail Id : </td><td><input placeholder="enter email" type="email" required="" name="name"></td></tr>
   <tr><td></td><td><button type="submit" value="SUBMIT">SUBMIT</button></td></tr>
   </tbody>
  </table>
 </form>
 
</body>
<script>
  (function() {
  const form = document.querySelector('#sectionForm');
  const checkboxes = form.querySelectorAll('input[type=checkbox]');
  const checkboxLength = checkboxes.length;
  const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;
  function init() {
  if (firstCheckbox) {
  for (let i = 0; i < checkboxLength; i++) {
  checkboxes[i].addEventListener('change', checkValidity);
  }
  checkValidity();
  }
  }
  function isChecked() {
  for (let i = 0; i < checkboxLength; i++) {
  if (checkboxes[i].checked) return true;
  }
  return false;
  }
  function checkValidity() {
  const errorMessage = !isChecked() ? 'At least one checkbox should be selected.' : '';
  firstCheckbox.setCustomValidity(errorMessage);
  }
  init();
  })();
  function checkForm(){
  var x = document.getElementById("sname").value;
