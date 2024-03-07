//isbn,title, author,date 13-12-1994

const books = [];
let inputData = prompt(`Please add the next book's data`, '1,Title,Author,23-12-1994');
while (inputData) {
    const arr = inputData.split(',');
    if ((arr.length!==4) || arr[1]==="" || arr[2]==="" || DateFormatCheck (arr[3]) === false) {
        alert ('Wrong input!');
    } else {
        let invalidDate = arr[3].split('-');
        let validDate = invalidDate[2] + '-' + invalidDate[1] + '-' + invalidDate[0];
        const book = new Book (arr[0], arr[1], arr[2], validDate);
        let isbnCheck = arr[0];
        let res = isbnFind(books,isbnCheck);
        if (res) {
            alert ('Error! The book with this ID is already added');}
        else {
            books.push(book);
        }
    }
    inputData = prompt(`Please add the next book's data`, '1,Title,Author,23-12-1994');
}

printLibrary(books);
function printLibrary (array) {
    const libraryToString = array.map (p => `${p.isbn} ${p.title} ${p.author}, age of book ${calcAge(p.date)} y`);
    console.log(libraryToString.join('\n'));
}

function calcAge (date) {
    const today = new Date ();
    const bookBirth = new Date (date);
    let age = today.getFullYear() - bookBirth.getFullYear();
    const monthDiff = today.getMonth() - bookBirth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < bookBirth.getDate())) {
        age--;
    }
    return age;
}


//printStats (books);
//TODO: most popular author + number of books; avg age of books; total age of books;

function isbnFind (array, uniqueID) {
    let found = false;
    array.forEach(element => {
        if (element.isbn === uniqueID) {
            found = true;
        }
    });
    return found;
}
function DateFormatCheck (string) {
    const arrDate = string.split('-');
    if (arrDate.length !== 3) return false;
    let newDate = new Date (arrDate[2], arrDate[1]-1,arrDate[0]);
    return (newDate.toString() !== "Invalid Date" && newDate.getDate() == arrDate[0] && newDate.getMonth() == arrDate[1] - 1);
}

function Book (isbn,title,author,date) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.date = date;
}