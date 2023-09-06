let name = prompt('이름을 입력해주세요.', "홍길동");

let result =confirm(`당신이 입력한 이름은 ${name}입니다.`+ 
"\n"+'입력하신 정보가 맞으면 확인을 틀리다면 취소를 눌러주세요'); // 당신의 입니다.

if (result == true){
    document.write('입력하신 이름 '+ name +'이 저장되었습니다.')
}else{
    document.write('다시 입력해주세요.')
}