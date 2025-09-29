<template>
  <div>
    <router-view />
  </div>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
p,label,button, input, .btn {
  font-family: 'Inter', sans-serif;  
}


.btn {    
  background-color: #007BFF;
  text-decoration: none;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;  
  transform: all 2s;
}

.btn:hover {
  background-color: #1b89ff;
}

.btn:active {
  background-color: hsl(211, 91%, 47%);
}

.btn-disabled {

  background-color: #e7e7e7;
  text-decoration: none;
  box-sizing: border-box;
  color: rgb(153, 153, 153);
  border: solid;
  border-color: rgb(204, 204, 204);;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;  
}

.btn.back {
  background-color: white;
  color: rgb(99, 99, 99);  
  padding: 8px 20px;
}

.btn.back::before{
  content: "← ";
}

input:focus,
textarea:focus,
button:focus {
  outline: none; /* removes the default browser highlight */  
}

</style>