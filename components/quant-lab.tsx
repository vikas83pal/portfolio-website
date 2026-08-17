"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

/* ─── Order Book Visualization ─── */
function OrderBookSim() {
  const [bids, setBids] = useState([
    { price: 102.4, qty: 500 },
    { price: 102.39, qty: 300 },
    { price: 102.38, qty: 800 },
    { price: 102.37, qty: 150 },
    { price: 102.36, qty: 620 },
  ]);
  const [asks, setAsks] = useState([
    { price: 102.41, qty: 250 },
    { price: 102.42, qty: 450 },
    { price: 102.43, qty: 700 },
    { price: 102.44, qty: 180 },
    { price: 102.45, qty: 390 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBids((prev) =>
        prev.map((b) => ({
          ...b,
          qty: Math.max(50, b.qty + Math.floor((Math.random() - 0.5) * 100)),
        }))
      );
      setAsks((prev) =>
        prev.map((a) => ({
          ...a,
          qty: Math.max(50, a.qty + Math.floor((Math.random() - 0.5) * 100)),
        }))
      );
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const maxQty = Math.max(
    ...bids.map((b) => b.qty),
    ...asks.map((a) => a.qty)
  );

  return (
    <div className="qd-panel">
      <div className="qd-panel-header justify-between">
        <div className="flex items-center gap-2">
          <span className="status-dot status-dot-live" />
          Limit Order Book
        </div>
        <span className="sim-badge">◆ Simulation</span>
      </div>
      <div className="qd-panel-body">
        {/* Header */}
        <div className="grid grid-cols-2 gap-4 mb-2 font-mono text-[0.6rem] uppercase tracking-wider text-qd-muted">
          <div className="grid grid-cols-2">
            <span>Price</span>
            <span className="text-right">Size</span>
          </div>
          <div className="grid grid-cols-2">
            <span>Price</span>
            <span className="text-right">Size</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-1 font-mono text-[0.55rem] uppercase text-qd-muted">
          <span className="text-green-500">Bid</span>
          <span className="text-red-500">Ask</span>
        </div>

        {/* Rows */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-0.5">
            {bids.map((b, i) => (
              <div key={i} className="relative">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-green-500/10 rounded-sm transition-all duration-300"
                  style={{ width: `${(b.qty / maxQty) * 100}%` }}
                />
                <div className="relative grid grid-cols-2 py-1 px-2 font-mono text-xs">
                  <span className="text-green-400">
                    {b.price.toFixed(2)}
                  </span>
                  <span className="text-right text-qd-text/70">{b.qty}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-0.5">
            {asks.map((a, i) => (
              <div key={i} className="relative">
                <div
                  className="absolute right-0 top-0 bottom-0 bg-red-500/10 rounded-sm transition-all duration-300"
                  style={{ width: `${(a.qty / maxQty) * 100}%` }}
                />
                <div className="relative grid grid-cols-2 py-1 px-2 font-mono text-xs">
                  <span className="text-red-400">{a.price.toFixed(2)}</span>
                  <span className="text-right text-qd-text/70">{a.qty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spread */}
        <div className="mt-3 pt-3 border-t border-qd-border font-mono text-xs text-qd-muted">
          Spread:{" "}
          <span className="text-qd-accent">
            {(asks[0].price - bids[0].price).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Market Data Feed ─── */
function MarketFeedSim() {
  const [ticks, setTicks] = useState<
    { time: string; sym: string; bid: string; ask: string; vol: number }[]
  >([]);

  useEffect(() => {
    const symbols = ["AAPL", "MSFT", "GOOG", "AMZN", "TSLA"];
    const addTick = () => {
      const sym = symbols[Math.floor(Math.random() * symbols.length)];
      const base = { AAPL: 178, MSFT: 415, GOOG: 175, AMZN: 186, TSLA: 245 }[sym] || 100;
      const bid = (base + (Math.random() - 0.5) * 2).toFixed(2);
      const ask = (parseFloat(bid) + 0.01 + Math.random() * 0.05).toFixed(2);
      const vol = Math.floor(Math.random() * 1000) + 100;
      const now = new Date();
      const time = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}.${now
        .getMilliseconds()
        .toString()
        .padStart(3, "0")}`;

      setTicks((prev) => [{ time, sym, bid, ask, vol }, ...prev].slice(0, 8));
    };

    addTick();
    const interval = setInterval(addTick, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="qd-panel">
      <div className="qd-panel-header justify-between">
        <div className="flex items-center gap-2">
          <span className="status-dot status-dot-live" />
          Market Data Feed
        </div>
        <span className="sim-badge">◆ Simulation</span>
      </div>
      <div className="qd-panel-body overflow-x-auto">
        <table className="w-full font-mono text-xs">
          <thead>
            <tr className="text-qd-muted text-[0.6rem] uppercase tracking-wider">
              <th className="text-left pb-2">Timestamp</th>
              <th className="text-left pb-2">Symbol</th>
              <th className="text-right pb-2">Bid</th>
              <th className="text-right pb-2">Ask</th>
              <th className="text-right pb-2">Vol</th>
            </tr>
          </thead>
          <tbody>
            {ticks.map((tick, i) => (
              <tr
                key={i}
                className={`border-t border-qd-border/50 ${
                  i === 0 ? "text-qd-accent" : "text-qd-text/70"
                }`}
              >
                <td className="py-1 text-qd-muted">{tick.time}</td>
                <td className="py-1">{tick.sym}</td>
                <td className="py-1 text-right text-green-400">{tick.bid}</td>
                <td className="py-1 text-right text-red-400">{tick.ask}</td>
                <td className="py-1 text-right">{tick.vol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── Matching Engine Pipeline ─── */
function MatchingEngineSim() {
  const steps = [
    "Order Received",
    "Validation",
    "Order Book",
    "Match",
    "Execution",
  ];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="qd-panel">
      <div className="qd-panel-header justify-between">
        <div className="flex items-center gap-2">
          <span className="status-dot status-dot-live" />
          Matching Engine
        </div>
        <span className="sim-badge">◆ Illustrative</span>
      </div>
      <div className="qd-panel-body">
        <div className="flex flex-col items-center gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={step}>
              <div
                className={`pipeline-node w-full max-w-[200px] text-xs ${
                  activeStep === i
                    ? "!border-qd-accent !text-qd-accent !shadow-[0_0_15px_rgba(62,207,142,0.15)]"
                    : ""
                }`}
              >
                {step}
              </div>
              {i < steps.length - 1 && (
                <div className="pipeline-connector">
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-[2px] rounded-full transition-all duration-400 ${
                      activeStep === i
                        ? "h-full bg-qd-accent"
                        : "h-0 bg-transparent"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Latency Monitor ─── */
function LatencyMonitorSim() {
  const components = [
    { name: "Parser", base: 4.2 },
    { name: "Book Update", base: 1.8 },
    { name: "Strategy", base: 3.7 },
    { name: "Router", base: 2.1 },
  ];

  const [latencies, setLatencies] = useState(
    components.map((c) => ({ name: c.name, value: c.base }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLatencies(
        components.map((c) => ({
          name: c.name,
          value: parseFloat(
            (c.base + (Math.random() - 0.5) * 1.5).toFixed(1)
          ),
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const maxLat = Math.max(...latencies.map((l) => l.value));

  return (
    <div className="qd-panel">
      <div className="qd-panel-header justify-between">
        <div className="flex items-center gap-2">
          <span className="status-dot status-dot-live" />
          Latency Monitor
        </div>
        <span className="sim-badge">◆ Simulation</span>
      </div>
      <div className="qd-panel-body space-y-3">
        {latencies.map((l) => (
          <div key={l.name} className="latency-bar-container">
            <span className="latency-bar-label">{l.name}</span>
            <div className="latency-bar-track">
              <div
                className="latency-bar-fill transition-all duration-700"
                style={{ width: `${(l.value / (maxLat * 1.5)) * 100}%` }}
              />
            </div>
            <span className="latency-bar-value">{l.value} μs</span>
          </div>
        ))}
        <div className="text-[0.55rem] font-mono text-qd-muted mt-2 italic">
          * Simulated latency values for illustration
        </div>
      </div>
    </div>
  );
}

/* ─── VWAP Chart ─── */
function VWAPChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const points = 80;
    const padding = 30;

    // Generate price data
    let price = 100;
    const priceData: number[] = [];
    const volumeData: number[] = [];
    for (let i = 0; i < points; i++) {
      price += (Math.random() - 0.48) * 2;
      priceData.push(price);
      volumeData.push(Math.random() * 500 + 100);
    }

    // Calculate VWAP
    const vwapData: number[] = [];
    let cumVP = 0;
    let cumV = 0;
    for (let i = 0; i < points; i++) {
      cumVP += priceData[i] * volumeData[i];
      cumV += volumeData[i];
      vwapData.push(cumVP / cumV);
    }

    // Calculate MA(10)
    const maData: (number | null)[] = [];
    for (let i = 0; i < points; i++) {
      if (i < 9) {
        maData.push(null);
      } else {
        let sum = 0;
        for (let j = i - 9; j <= i; j++) sum += priceData[j];
        maData.push(sum / 10);
      }
    }

    const minP = Math.min(...priceData) - 2;
    const maxP = Math.max(...priceData) + 2;

    const xScale = (i: number) =>
      padding + (i / (points - 1)) * (w - padding * 2);
    const yScale = (v: number) =>
      h - padding - ((v - minP) / (maxP - minP)) * (h - padding * 2);

    // Grid
    ctx.strokeStyle = "rgba(30, 42, 58, 0.3)";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 5; i++) {
      const y = padding + (i / 4) * (h - padding * 2);
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(w - padding, y);
      ctx.stroke();

      ctx.fillStyle = "#64748b";
      ctx.font = "9px JetBrains Mono, monospace";
      ctx.textAlign = "right";
      ctx.fillText(
        (maxP - (i / 4) * (maxP - minP)).toFixed(1),
        padding - 4,
        y + 3
      );
    }

    // Price line
    ctx.strokeStyle = "rgba(226, 232, 240, 0.6)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i < points; i++) {
      const x = xScale(i);
      const y = yScale(priceData[i]);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // VWAP line
    ctx.strokeStyle = "#3ecf8e";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([]);
    ctx.beginPath();
    for (let i = 0; i < points; i++) {
      const x = xScale(i);
      const y = yScale(vwapData[i]);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // MA line
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    let started = false;
    for (let i = 0; i < points; i++) {
      if (maData[i] === null) continue;
      const x = xScale(i);
      const y = yScale(maData[i]!);
      if (!started) {
        ctx.moveTo(x, y);
        started = true;
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Legend
    const legendY = 12;
    ctx.font = "9px JetBrains Mono, monospace";

    ctx.fillStyle = "rgba(226, 232, 240, 0.6)";
    ctx.fillRect(padding, legendY - 4, 8, 2);
    ctx.fillText("Price", padding + 12, legendY);

    ctx.fillStyle = "#3ecf8e";
    ctx.fillRect(padding + 55, legendY - 4, 8, 2);
    ctx.fillText("VWAP", padding + 67, legendY);

    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(padding + 115, legendY - 4, 8, 2);
    ctx.fillText("MA(10)", padding + 127, legendY);
  }, []);

  return (
    <div className="qd-panel">
      <div className="qd-panel-header justify-between">
        <div className="flex items-center gap-2">
          <span className="status-dot status-dot-live" />
          VWAP / Moving Average
        </div>
        <span className="sim-badge">◆ Simulation</span>
      </div>
      <div className="qd-panel-body">
        <canvas
          ref={canvasRef}
          className="w-full h-[200px]"
          style={{ imageRendering: "auto" }}
        />
      </div>
    </div>
  );
}

/* ─── Main Quant Lab ─── */
export default function QuantLab() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="quant-lab"
      ref={sectionRef}
      className="relative border-t border-qd-border"
    >
      <div className="section-container">
        <div className="section-label">Section 05</div>
        <h2 className="section-title">Quant Lab</h2>
        <p className="section-subtitle mb-4">
          Exploratory quantitative-development visualizations demonstrating
          engineering curiosity about trading infrastructure concepts.
        </p>
        <p className="text-[0.7rem] font-mono text-qd-amber mb-12">
          Note: These are illustrative simulations — not connected to live markets or real trading systems.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div
            className={`transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <OrderBookSim />
          </div>
          <div
            className={`transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <MarketFeedSim />
          </div>
          <div
            className={`transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <MatchingEngineSim />
          </div>
          <div
            className={`transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <LatencyMonitorSim />
          </div>
        </div>

        <div
          className={`mt-4 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <VWAPChart />
        </div>
      </div>
    </section>
  );
}
