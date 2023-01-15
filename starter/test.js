let foo ='123.6';

const regex = new RegExp('[^]/g');
if (regex.test(foo)) {
    console.log("char")
}