import Header from "./Header";
import NavPane from "./NavPane";

export default function Help() {
  return (
    <>
      <Header />
      <div className="flex parent">
        <aside>
          <NavPane />
        </aside>
        <section>
          <h2> 🤷‍♂️ How can we help you?</h2>
        </section>
      </div>
    </>
  );
}
