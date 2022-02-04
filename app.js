        const h = document.querySelector('.h');
        const m = document.querySelector('.m');
        const s = document.querySelector('.s');


        setInterval(()=> {


            let time = new Date();
            let hour = time.getHours()*30;
            let min = time.getMinutes()*6;
            let sec = time.getSeconds()*6;


            s.style.transform = `rotate(${sec}deg)`;
            m.style.transform = `rotate(${min}deg)`;
            h.style.transform = `rotate(${hour}deg)`;
            console.log(hour);
            
        }, 1000);

  
