function gen_password(len,specialCh) {
    var password = "";
    var password_array = [];
    if (specialCh==1)
    {
        var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+";    
    }
    else
    {
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }

    for (var i = 0; i < len; i++) {
        sym = symbols.charAt(Math.floor(Math.random() * symbols.length));
        password_array.push(sym);
        if (password_array[i]==password_array[i-1]){
            //console.log('alert' + password_array)
            sym="";
            sym = symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
        password += sym;
    }
    return password;
}

function print_passwords(num, len,specialCh) {
    var output = "";
    for (var i = 0; i < num; i++) {
        output += gen_password(len,specialCh) + "<br>";
    }
    return output;
}