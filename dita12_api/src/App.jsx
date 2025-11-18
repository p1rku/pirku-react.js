import { useState } from "react";

export default function App() {
  const [coin, setCoin] = useState("bitcoin");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // Base API
  const API_BASE = "https://api.coinpaprika.com/v1";

  const fetchCoin = async (query) => {
    const q = query?.trim().toLowerCase() || coin.trim().toLowerCase();
    if (!q) return;

    setLoading(true);
    setErr("");
    setData(null);

    try {
      // First fetch all tickers to find the matching coin id
      const listRes = await fetch(`${API_BASE}/coins`);
      if (!listRes.ok) throw new Error("Failed to fetch coin list");
      const coins = await listRes.json();

      // Find coin by name or symbol
      const match = coins.find(
        (c) =>
          c.name.toLowerCase() === q ||
          c.symbol.toLowerCase() === q ||
          c.id.toLowerCase() === q
      );

      if (!match) throw new Error("Coin not found");

      // Now fetch detailed ticker info
      const res = await fetch(`${API_BASE}/tickers/${match.id}`);
      if (!res.ok) throw new Error("Failed to fetch coin data");
      const json = await res.json();
      setData({ ...json, info: match });
    } catch (e) {
      setErr(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCoin(coin);
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        background: "#0f172a",
        color: "#e2e8f0",
        padding: "24px",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          background: "#111827",
          borderRadius: 16,
          padding: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <h1 style={{ margin: 0, marginBottom: 12, fontSize: 24 }}>
          🔍 Crypto Finder
        </h1>

        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            placeholder="Type coin name or symbol (e.g. bitcoin, eth)"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            style={{
              flex: 1,
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #374151",
              background: "#0b1220",
              color: "white",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "none",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Search
          </button>
        </form>

        <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
          <button
            onClick={() => fetchCoin(coin)}
            style={{
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid #374151",
              background: "#0b1220",
              color: "white",
              cursor: "pointer",
            }}
          >
            Refresh
          </button>
        </div>

        {loading && (
          <p style={{ marginTop: 16, opacity: 0.8 }}>Loading data…</p>
        )}
        {err && (
          <p style={{ marginTop: 16, color: "#f87171" }}>
            Error: {err === "Coin not found" ? "Coin not found" : err}
          </p>
        )}

        {data && (
          <div
            style={{
              marginTop: 16,
              padding: 16,
              borderRadius: 12,
              background: "#0b1220",
              border: "1px solid #1f2937",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 8,
              }}
            >
              <img
                src={`https://cryptologos.cc/logos/${data.info.symbol.toLowerCase()}-${data.info.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}-logo.svg?v=030`}
                alt={data.info.name}
                width={48}
                height={48}
                onError={(e) => {
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
                }}
                style={{ borderRadius: 8 }}
              />
              <h2 style={{ margin: 0 }}>
                {data.name} ({data.symbol})
              </h2>
            </div>

            <div style={{ fontSize: 32, fontWeight: 700 }}>
              ${data.quotes.USD.price.toLocaleString()}
            </div>

            <div style={{ opacity: 0.9, marginTop: 4 }}>
              Rank #{data.rank}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginTop: 12,
              }}
            >
              <div
                style={{
                  background: "#0a0f1a",
                  padding: 10,
                  borderRadius: 10,
                  border: "1px solid #1f2937",
                }}
              >
                <div style={{ opacity: 0.7, fontSize: 12 }}>24h Change</div>
                <div
                  style={{
                    fontWeight: 600,
                    color:
                      data.quotes.USD.percent_change_24h >= 0
                        ? "#22c55e"
                        : "#ef4444",
                  }}
                >
                  {data.quotes.USD.percent_change_24h.toFixed(2)}%
                </div>
              </div>
              <div
                style={{
                  background: "#0a0f1a",
                  padding: 10,
                  borderRadius: 10,
                  border: "1px solid #1f2937",
                }}
              >
                <div style={{ opacity: 0.7, fontSize: 12 }}>Market Cap</div>
                <div style={{ fontWeight: 600 }}>
                  ${data.quotes.USD.market_cap.toLocaleString()}
                </div>
              </div>
              <div
                style={{
                  background: "#0a0f1a",
                  padding: 10,
                  borderRadius: 10,
                  border: "1px solid #1f2937",
                }}
              >
                <div style={{ opacity: 0.7, fontSize: 12 }}>Volume (24h)</div>
                <div style={{ fontWeight: 600 }}>
                  ${data.quotes.USD.volume_24h.toLocaleString()}
                </div>
              </div>
              <div
                style={{
                  background: "#0a0f1a",
                  padding: 10,
                  borderRadius: 10,
                  border: "1px solid #1f2937",
                }}
              >
                <div style={{ opacity: 0.7, fontSize: 12 }}>ATH Price</div>
                <div style={{ fontWeight: 600 }}>
                  ${data.quotes.USD.ath_price?.toLocaleString() || "—"}
                </div>
              </div>
            </div>

            {data.last_updated && (
              <div style={{ marginTop: 10, opacity: 0.8, fontSize: 12 }}>
                Updated: {new Date(data.last_updated).toLocaleString()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
