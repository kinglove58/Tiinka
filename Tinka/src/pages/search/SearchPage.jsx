import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { FiSearch } from "react-icons/fi";
import CanonicalLink from "../../components/CanonicalLink";

const SEARCH_ENGINE_ID = "076b88e1acd0d49dc";
const SEARCH_SCRIPT_ID = "google-programmable-search-script";
const canonicalUrl = "https://tinkahealthservices.com/search";

const SearchPage = () => {
  const searchContainerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const renderSearch = () => {
      if (!window.google?.search?.cse?.element || !searchContainerRef.current) {
        return;
      }

      searchContainerRef.current.innerHTML = "";
      window.google.search.cse.element.render({
        div: searchContainerRef.current,
        tag: "search",
      });
      setIsReady(true);
    };

    window.__gcse = {
      parsetags: "explicit",
      callback: renderSearch,
    };

    if (window.google?.search?.cse?.element) {
      renderSearch();
      return undefined;
    }

    if (!document.getElementById(SEARCH_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SEARCH_SCRIPT_ID;
      script.async = true;
      script.src = `https://cse.google.com/cse.js?cx=${SEARCH_ENGINE_ID}`;
      document.head.appendChild(script);
    }

    return () => {
      setIsReady(false);
    };
  }, []);

  return (
    <main className="bg-[#f4f8fc] px-4 pb-16 pt-28 text-[#06192f] md:px-8 lg:px-12">
      <CanonicalLink href={canonicalUrl} />
      <Helmet>
        <title>Search Tinka Health Services</title>
        <meta
          name="description"
          content="Search Tinka Health Services for mental health services, accepted insurance, locations, blog articles, and appointment information."
        />
        <meta
          name="keywords"
          content="search Tinka Health Services, mental health services search, psychiatry blog search, insurance search"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Search Tinka Health Services" />
        <meta
          property="og:description"
          content="Search Tinka Health Services for services, accepted insurance, locations, and mental health articles."
        />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <section className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            Site search
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Search Tinka Health Services
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
            Find mental health services, insurance information, care locations,
            blog articles, and appointment details.
          </p>
        </div>

        <div className="rounded-lg border border-[#cfe3f6] bg-white p-5 shadow-sm md:p-7">
          <div className="mb-5 flex items-center gap-3 border-b border-[#e4eef8] pb-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#eaf5ff] text-[#005ab0]">
              <FiSearch aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold">Search the website</h2>
              {!isReady ? (
                <p className="text-sm text-slate-600">Loading search...</p>
              ) : null}
            </div>
          </div>

          <div
            ref={searchContainerRef}
            id="google-programmable-search"
            className="min-h-[220px] overflow-x-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
