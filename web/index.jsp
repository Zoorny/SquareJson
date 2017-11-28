
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Calc</title>
  <link href="styles.css" type="text/css" rel="stylesheet">
  <script type="text/javascript" src="Calculate.js"></script>
</head>
<body onload="initTable()">
<h3>Calculator</h3>
<h3>Ax^2+Bx+C</h3>

  A: <input type="number" id="a" />
  B: <input type="number" id="b" />
  C: <input type="number" id="c" />

<input type="button" value="Calculate" onClick="calc()"/>
<div type="text" id = "output"/>
<br/>
<table id="resultTable" class = "table">
</table>

</body>
</html>
