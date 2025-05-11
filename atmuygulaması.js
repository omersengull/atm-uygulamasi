let bakiye = 9000;
let secim = prompt("1-Bakiye görüntüleme\n2-Para çekme\n3-Para yatırma\n4-Çıkış\nLütfen yapmak istediğiniz işlemi seçiniz");
switch (secim) {
    case "1":
        alert("Bakiyeniz:" + bakiye);
        break;
    case "2":
        let cekim = Number(prompt("Kaç TL çekmek istiyorsunuz?"));
        if(cekim>bakiye){
            alert("Bakiyenizden fazla tutar çekemezsiniz!");
        }
        else{
            bakiye-=cekim;
            alert("Çekilen tutar:" + cekim + "TL.Kalan bakiyeniz:" + bakiye+"TL");
        }
        break;
    case "3":
        let yatirim = Number(prompt("Kaç TL yatırmak istiyorsunuz?"));
        bakiye+=yatirim;
        alert("Yatırılan tutar:" + yatirim + "TL.Kalan bakiyeniz:" + bakiye+"TL");
        break;
    case "4":
        break;
    default:
        alert("Lütfen geçerli bir işlem seçiniz");
        break;
}