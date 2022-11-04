import Header from "./Header";
import NavPane from "./NavPane";

export default function Error() {
  return (
    <>
      <Header />
      <div className="flex parent">
        <aside>
          <NavPane />
        </aside>
        <section>
          <h1>Error 404 : Page Not Found </h1>
        </section>
      </div>
    </>
  );
}
