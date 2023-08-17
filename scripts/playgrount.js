
export default function createPlaygrount(){
    let playgrount = document.querySelector('.playground');
    for (let i = 0; i < 9; i++){
        let newDiv = document.createElement('div');
        newDiv.dataset.key = `${i}`;

        switch (i){
            case 0:
                newDiv.style.borderRadius = '16px 0px 0px 0px';
                break;
            case 2:
                newDiv.style.borderRadius = '0px 16px 0px 0px';
                break;
            case 6:
                newDiv.style.borderRadius = '0px 0px 0px 16px';
                break;
            case 8:
                newDiv.style.borderRadius = '0px 0px 16px 0px';
                break;
        }

        playgrount.append(newDiv);
    }
}