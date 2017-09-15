# Tips  
1. If you have access to the Personal Cell Creator.  
You can create your own app cell & app cell account.
1. You can use CellManager to create another app cell account.  
TBD  
1. QR code image  
Create an img tag on the fly using jQuery.  

        createQRCodeImg = function(url) {
            let googleAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=177x177&chl=';
            let qrURL = googleAPI + url;
            let aDiv = $('<div>').append(
                '<br>',
                $('<img>', {
                    src: qrURL,
                    alt: url,
                    style: 'width: 200px; height: 200px'
                })
            );
            return aDiv;
        };
