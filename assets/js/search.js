function validateForm() {
    // preventDefault();
    let x = document.forms["searchProductForm"]["fsearch"].value;
    if (x == "") {
      alert("Prodduct is not found!!");
      return false;
    }
    else{
        const base_url = 'https://indogt.netlify.app';
        const array1 = [
            'phostoxin 56 tb', 'magtoxin 56 pb', 'phostoxin 57 p', 'magtoxin 60 tb', 'delicia gastoxin 56 tb', 'indofum 99 ga',
            'deltagard 25 ec' , 
            'full face mask', 'self contained breathing apparatus', 'filter rd 40', 'accuro pump', 'drager tube', 'x-am 5600', 'x-am 8000', 'pac 8000',
            'phosphine tolerance test kits',
        ];
        const arrayUrl = [
            '/product/fumigant/postoxin-56-tb.html', 
            '/product/fumigant/magtoxin-56-pb.html', 
            '/product/fumigant/postoxin-57-p.html', 
            '/product/fumigant/magtoxin-60-tb.html', 
            '/product/fumigant/dg56tb.html', 
            '/product/fumigant/indofum.html',
            '/product/insecticide/insecticide.html' , 
            '/product/safety/full-face-mask.html',
            '/product/safety/scba.html', 
            '/product/safety/filter-rd40.html', 
            '/product/safety/accuro-pump.html', 
            '/product/safety/drager-tube.html', 
            '/product/safety/5600.html', 
            '/product/safety/8000.html', 
            '/product/safety/pac-8000.html',
            '/product/tools/pt-test-kit.html',
        ];

        let modified = x.toLowerCase().toString();

        let found = array1.findIndex(element => element === modified);
        
        window.location.href = base_url + arrayUrl[found];
        
        // console.log(arrayUrl[found]);
        // alert(arrayUrl[found]);
        return false;
    }
  }