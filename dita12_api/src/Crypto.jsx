import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState({ bitcoin: null, ethereum: null });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const API_URL = "https://api.coinpaprika.com/v1/tickers";

  const fetchPrices = async () => {
    setLoading(true);
    setErr("");
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`Failed to fetch data (${res.status})`);
      const json = await res.json();

      const btc = json.find(
        (coin) => coin.id === "btc-bitcoin" || coin.symbol === "BTC"
      );
      const eth = json.find(
        (coin) => coin.id === "eth-ethereum" || coin.symbol === "ETH"
      );

      if (!btc || !eth)
        throw new Error("Could not find Bitcoin or Ethereum in API response.");

      setData({ bitcoin: btc, ethereum: eth });
    } catch (e) {
      setErr(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // auto-refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        background: "#0f172a",
        color: "#e2e8f0",
        padding: 24,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#111827",
          borderRadius: 16,
          padding: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <h1 style={{ margin: 0, marginBottom: 12, fontSize: 24 }}>
          💰 Crypto Tracker
        </h1>

        <button
          onClick={fetchPrices}
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 10,
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          Refresh Prices
        </button>

        {loading && (
          <p style={{ marginTop: 10, opacity: 0.8 }}>Loading latest prices…</p>
        )}

        {err && (
          <p style={{ marginTop: 10, color: "#f87171" }}>
            Error: {err}
          </p>
        )}

        {data.bitcoin && data.ethereum && (
          <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
            {/* Bitcoin Card */}
            <div
              style={{
                background: "#0b1220",
                padding: 14,
                borderRadius: 12,
                border: "1px solid #1f2937",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                  src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=030"
                  alt="Bitcoin"
                  width={32}
                  height={32}
                  style={{ borderRadius: 6 }}
                  onError={(e) => {
                    e.target.src =
                      "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg";
                  }}
                />
                <h2 style={{ margin: 0 }}>Bitcoin (BTC)</h2>
              </div>
              <div style={{ fontSize: 28, fontWeight: 700, marginTop: 6 }}>
                ${data.bitcoin.quotes.USD.price.toLocaleString()}
              </div>
              <div
                style={{
                  fontSize: 14,
                  opacity: 0.8,
                  color:
                    data.bitcoin.quotes.USD.percent_change_24h >= 0
                      ? "#22c55e"
                      : "#ef4444",
                }}
              >
                24h Change: {data.bitcoin.quotes.USD.percent_change_24h.toFixed(2)}%
              </div>
            </div>

            {/* Ethereum Card */}
            <div
              style={{
                background: "#0b1220",
                padding: 14,
                borderRadius: 12,
                border: "1px solid #1f2937",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=030"
                  alt="Ethereum"
                  width={32}
                  height={32}
                  style={{ borderRadius: 6 }}
                  onError={(e) => {
                    e.target.src =
                      "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg";
                  }}
                />
                <h2 style={{ margin: 0 }}>Ethereum (ETH)</h2>
              </div>
              <div style={{ fontSize: 28, fontWeight: 700, marginTop: 6 }}>
                ${data.ethereum.quotes.USD.price.toLocaleString()}
              </div>
              <div
                style={{
                  fontSize: 14,
                  opacity: 0.8,
                  color:
                    data.ethereum.quotes.USD.percent_change_24h >= 0
                      ? "#22c55e"
                      : "#ef4444",
                }}
              >
                24h Change: {data.ethereum.quotes.USD.percent_change_24h.toFixed(2)}%
              </div>
            </div>
          </div>
        )}

        <p style={{ marginTop: 16, fontSize: 12, opacity: 0.6 }}>
          Data from CoinPaprika API • Auto-refreshes every 30 s
        </p>
      </div>
    </div>
  );
}
        