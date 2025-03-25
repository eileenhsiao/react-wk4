import { useParams } from 'react-router';
import Header from "../components/Header"
import Footer from "../components/Footer"
import BookDetail from "../components/BookDetail";
import books from "../json/books.json";

function Book() {
   const { bookId } = useParams();
   const book = books.find(
      (x) => x.id === Number(bookId)
   );

   return (
      <div className="container mx-auto main-layout bg-gray-900">
         <Header
            title="Book Detail"
            slogan="More information for you."
         />
         <BookDetail book={book} className="content" />
         <Footer className="footer" />
      </div>
   );
}

export default Book;
