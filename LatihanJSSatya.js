let books = [];

// Create: Tambahkan buku baru ke array
function createBook(title, author) {
  const newBook = { id: books.length + 1, title: title, author: author };
  books.push(newBook);
  console.log("Buku ditambahkan:", newBook);
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
    const deletedBook = books.splice(bookIndex, 1);
    console.log("Buku dihapus:", deletedBook[0]);
  } else {
    console.log("Buku dengan ID tersebut tidak ditemukan.");
  }
}

createBook("Bidadari-bidadari Surga", "Tere Liye");
createBook("Ayah", "Andrea Hirata");
updateBook(2, "Cinta di Dalam Gelas", "Andrea Hirata");
deleteBook(3);
console.log(readBooks());
