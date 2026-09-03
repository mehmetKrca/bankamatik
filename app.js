let kullaniciAdi = "Mehmet";

let sifre = "1903";

let bakiye = 500000;

$(".loginbtn").click(function(){

    let girilenKullaniciAdi = $(".kadi").val();

    let girilenSifre = $(".sifre").val();

    if(girilenKullaniciAdi == kullaniciAdi && girilenSifre == sifre){

        alert("Doğrulama Tamam Hoşgeldin " + kullaniciAdi);

        alert("1-PARA ÇEK 2-PARA YATIR 3-KREDİ ÇEK");

 

        let yapilacakİslem = Number(prompt("Yapmak istediğiniz islemi numaralandırın"));

        if(yapilacakİslem == 1){

            alert("Hesabınızda olan bakiye " + bakiye)

            let cekilmekİstenenTutar = Number(prompt("Ne kadar çekmek istersiniz"));

        if(cekilmekİstenenTutar <= bakiye){

            let kalanTutar = bakiye - cekilmekİstenenTutar;

            alert("cekilen tutar:" + cekilmekİstenenTutar + "hesapta kalan bakiye: " + kalanTutar);

        }

        else if(cekilmekİstenenTutar > bakiye){

            alert("bakiyenizden fazla bir tutar talep ettiniz");

        }

        }
        if(yapilacakİslem == 2){

            alert("hesabınızda olan bakiye " + bakiye);

            let yatirilmakİstenenTutar = Number(prompt("Ne kadar para yatırmak istyorsunz"));

            kalanTutar = yatirilmakİstenenTutar + bakiye;

            alert("para yatırıldı hesabınızdaki toplam tutar " + kalanTutar);

        }
        else if(yapılacakİslem==3){
             alert("hesabınızda olan bakiye"+bakiye)
        let cekilmekİstenenKredi=Number(prompt("ne kadar kredi çekmek istiyorsunuz"));
        let krediOdenecekTutar=cekilmekİstenenKredi*0.18+cekilmekİstenenKredi;
        let aylıkKrediOdemesi=krediOdenecekTutar/12;
        alert("faizli ödenecek tutar" +krediOdenecekTutar+""+"/12ay/ ayda ödenecek tutar"+aylıkKrediOdemesi.toFixed(2))

        }
       
    }

    else{
        alert("kullanici adın veya sifren hatali");
    }

 

 

 

});