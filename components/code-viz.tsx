"use client";

import React, { useEffect, useRef, useState } from "react";

const codeSnippets = [
  {
    filename: "order_book.hpp",
    html: `<span class="syn-include">#include</span> <span class="syn-string">&lt;map&gt;</span>
<span class="syn-include">#include</span> <span class="syn-string">&lt;cstdint&gt;</span>
<span class="syn-include">#include</span> <span class="syn-string">&lt;vector&gt;</span>

<span class="syn-keyword">template</span><span class="syn-bracket">&lt;</span><span class="syn-keyword">typename</span> <span class="syn-type">Price</span><span class="syn-punct">,</span> <span class="syn-keyword">typename</span> <span class="syn-type">Qty</span><span class="syn-bracket">&gt;</span>
<span class="syn-keyword">class</span> <span class="syn-class">OrderBook</span> {
<span class="syn-keyword">public</span><span class="syn-punct">:</span>
  <span class="syn-keyword">void</span> <span class="syn-func">addOrder</span><span class="syn-bracket">(</span><span class="syn-keyword">const</span> <span class="syn-type">Order</span><span class="syn-punct">&amp;</span> <span class="syn-param">order</span><span class="syn-bracket">)</span><span class="syn-punct">;</span>
  <span class="syn-keyword">void</span> <span class="syn-func">cancelOrder</span><span class="syn-bracket">(</span><span class="syn-type">uint64_t</span> <span class="syn-param">id</span><span class="syn-bracket">)</span><span class="syn-punct">;</span>
  <span class="syn-keyword">void</span> <span class="syn-func">match</span><span class="syn-bracket">()</span><span class="syn-punct">;</span>
  <span class="syn-type">Price</span> <span class="syn-func">bestBid</span><span class="syn-bracket">()</span> <span class="syn-keyword">const</span><span class="syn-punct">;</span>
  <span class="syn-type">Price</span> <span class="syn-func">bestAsk</span><span class="syn-bracket">()</span> <span class="syn-keyword">const</span><span class="syn-punct">;</span>

<span class="syn-keyword">private</span><span class="syn-punct">:</span>
  <span class="syn-type">std::map</span><span class="syn-bracket">&lt;</span><span class="syn-type">Price</span><span class="syn-punct">,</span> <span class="syn-type">std::vector</span><span class="syn-bracket">&lt;</span><span class="syn-type">Order</span><span class="syn-bracket">&gt;&gt;</span> <span class="syn-param">bids_</span><span class="syn-punct">;</span>
  <span class="syn-type">std::map</span><span class="syn-bracket">&lt;</span><span class="syn-type">Price</span><span class="syn-punct">,</span> <span class="syn-type">std::vector</span><span class="syn-bracket">&lt;</span><span class="syn-type">Order</span><span class="syn-bracket">&gt;&gt;</span> <span class="syn-param">asks_</span><span class="syn-punct">;</span>
  <span class="syn-type">uint64_t</span> <span class="syn-param">nextId_</span> <span class="syn-punct">=</span> <span class="syn-number">0</span><span class="syn-punct">;</span>
};`,
  },
  {
    filename: "matching_engine.cpp",
    html: `<span class="syn-include">#include</span> <span class="syn-string">&lt;queue&gt;</span>
<span class="syn-include">#include</span> <span class="syn-string">&lt;unordered_map&gt;</span>
<span class="syn-include">#include</span> <span class="syn-string">&lt;mutex&gt;</span>

<span class="syn-keyword">struct</span> <span class="syn-class">Order</span> {
  <span class="syn-type">uint64_t</span> id;
  <span class="syn-type">double</span> price;
  <span class="syn-type">int64_t</span> quantity;
  <span class="syn-type">bool</span> is_buy;
  <span class="syn-type">int64_t</span> timestamp;
};

<span class="syn-keyword">auto</span> <span class="syn-param">cmp</span> = [](<span class="syn-keyword">const</span> <span class="syn-type">Order</span><span class="syn-punct">&amp;</span> a, <span class="syn-keyword">const</span> <span class="syn-type">Order</span><span class="syn-punct">&amp;</span> b) {
  <span class="syn-keyword">if</span> (a.price == b.price)
    <span class="syn-keyword">return</span> a.timestamp &gt; b.timestamp;
  <span class="syn-keyword">return</span> a.price &lt; b.price;
};

<span class="syn-type">std::priority_queue</span><span class="syn-bracket">&lt;</span>
  <span class="syn-type">Order</span>,
  <span class="syn-type">std::vector</span><span class="syn-bracket">&lt;</span><span class="syn-type">Order</span><span class="syn-bracket">&gt;</span>,
  <span class="syn-keyword">decltype</span>(cmp)
<span class="syn-bracket">&gt;</span> <span class="syn-param">buyQueue</span>(cmp);`,
  },
  {
    filename: "thread_pool.hpp",
    html: `<span class="syn-include">#include</span> <span class="syn-string">&lt;thread&gt;</span>
<span class="syn-include">#include</span> <span class="syn-string">&lt;functional&gt;</span>
<span class="syn-include">#include</span> <span class="syn-string">&lt;condition_variable&gt;</span>

<span class="syn-keyword">class</span> <span class="syn-class">ThreadPool</span> {
<span class="syn-keyword">public</span><span class="syn-punct">:</span>
  <span class="syn-keyword">explicit</span> <span class="syn-func">ThreadPool</span><span class="syn-bracket">(</span><span class="syn-type">size_t</span> <span class="syn-param">threads</span><span class="syn-bracket">)</span><span class="syn-punct">;</span>
  ~<span class="syn-func">ThreadPool</span><span class="syn-bracket">()</span><span class="syn-punct">;</span>

  <span class="syn-keyword">template</span><span class="syn-bracket">&lt;</span><span class="syn-keyword">class</span> <span class="syn-type">F</span><span class="syn-bracket">&gt;</span>
  <span class="syn-keyword">void</span> <span class="syn-func">enqueue</span><span class="syn-bracket">(</span><span class="syn-type">F</span><span class="syn-punct">&amp;&amp;</span> <span class="syn-param">f</span><span class="syn-bracket">)</span><span class="syn-punct">;</span>

<span class="syn-keyword">private</span><span class="syn-punct">:</span>
  <span class="syn-type">std::vector</span><span class="syn-bracket">&lt;</span><span class="syn-type">std::thread</span><span class="syn-bracket">&gt;</span> <span class="syn-param">workers_</span><span class="syn-punct">;</span>
  <span class="syn-type">std::queue</span><span class="syn-bracket">&lt;</span><span class="syn-type">std::function</span><span class="syn-bracket">&lt;</span><span class="syn-keyword">void</span><span class="syn-bracket">()&gt;&gt;</span> <span class="syn-param">tasks_</span><span class="syn-punct">;</span>
  <span class="syn-type">std::mutex</span> <span class="syn-param">mtx_</span><span class="syn-punct">;</span>
  <span class="syn-type">std::condition_variable</span> <span class="syn-param">cv_</span><span class="syn-punct">;</span>
  <span class="syn-type">bool</span> <span class="syn-param">stop_</span> <span class="syn-punct">=</span> <span class="syn-keyword">false</span><span class="syn-punct">;</span>
};`,
  },
  {
    filename: "network_io.cpp",
    html: `<span class="syn-include">#include</span> <span class="syn-string">&lt;sys/epoll.h&gt;</span>
<span class="syn-include">#include</span> <span class="syn-string">&lt;sys/socket.h&gt;</span>
<span class="syn-include">#include</span> <span class="syn-string">&lt;netinet/in.h&gt;</span>

<span class="syn-comment">// Non-blocking event loop with epoll</span>
<span class="syn-type">int</span> <span class="syn-func">run_event_loop</span><span class="syn-bracket">(</span><span class="syn-type">int</span> <span class="syn-param">server_fd</span><span class="syn-bracket">)</span> {
  <span class="syn-type">int</span> epfd = <span class="syn-func">epoll_create1</span>(0);
  <span class="syn-type">epoll_event</span> ev;
  ev.events = EPOLLIN | EPOLLET;
  ev.data.fd = server_fd;
  <span class="syn-func">epoll_ctl</span>(epfd, EPOLL_CTL_ADD,
            server_fd, &amp;ev);

  <span class="syn-type">epoll_event</span> events[1024];
  <span class="syn-keyword">while</span> (<span class="syn-keyword">true</span>) {
    <span class="syn-type">int</span> n = <span class="syn-func">epoll_wait</span>(
      epfd, events, 1024, -1);
    <span class="syn-keyword">for</span> (<span class="syn-type">int</span> i = 0; i &lt; n; ++i)
      <span class="syn-func">handle_event</span>(events[i]);
  }
}`,
  },
];

export default function CodeVisualization() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative border-t border-qd-border">
      <div className="section-container">
        <div className="section-label">Section 09</div>
        <h2 className="section-title">Code</h2>
        <p className="section-subtitle mb-12">
          Selected C++ snippets — real, technically valid code demonstrating
          systems thinking.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {codeSnippets.map((snippet, i) => (
            <div
              key={snippet.filename}
              className={`code-block transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="code-header">{snippet.filename}</div>
              <div className="code-content">
                <pre
                  dangerouslySetInnerHTML={{ __html: snippet.html }}
                  suppressHydrationWarning
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
