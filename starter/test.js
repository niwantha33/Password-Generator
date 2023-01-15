let foo ='123.6';

const regex = new RegExp('[^numericCharacters[number_[i]]]/g');
if (regex.test(foo)) {
    console.log("char")
}