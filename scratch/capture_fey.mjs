import { spawn } from "child_process";
import fs from "fs";

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Starting Chrome with remote debugging...");
  const chromeDataDir = "/Users/afangbender/Downloads/Lokin-Lab/.chrome-data";
  fs.mkdirSync(chromeDataDir, { recursive: true });

  const chrome = spawn(
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    [
      "--headless",
      "--disable-gpu",
      "--remote-debugging-port=9222",
      `--user-data-dir=${chromeDataDir}`,
      "--window-size=1440,900",
      "https://fey.lokinlabs.com.ng",
    ]
  );

  let wsUrl = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch("http://127.0.0.1:9222/json");
      const list = await res.json();
      const page = list.find((p) => p.type === "page");
      if (page && page.webSocketDebuggerUrl) {
        wsUrl = page.webSocketDebuggerUrl;
        break;
      }
    } catch (e) {
      await sleep(500);
    }
  }

  if (!wsUrl) {
    console.error("Failed to connect to Chrome debugging port");
    chrome.kill();
    return;
  }

  const ws = new WebSocket(wsUrl);
  let idCounter = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      pending.get(data.id)(data);
      pending.delete(data.id);
    }
  };

  await new Promise((resolve) => (ws.onopen = resolve));

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = idCounter++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send("Page.enable");
  await send("Runtime.enable");

  console.log("Waiting for page load...");
  await sleep(3000);

  // Capture Onboarding
  console.log("Capturing Onboarding Modal...");
  let snap1 = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(
    "/Users/afangbender/Downloads/Lokin-Lab/public/screenshots/fey-onboarding.png",
    Buffer.from(snap1.result.data, "base64")
  );

  // Step 1: Click "Log In" directly (which takes username and logs in immediately!)
  console.log("Switching to Log In mode...");
  await send("Runtime.evaluate", {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const loginBtn = buttons.find(b => b.textContent.includes('Log In'));
        if (loginBtn) loginBtn.click();
      })()
    `,
  });

  await sleep(800);

  // Enter Display Name
  console.log("Entering username in Log In mode...");
  await send("Runtime.evaluate", {
    expression: `
      (() => {
        const input = document.querySelector('input');
        if (input) {
          const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          setter.call(input, 'Unwana');
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }
        const buttons = Array.from(document.querySelectorAll('button'));
        const enterBtn = buttons.find(b => b.textContent.includes('Log In & Enter'));
        if (enterBtn) enterBtn.click();
      })()
    `,
  });

  await sleep(3000);

  // Capture Dashboard
  console.log("Capturing Dashboard...");
  let snap2 = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(
    "/Users/afangbender/Downloads/Lokin-Lab/public/screenshots/fey-dashboard.png",
    Buffer.from(snap2.result.data, "base64")
  );

  // Navigate to Games
  console.log("Navigating to /games...");
  await send("Page.navigate", { url: "https://fey.lokinlabs.com.ng/games" });
  await sleep(3500);

  console.log("Capturing Games...");
  let snap3 = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(
    "/Users/afangbender/Downloads/Lokin-Lab/public/screenshots/fey-games.png",
    Buffer.from(snap3.result.data, "base64")
  );

  // Navigate to Constellation
  console.log("Navigating to /constellation...");
  await send("Page.navigate", {
    url: "https://fey.lokinlabs.com.ng/constellation",
  });
  await sleep(3500);

  console.log("Capturing Constellation...");
  let snap4 = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(
    "/Users/afangbender/Downloads/Lokin-Lab/public/screenshots/fey-constellation.png",
    Buffer.from(snap4.result.data, "base64")
  );

  // Navigate to Discover
  console.log("Navigating to /discover...");
  await send("Page.navigate", {
    url: "https://fey.lokinlabs.com.ng/discover",
  });
  await sleep(3500);

  console.log("Capturing Discover...");
  let snap5 = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(
    "/Users/afangbender/Downloads/Lokin-Lab/public/screenshots/fey-discover.png",
    Buffer.from(snap5.result.data, "base64")
  );

  console.log("Done!");
  ws.close();
  chrome.kill();
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
