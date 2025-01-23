        let btn1 = document.getElementById('myBtn1');
        let btn2 = document.getElementById('myBtn2');
        let copyCode = document.querySelector('.copyCode');
        let rgb1 = "#dd24ff";
        let rgb2 = "#d91772";

        // This is Child Function of gradientColor1 and gradientColor 2.
        const HexaValues = () =>{
            let myHexaValues = "0123456789abcdef";
            let Colors = "#"
            for(let i=0; i<6; i++){
                Colors = Colors + (myHexaValues[Math.floor(Math.random() * 16)])
            }
            return Colors;
        }
        
        // This is our main function.
        const gradientColor1 = () =>{

            // Value get
            rgb1 = HexaValues();
            console.log(rgb1);

            // Button inner text change
            myBtn1.textContent = `${rgb1}`;

            // Inner Text Change
            copyCode.textContent =
             `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`

            // Background color change 
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}`;

        }
        
        // This is our Second main function.
        const gradientColor2 = () =>{

            // Value get
            rgb2 = HexaValues();
            console.log(rgb2);

            // Button inner text change
            myBtn2.textContent = `${rgb2}`;

            // Inner Text Change
            copyCode.textContent =
             `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`

             // Background color change 
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;

        }
        
        // This is our addEventListener

        btn1.addEventListener('click', () =>{
            gradientColor1();
        })

        btn2.addEventListener('click', () =>{
            gradientColor2();
        })

        copyCode.addEventListener('click', () =>{
           navigator.clipboard.writeText(copyCode.innerText);
           alert("Copy Successfully")
        })