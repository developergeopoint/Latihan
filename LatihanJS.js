// Masing - masing orang bikin branch dengan nama masing masing TANPA MERGE ke branch main/master dulu yaaa

// Arsenio:
// - Dari list buku yang sudah ada, Tambahkan buku "Ronggeng Dukuh Paruk" karya Ahmad Tohari
// - Pada buku "Bumi Manusia", Ubah judul bukunya menjadi "Jejak Langkah" dengan nama author yang sama
// - Hapus Buku "Laskar Pelangi"
// - Tampilkan seluruh buku setelah diedit

// Fadhil:
// - Dari list buku yang sudah ada, Tambahkan buku "Cantik itu Luka" karya Eka Kurniawan dan "Sang Pemimpi" karya Andrea Hirata
// - Pada buku "Perahu Kertas", Ubah judul bukunya menjadi "Partikel" dengan nama author yang sama
// - Hapus Buku "Bumi Manusia"
// - Tampilkan seluruh buku setelah diedit

// Naufal:
// - Dari list buku yang sudah ada, Tambahkan buku "Negeri 5 Menara" karya Ahmad Fuadi
// - Pada buku "Saman", Ubah judul bukunya menjadi "Larung" dengan nama author yang sama
// - Hapus Buku "Negeri Para Bedebah"
// - Tampilkan seluruh buku setelah diedit

// Satya:
// - Dari list buku yang sudah ada, Tambahkan buku "Bidadari-bidadari Surga" karya Tere Liye dan "Ayah" karya Andrea Hirata
// - Pada buku "Laskar Pelangi", Ubah judul bukunya menjadi "Cinta di Dalam Gelas" dengan nama author yang sama
// - Hapus Buku "Perahu Kertas"
// - Tampilkan seluruh buku setelah diedit

// Seno:
// - Dari list buku yang sudah ada, Tambahkan buku "Arus Balik" karya Pramoedya Ananta Toer
// - Pada buku "Negeri Para Bedebah", Ubah judul bukunya menjadi "Pulang" dengan nama author yang sama
// - Hapus Buku "Saman"
// - Tampilkan seluruh buku setelah diedit

// Ayo kita mulai latihan memahami script!
// Simpan data di dalam array (tanpa database)
let books = [];

let bookslength = books[books.length]

// Create: Tambahkan buku baru ke array
function createBook(title, author) {
  //FIX : books.id after deleting
  if (books.length === 0){
  const newBook = { id: books.length + 1, title: title, author: author };
  books.push(newBook);
  console.log("Buku ditambahkan:", newBook);
  }
  else{
  const newBook = { id: (books[books.length - 1].id) + 1, title: title, author: author };
  books.push(newBook);
  console.log("Buku ditambahkan:", newBook);
  }
}

// Read: Tampilkan semua buku yang ada
function readBooks() {
  console.log("Daftar Buku:");
  books.forEach((book) =>
    console.log(`ID: ${book.id}, Judul: ${book.title}, Penulis: ${book.author}`)
  );
}

// Update: Edit buku berdasarkan ID
function updateBook(id, newTitle, newAuthor) {
  const book = books.find((b) => b.id === id);
  if (book) {
    book.title = newTitle;
    book.author = newAuthor;
    console.log("Buku diperbarui:", book);
  } else {
    console.log("Buku dengan ID tersebut tidak ditemukan.");
  }
}

// Delete: Hapus buku berdasarkan ID
function deleteBook(id) {
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex !== -1) {
    const deletedBook = books.toSpliced(bookIndex, 1);
    books = deletedBook;
    //edit pake fungsi toSpliced, terus redefine array books habis didelet (asalnya gak keupdate)
    console.log("Buku dihapus:", deletedBook);
  } else {
    console.log("Buku dengan ID tersebut tidak ditemukan.");
  }
}

// Penggunaan:

// Menambahkan buku
createBook("Bumi Manusia", "Pramoedya Ananta Toer");
createBook("Laskar Pelangi", "Andrea Hirata");
createBook("Perahu Kertas", "Dee Lestari");
createBook("Negeri Para Bedebah", "Tere Liye");
createBook("Saman", "Ayu Utami");
// Membaca semua buku
readBooks();

// Memperbarui buku
updateBook();
// Membaca ulang buku setelah diperbarui
readBooks();

// Menghapus buku
deleteBook();
// Membaca ulang buku setelah dihapus
readBooks();

//Satya
createBook("Bidadari-bidadari Surga", "Tere Liye");
createBook("Ayah", "Andrea Hirata");
updateBook(2, "Cinta di Dalam Gelas", "Andrea Hirata");
deleteBook(3);
console.log(readBooks());
