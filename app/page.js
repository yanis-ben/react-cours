import Menu from "@/src/Menu";
import Header from "@/src/Header";
import { REACT_CARDS } from "@/src/Cartes";
import { ReactCard } from "@/src/ReactCard";

export default function Home({ searchParams }) {
  const currentFilter = searchParams.filter;
  const filters = [...new Set(REACT_CARDS.map((c) => c.category))];

  console.log({ currentFilter, filters });

  return (
    <main className="m-auto flex h-full flex-col px-4">
      <div>
        <Header />
      </div>
      {/* Conteneur principal */}
      <div className="flex flex-row gap-6 mt-6 lg:flex-col">
        {/* Menu */}
        <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
          <Menu currentFilter={currentFilter} filters={filters} />
          {/* React Cards */}
          <div className="size-full overflow-auto">
            <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {REACT_CARDS.filter((card) => {
                if (!currentFilter) return true;
                return card.category === currentFilter;
              }).map((card) => (
                <ReactCard
                  hideCategory={Boolean(searchParams.filter)}
                  key={card.name}
                  card={card}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
