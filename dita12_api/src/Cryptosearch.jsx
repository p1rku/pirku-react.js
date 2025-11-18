import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetchShows = async (name) => {
    const q = name.trim();
    if (!q) return;

    setLoading(true);
    setErr("");
    setResults([]);

    try {
      const res = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`
      );
      if (!res.ok) throw new Error("Failed to fetch data");
      const json = await res.json();
      setResults(json);
    } catch (e) {
      setErr(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchShows(query);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#e2e8f0",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        padding: 24,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 700,
          background: "#111827",
          borderRadius: 12,
          padding: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: 26, marginBottom: 12 }}>
          🎥 Movie & Series Search
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: 8, marginBottom: 16 }}
        >
          <input
            type="text"
            placeholder="Search for a movie or show (e.g. Breaking Bad)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #374151",
              background: "#0b1220",
              color: "white",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 14px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Search
          </button>
        </form>

        {loading && <p>Loading...</p>}
        {err && <p style={{ color: "#f87171" }}>⚠️ {err}</p>}

        <div style={{ display: "grid", gap: 16 }}>
          {results.map((item, i) => {
            const show = item.show;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  background: "#0b1220",
                  borderRadius: 10,
                  border: "1px solid #1f2937",
                  overflow: "hidden",
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                }}
              >
                {show.image ? (
                  <img
                    src={show.image.medium}
                    alt={show.name}
                    style={{ width: 120, height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      width: 120,
                      height: "100%",
                      background: "#1f2937",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#64748b",
                      fontSize: 14,
                    }}
                  >
                    No Image
                  </div>
                )}

                <div style={{ padding: 12, flex: 1 }}>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 18,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    {show.name}
                    {show.rating?.average && (
                      <span
                        style={{
                          background: "#2563eb",
                          color: "white",
                          fontSize: 12,
                          borderRadius: 6,
                          padding: "2px 6px",
                        }}
                      >
                        ⭐ {show.rating.average}
                      </span>
                    )}
                  </h2>

                  {show.genres?.length > 0 && (
                    <p
                      style={{
                        fontSize: 13,
                        opacity: 0.8,
                        margin: "4px 0",
                      }}
                    >
                      {show.genres.join(", ")}
                    </p>
                  )}

                  {show.summary && (
                    <div
                      style={{
                        fontSize: 14,
                        opacity: 0.9,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: show.summary.slice(0, 160) + "...",
                      }}
                    />
                  )}

                  {show.officialSite && (
                    <a
                      href={show.officialSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: 6,
                        color: "#3b82f6",
                        textDecoration: "none",
                        fontSize: 14,
                      }}
                    >
                      🔗 Official Site
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {results.length === 0 && !loading && !err && (
          <p style={{ textAlign: "center", marginTop: 20, opacity: 0.7 }}>
            Try searching for something like <b>Breaking Bad</b> or <b>Friends</b>.
          </p>
        )}
      </div>
    </div>
  );
}
