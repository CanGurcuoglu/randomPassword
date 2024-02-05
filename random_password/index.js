const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
});

function createPassword() {

    const uppCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!'^+%&/()=*_é#${[]}-/,.;~><€@|";

    //const passwordLength = Math.floor(Math.random() * (5)) + 8;
    const passwordLength = 15;

    let password = "";

    const lowSize = Math.floor(Math.random() * (passwordLength - 4));

    const uppSize = Math.floor(Math.random() * (passwordLength - lowSize -4));

    const numSize = Math.floor(Math.random() * (passwordLength - lowSize - uppSize -4));

    const symSize = passwordLength - lowSize - uppSize - numSize - 4;

    for(let i = 0; i<=lowSize; i++){

        password += lowCaseLetters.charAt(Math.floor(Math.random() * lowCaseLetters.length));
    }
    for(let i = 0; i<= uppSize; i++){

        password += uppCaseLetters.charAt(Math.floor(Math.random() * uppCaseLetters.length));
    }
    for(let i = 0; i<=numSize; i++){

        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    for(let i = 0; i<=symSize; i++){

        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

    password = shuffle(password);

    inputEl.value = password;

}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}



function shuffle(password) {
    var arr = password.split('');           
    var n = arr.length;              
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = Math.floor(Math.random() * arr.length);      
      
      var temp = arr[i];             
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    password= arr.join('');                
    return password;                        
  }